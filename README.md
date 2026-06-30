# Urban Evidence Hub

Static prototype for the Future Healthy Cities Urban Evidence Hub.

The website code is kept in this repository. Large evidence files are hosted on a separate Netlify site and referenced by absolute URLs in `app.js`, so the repository stays lightweight.

## Files

- `index.html` - page structure
- `styles.css` - interface styling
- `app.js` - evidence data and filtering logic
- `home-*.png/jpeg` - home page project images

## Evidence Files

Large evidence files are hosted separately at:

https://urban-evidence-hub-fhc-files.netlify.app/evidence-files/

The local `evidence-files/` folder is ignored by Git and is used only to prepare manual file-host deploys.

## Deployment

Netlify deploys this repository as a static site from the repository root. Future code/data changes pushed to `main` deploy automatically to:

https://urban-evidence-hub-fhc.netlify.app