// Site content: add studio years, projects, publications and people here.
// Each collection uses the same card renderer; no layout changes are needed.
export const site = {
  title: 'Urban Evidence Hub',
  subtitle: 'Trace evidence into design',
  description: 'Explore how research and analysis inform design decisions across the Future Healthy Cities UrbanLab.',
  heroImage: 'assets/healthy-cities.jpg',
  homeLabel: 'UrbanLab — Future Healthy Cities',
  hubDescription: 'Explore the evidence and the connections between research, analysis and design.',
  introduction: 'The Urban Evidence Hub brings together research, analyses and design work from the Future Healthy Cities UrbanLab. It makes the evidence behind urban design decisions easier to explore, connecting individual files to projects, themes and one another. Use the knowledge graph to trace these connections, or browse the grid to discover the work of the studio’s students, tutors and partners.',
};

export const projects = [
  { id: 'responsive-neighbourhood', title: 'Responsive Neighbourhood', year: 2026,
    image: 'home-responsive-neighbourhood.jpeg', tag: 'Group 1: Responsive Neighbourhood',
    description: 'Research and design from the Responsive Neighbourhood project.',
    members: ['Raneem Alrifaai', 'Lara', 'Niels van Maurik'] },
  { id: 'living-superblocks', title: 'Living Superblocks', year: 2026,
    image: 'home-living-superblocks.png', tag: 'Group 2: Living Superblocks',
    description: 'Research and design from the Living Superblocks project.',
    members: ['Hilda Khorsandi', 'Tim Pooters', 'Daniel Strauβ'] },
  { id: 'health-islands', title: 'Health Islands', year: 2026,
    image: 'home-health-islands.png', tag: 'Group 3: Health Islands',
    description: 'Research and design from the Health Islands project.',
    members: ['Cas Prinsze', 'Milana Romanova', 'Vera'] },
];

// Clearly labelled layout examples; replace with real publications when available.
// Publication: { id, title, year, date, description, image? }.
export const publications = [
  { id: 'example-publication-01', title: 'Example publication 01', year: 2026,
    date: '2026-10-15', image: 'assets/healthy-cities.jpg',
    description: 'Example publication 01 introduces research and design insights from the Future Healthy Cities UrbanLab.' },
  { id: 'example-publication-02', title: 'Example publication 02', year: 2026,
    date: '2026-10-01', image: 'assets/healthy-cities.jpg',
    description: 'Example publication 02 explores how urban evidence can inform healthier cities.' },
];
// Partner: { id, title, year, description, image?, imageFrame? }.
// imageFrame excludes built-in white margins without changing the original logo.
export const partners = [
  { id: 'rivm', title: 'RIVM — Rijksinstituut voor Volksgezondheid en Milieu', year: 2026,
    image: 'assets/partners/rivm.jpg',
    imageFrame: { viewBox: '36 0 402 151', width: 474, height: 180 },
    description: 'This page introduces RIVM — Rijksinstituut voor Volksgezondheid en Milieu, a partner of the Future Healthy Cities UrbanLab.' },
  { id: 'gemeente-eindhoven', title: 'Gemeente Eindhoven', year: 2026,
    image: 'assets/partners/gemeente-eindhoven.jpg',
    imageFrame: { viewBox: '44 188 413 124', width: 500, height: 500 },
    description: 'This page introduces Gemeente Eindhoven, a partner of the Future Healthy Cities UrbanLab.' },
];

// People: student names reuse the project teams; add portraits in place of initials later.
export const students = projects.flatMap(project => project.members.map(name => name.split(' ')[0]).map(title => ({
  id: `student-${title.toLowerCase()}`, title, year: project.year,
  initials: title[0], role: `Student · ${project.title}`, evidenceTag: title,
  description: `${title} participates in the ${project.title} project in the Future Healthy Cities UrbanLab.`,
})));
export const tutors = [
  { id: 'diana-carrillo-silva', title: 'Diana Carrillo Silva', initials: 'DS', role: 'Studio tutor',
    description: 'Diana Carrillo Silva is a tutor in the Future Healthy Cities UrbanLab.' },
  { id: 'cem-ataman', title: 'Cem Ataman', initials: 'CA', role: 'Studio tutor',
    description: 'Cem Ataman is a tutor in the Future Healthy Cities UrbanLab.' },
];
export const peopleGroups = [
  { id: 'students', title: 'Students', items: students },
  { id: 'tutors', title: 'Tutors', items: tutors },
  { id: 'partners', title: 'Partners', items: partners },
];

export const collections = {
  projects: { title: 'Projects', description: 'Explore the projects, and the evidence behind them.', items: projects },
  publications: { title: 'Publications', description: 'Research and reflections from the Future Healthy Cities UrbanLab.',
    empty: 'Publications will be collected here as the studio’s work is published.', items: publications },
  people: { title: 'People', description: 'Meet the students, tutors and partners of the Future Healthy Cities UrbanLab.',
    items: peopleGroups.flatMap(group => group.items) },
};

// Names stay in data; their colours come exclusively from theme.css.
export const buckets = ['Methods', 'Research', 'Analysis', 'Conclusion', 'Simulation', 'Strategy', 'Design', 'Evaluation'];
// Workbook relationships share one label/line definition; colors stay in theme.css.
export const relationshipTypes = [
  { id: 'informs', label: 'Informs', incoming: 'Informed by', meaning: 'Direct input', color: 'var(--graph-arrow)', dash: '' },
  { id: 'supports', label: 'Supports', incoming: 'Supported by', meaning: 'Indirect support', color: 'var(--graph-arrow)', dash: '9 5' },
  { id: 'evaluates', label: 'Evaluates', incoming: 'Evaluated by', meaning: 'Assessment', color: 'var(--graph-arrow)', dash: '2 5' },
];
export const tagGroups = {
  'Urban categories': ['Historical development', 'Demographics', 'Mobility', 'Morphology', 'Land use', 'Public space', 'Environment'],
  'Content type': ['Code', 'Dataset', 'Description', 'Diagram', 'Drawing', 'Geospatial information', 'Image', 'Interview / survey', 'Literature', 'Map', 'Video', 'Presentation'],
  'Scale': ['Macro', 'Meso', 'Micro'],
  'Source': ['Author', 'AI-assisted', 'Academic', 'Grey', 'Handbook', 'Policy'],
  'Author': ['Raneem', 'Lara', 'Niels', 'Hilda', 'Tim', 'Daniel', 'Cas', 'Milana', 'Vera'],
  'Project group': projects.map(project => project.tag),
  'Impact health domain': ['Physical', 'Mental', 'Social', 'Environmental', 'Economic', 'Promotion', 'Facilitation', 'Protection'],
};
