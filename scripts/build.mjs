// Publish only the public site. Working documents and evidence originals stay local.
import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
// This destination is a fixed child of the repository, never supplied by callers.
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'data'), { recursive: true });
const entries = ['index.html', 'app.js', 'styles.css', 'assets', 'js',
  'home-responsive-neighbourhood.jpeg', 'home-living-superblocks.png', 'home-health-islands.png',
  'data/evidence.json'];
for (const entry of entries) await cp(path.join(root, entry), path.join(output, entry), { recursive: true });
console.log('Built the public website in dist/ (no dependencies required).');
