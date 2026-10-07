# Apex Cyberlink website

Standalone static website rebuilt from the public pages of https://berserk-apex-growth-link.base44.app so it can be hosted on GitHub and Netlify without Base44.

This is not the original Base44 project export. Base44 only serves a compiled bundle on the public URL. Backend data, admin tools, and the original editor source stay inside Base44 unless you export them from your Base44 dashboard.

## Official Base44 export

1. Open the app in Base44.
2. Go to the app Dashboard.
3. Use the GitHub icon: Export to GitHub, or Connect to GitHub on Builder plan or higher.
4. Or download the project ZIP from Base44 if your plan includes it.

That export is the real source. This folder is a deployable public-site version.

## Deploy on Netlify

1. Create a GitHub repository and upload this folder.
2. In Netlify, choose Add new site, then Import an existing project.
3. Select the repository. Publish directory is the repo root. There is no build command.
4. Deploy. Netlify will serve the HTML files.

You can also drag this folder into Netlify Drop.

## Pages

- index.html
- about.html
- services.html
- portfolio.html
- payments.html
- contact.html
- privacy.html
- terms.html
- refund.html

## Admin editor

Open `admin.html` after the site is hosted. The starting PIN is `1234`. Change it in the editor.

Preview saves only in your browser. To publish for every visitor, download `content.json` and replace `data/content.json` in the GitHub repository. Netlify redeploys from that file.

This is not a Base44 backend. It cannot edit the Base44 admin, and the PIN only hides the page. Do not put private customer records here.
