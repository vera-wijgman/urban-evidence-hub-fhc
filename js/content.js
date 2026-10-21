// Site content: add studio years, projects, publications and partners here.
// Each collection uses the same card renderer; no layout changes are needed.
export const site = {
  title: 'Urban Evidence Hub',
  subtitle: 'Trace evidence into design',
  description: 'Explore how research and analysis inform design decisions across the Future Healthy Cities master studio.',
  heroImage: 'assets/healthy-cities.jpg',
  studio: 'Future Healthy Cities master studio',
  homeLabel: 'Master Studio — Future Healthy Cities',
  hubDescription: 'Explore the evidence and the connections between research, analysis and design.',
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
// Publication: { id, title, year, date, image?, url? }.
export const publications = [
  { id: 'example-publication-01', title: 'Example publication 01', year: 2026,
    date: '2026-10-15', image: 'assets/healthy-cities.jpg' },
  { id: 'example-publication-02', title: 'Example publication 02', year: 2026,
    date: '2026-10-01', image: 'home-living-superblocks.png' },
];
// Partner: { id, title, year, image?, url? }.
export const partners = [
  { id: 'rivm', title: 'RIVM — Rijksinstituut voor Volksgezondheid en Milieu', year: 2026,
    image: 'assets/partners/rivm.jpg' },
  { id: 'gemeente-eindhoven', title: 'Gemeente Eindhoven', year: 2026,
    image: 'assets/partners/gemeente-eindhoven.jpg' },
];

export const collections = {
  projects: { title: 'Projects', description: 'Explore the projects, and the evidence behind them.', items: projects },
  publications: { title: 'Publications', description: 'Research and reflections from the Future Healthy Cities master studio.',
    empty: 'Publications will be collected here as the studio’s work is published.', items: publications },
  partners: { title: 'Partners', description: 'People and organisations connected to the Future Healthy Cities master studio.',
    empty: 'Our studio partners will be introduced here.', items: partners },
};

// Names stay in data; their colours come exclusively from theme.css.
export const buckets = ['Methods', 'Research', 'Analysis', 'Conclusion', 'Simulation', 'Strategy', 'Design', 'Evaluation'];
export const tagGroups = {
  'Urban categories': ['Historical development', 'Demographics', 'Mobility', 'Morphology', 'Land use', 'Public space', 'Environment'],
  'Content type': ['Code', 'Dataset', 'Description', 'Diagram', 'Drawing', 'Geospatial information', 'Image', 'Interview / survey', 'Literature', 'Map', 'Video', 'Presentation'],
  'Scale': ['Macro', 'Meso', 'Micro'],
  'Source': ['Author', 'AI-assisted', 'Academic', 'Grey', 'Handbook', 'Policy'],
  'Author': ['Raneem', 'Lara', 'Niels', 'Hilda', 'Tim', 'Daniel', 'Cas', 'Milana', 'Vera'],
  'Project group': projects.map(project => project.tag),
  'Impact health domain': ['Physical', 'Mental', 'Social', 'Environmental', 'Economic', 'Promotion', 'Facilitation', 'Protection'],
};
