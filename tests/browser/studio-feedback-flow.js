async (page) => {
  const base = `http://127.0.0.1:4174/?v=studio-feedback-${Date.now()}`;
  const checks = [];
  const errors = [];
  const check = (condition, message) => { if (!condition) throw new Error(message); checks.push(message); };
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${base}#/home`);
  await page.locator('#home-graph-preview svg').waitFor();
  const data = await page.evaluate(() => fetch('data/evidence.json').then(response => response.json()));
  const files = data.items.flatMap(item => item.files.map(file => ({ ...file.framework, file })));
  const byId = new Map(files.map(file => [file.id, file]));
  const groupKey = file => file.group ? `group:${file.projects.length ? file.projects.join('|') + ':' : ''}${file.group}` : file.id;
  const connected = new Set(data.fileLinks.flatMap(link => [groupKey(byId.get(link.source)), groupKey(byId.get(link.target))]));
  const preview = page.locator('#home-graph-preview');
  const shown = await preview.locator('.cluster').evaluateAll(groups => groups.map(group => group.dataset.group));
  check(shown.length === connected.size && shown.every(key => connected.has(key)), 'Homepage preview shows exactly the connected bubbles');
  check(await preview.locator('.preview-node').count() === files.filter(file => connected.has(groupKey(file))).length, 'Preview includes the actual member files');
  check(await preview.locator('.relationship-arrow').count() === 48, 'Preview renders the real typed graph arrows');
  check(await page.locator('#hub-introduction').count() === 1, 'Homepage has a dedicated explanation of the Hub');
  check(await page.locator('.hero-copy .eyebrow').textContent() === 'UrbanLab — Future Healthy Cities', 'Homepage uses the UrbanLab name');
  check(!/master studio/i.test(await page.locator('body').innerText()), 'Old studio branding is absent from homepage copy');
  check(await page.locator('.site-footer a').count() === 1 && !/Trace evidence/i.test(await page.locator('.site-footer').innerText()), 'Footer has no Trace Evidence into Design link');
  const peopleLink = page.locator('#main-nav [data-page="people"]');
  await peopleLink.hover();
  check(await peopleLink.evaluate(link => parseFloat(getComputedStyle(link).fontSize) >= 16 && Number(getComputedStyle(link).fontWeight) >= 650), 'Larger navigation becomes bold on hover');
  check(await page.locator('#main-nav [data-page="partners"], #hub-subnav [data-view="list"]').count() === 0, 'Navigation contains People and only two Hub views');
  await page.screenshot({ path: 'output/playwright/studio-home-desktop.png', fullPage: true });
  await page.getByRole('link', { name: 'Open Knowledge Graph', exact: true }).click();
  await page.locator('.canvas-panel .node').last().waitFor();
  check(await page.locator('.canvas-panel .node').count() === 660, 'The whole homepage preview opens the real Knowledge Graph');

  // A tag starts a fresh Grid query, independent of the previously active filters.
  const tagged = files.find(file => file.tags.includes('Mobility'));
  await page.goto(`${base}#/hub/grid?q=unused&exclude=Environment&evidence=${tagged.id}`);
  const drawer = page.locator('#evidence-detail');
  await drawer.locator('#detail-title').waitFor();
  await drawer.locator('.detail-tags a').filter({ hasText: /^Mobility$/ }).click();
  await page.locator('.evidence-grid').waitFor();
  check(await page.evaluate(() => location.hash) === '#/hub/grid?include=Mobility', 'Clickable tags open Grid with only that tag selected');
  check(await drawer.isHidden(), 'Tag navigation closes the old evidence drawer');
  const expectedCount = data.items.filter(item => item.tags.includes('Mobility') || item.files.some(file => file.framework.tags.includes('Mobility'))).length;
  check(await page.locator('#result-count').textContent() === `${expectedCount} pieces of evidence`, 'Tag results include all matching catalogue records');

  // Hub history follows exact file IDs, including relationship clicks.
  const edge = data.fileLinks.find(edge => byId.get(edge.source).file.fileUrl !== byId.get(edge.target).file.fileUrl);
  await page.goto(`${base}#/hub/grid?evidence=${edge.source}`);
  await drawer.locator('#detail-title').waitFor();
  await drawer.locator(`[data-evidence="${edge.target}"]`).first().click();
  await page.waitForFunction(id => location.hash.includes(id), edge.target);
  await drawer.getByRole('button', { name: 'Back to previously viewed evidence', exact: true }).click();
  check((await drawer.locator('.file-open').getAttribute('href')) === byId.get(edge.source).file.fileUrl, 'Hub Back returns to the previously viewed file');
  await drawer.getByRole('button', { name: 'Forward to next viewed evidence', exact: true }).click();
  check((await drawer.locator('.file-open').getAttribute('href')) === byId.get(edge.target).file.fileUrl, 'Hub Forward restores the next viewed file');

  // Nonadjacent project selections distinguish viewing history from alphabetical order.
  await page.goto(`${base}#/projects/health-islands`);
  await page.locator('#project-title').waitFor();
  const info = page.locator('#project-info');
  const select = async index => {
    await page.locator(`[data-project-file="${index}"]`).click();
    await info.locator('#detail-title').waitFor();
    return info.locator('.file-open').getAttribute('href');
  };
  const first = await select(0);
  const fourth = await select(3);
  const tenth = await select(9);
  check(await info.locator('#file-preview, img, iframe, video, .excerpt-preview').count() === 0, 'Project sidebar shows information without a duplicate preview');
  check((await page.locator('#project-stage').innerHTML()).length > 0, 'The main project stage keeps the selected file preview');
  const back = page.locator('.project-controls [data-step="-1"]');
  const forward = page.locator('.project-controls [data-step="1"]');
  await back.click();
  check(await info.locator('.file-open').getAttribute('href') === fourth, 'Project Back retraces A → D → J to D');
  await back.click();
  check(await info.locator('.file-open').getAttribute('href') === first, 'A second Back returns to A');
  await forward.click(); await forward.click();
  check(await info.locator('.file-open').getAttribute('href') === tenth, 'Multiple Forward steps restore J');
  await back.click(); await select(5);
  check(await forward.isDisabled(), 'A new selection clears the old forward branch');
  await page.screenshot({ path: 'output/playwright/studio-project-information.png', fullPage: true });
  const tag = info.locator('.detail-tags a').first();
  const tagHref = await tag.getAttribute('href');
  await tag.click();
  await page.locator('#result-count').waitFor();
  check(await page.evaluate(() => location.hash) === tagHref, 'Project metadata tags also navigate to the filtered Grid');

  await page.locator('#main-nav [data-page="people"]').click();
  await page.getByRole('heading', { name: 'People', exact: true }).waitFor();
  check(await page.locator('.person-card').count() === 9, 'People shows all nine framework students with individual icons');
  await page.getByRole('navigation', { name: 'People categories' }).getByRole('link', { name: 'Tutors', exact: true }).click();
  await page.getByRole('heading', { name: 'Tutors', exact: true, level: 2 }).waitFor();
  const tutorNames = await page.locator('.collection-card h3').allTextContents();
  check(JSON.stringify(tutorNames) === JSON.stringify(['Diana da Silva Carillo','Cem Ataman','Kevin Paulus']), 'Tutors contains the three supplied names');
  check(await page.locator('a[href="#/people/kevin-paulus"] .person-role').textContent() === 'Tutor · RIVM', 'Kevin Paulus is identified with RIVM');
  await page.locator('a[href="#/people/diana-da-silva-carillo"]').click();
  await page.getByRole('heading', { name: 'Diana da Silva Carillo', exact: true }).waitFor();
  check(await page.locator('main .page-heading p').count() === 1, 'Individual people cards open an introduction page');
  await page.goto(`${base}#/people?category=partners`);
  await page.getByRole('heading', { name: 'Partners', exact: true }).waitFor();
  check(await page.locator('.partner-logo').count() === 2, 'RIVM and Eindhoven remain available under People → Partners');
  await page.goto(`${base}#/hub/list?include=Mobility`);
  await page.locator('.evidence-grid').waitFor();
  check(await page.evaluate(() => location.hash) === '#/hub/grid?include=Mobility', 'Old List links resolve to Grid without a List view');
  await page.goto(`${base}#/partners/rivm`);
  await page.getByRole('heading', { name: 'RIVM — Rijksinstituut voor Volksgezondheid en Milieu', exact: true }).waitFor();
  check((await page.evaluate(() => location.hash)).startsWith('#/people/rivm'), 'Existing partner links resolve to their People profiles');

  const mobile = [];
  for (const width of [320,390,430]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(`${base}#/home`);
    await page.locator('#home-graph-preview svg').waitFor();
    const headerHeight = await page.locator('.site-header').evaluate(header => header.getBoundingClientRect().height);
    check(headerHeight <= 120, `${width}px: the closed homepage header remains compact`);
    check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px: homepage has no horizontal overflow`);
    await page.goto(`${base}#/hub/graph`);
    await page.locator('.canvas-panel .node').last().waitFor();
    const nav = await page.locator('#hub-subnav').boundingBox();
    check(nav.x >= 0 && nav.x + nav.width <= width + 1, `${width}px: Knowledge Graph and Grid remain accessible with the main menu closed`);
    check(await page.locator('.menu-button').getAttribute('aria-expanded') === 'false', `${width}px: Hub does not automatically expand the main menu`);
    check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px: Hub has no horizontal overflow`);
    mobile.push({ width, headerHeight, headerAndHubViews: headerHeight + nav.height });
  }
  await page.setViewportSize({ width:390, height:844 });
  await page.screenshot({ path: 'output/playwright/studio-hub-mobile.png', fullPage: true });
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  await page.locator('#main-nav [data-page="people"]').click();
  await page.getByRole('heading', { name:'People', exact:true }).waitFor();
  check(await page.locator('.menu-button').getAttribute('aria-expanded') === 'false', 'Mobile menu closes after navigation');
  await page.goto(`${base}#/home`);
  await page.locator('#home-graph-preview svg').waitFor();
  await page.screenshot({ path: 'output/playwright/studio-home-mobile.png', fullPage: true });
  check(!errors.length, `No JavaScript errors: ${errors.join('; ')}`);
  return { passed: checks.length, mobile, checks };
}
