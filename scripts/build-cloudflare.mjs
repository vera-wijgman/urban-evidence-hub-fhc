import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import './build.mjs';

// Package the holding page and full draft as one Pages release.
const root = fileURLToPath(new URL('..', import.meta.url));
const output = path.join(root, 'dist-cloudflare');
const holding = path.join(root, 'coming-soon');
const draft = path.join(root, 'dist');
const holdingFiles = ['index.html', 'styles.css', 'urban-evidence-hub.jpg'];

if (path.dirname(output) !== path.resolve(root)) throw new Error('Invalid Cloudflare build destination');
await rm(output, { recursive: true, force: true });
await mkdir(output);
for (const file of holdingFiles) await cp(path.join(holding, file), path.join(output, file));
await cp(draft, path.join(output, 'draft'), {
  recursive: true,
  filter: (source) => source !== path.join(draft, '_headers'),
});

// Keep the holding-page policy separate so the draft can render its evidence embeds.
const holdingPolicy = await readFile(path.join(holding, '_headers'), 'utf8');
const draftPolicy = await readFile(path.join(draft, '_headers'), 'utf8');
const scopePolicy = (policy, route) => policy.trim().replace(/^\/\*\r?$/m, route);
const holdingRoutes = ['/', ...holdingFiles.map((file) => `/${file}`)];
const policies = holdingRoutes.map((route) => scopePolicy(holdingPolicy, route));
policies.push(scopePolicy(draftPolicy, '/draft/*'));
await writeFile(path.join(output, '_headers'), `${policies.join('\n\n')}\n`);
console.log('Built the holding page and /draft/ in dist-cloudflare/.');
