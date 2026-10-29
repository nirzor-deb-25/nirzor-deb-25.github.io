# Nirzor Deb — Embedded Systems & IoT Portfolio

A self-contained portfolio for GitHub Pages. No npm, build command, API key, or paid service is needed.

## Publish on GitHub Pages — step by step

1. Extract the downloaded ZIP using **Extract All**.
2. Sign in to GitHub as `nirzor-deb-25`.
3. Create a **public** repository named exactly **nirzor-deb-25.github.io**.
   - This is a website repository. It is different from the existing `nirzor-deb-25` profile README repository.
   - If `nirzor-deb-25.github.io` already exists, download a backup of it before replacing its website files.
4. In that repository, select **Add file → Upload files**.
5. Open the extracted ZIP folder. Drag the **contents** into GitHub: `index.html`, `styles.css`, `app.js`, `.nojekyll`, the `assets` folder, and the Markdown guides. Do not upload the ZIP itself or an extra outer folder.
6. Select **Commit changes**. The website files should be on the `main` branch.
7. Go to **Settings → Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Choose **main** and **/(root)**. Click **Save**.
10. Wait for the Pages deployment to finish. The **Visit site** link in Settings → Pages opens your website. Publishing can take several minutes.

With that exact repository name, the expected address is `https://nirzor-deb-25.github.io/`. The address is an expected deployment target, not a currently verified live website.

Official instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Preview on your computer

Open **index.html** in a modern browser after extracting the whole folder. Keep its neighboring files and `assets` folder together.

For a local server, open a terminal in the folder and run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## What is included

- Interactive CSS 3D STM32 Discovery-inspired board: drag to rotate and reset the view.
- Three board illustration modes with simulated activity labels.
- Nine curated projects with category filters and project-note dialogs.
- About section with the green portrait.
- Technical toolkit, workbench hardware, certificates, and learning goals.
- Email, copy-email, GitHub, and LinkedIn contact links.
- Mobile menu, keyboard focus styles, reduced-motion support, and an animation pause control.

The board is an illustration of an STM32 Discovery board, not an engineering CAD model or a live device connection. Project graphics show illustrative signals/workflows, not measured test data.

## How to update it

| Change | File |
| --- | --- |
| Add/edit a project, category, description, tags, or repository link | `app.js`, in the `projects` array at the top |
| Change the biography, certificates, hardware list, contact details, or learning goals | `index.html` |
| Change colors, typography, layout, or 3D board appearance | `styles.css` |
| Change the profile portrait | Replace `assets/nirzor.jpg` with a square image using the same filename |

If you add projects, update the initial project count and the All work count in `index.html` too. The count updates automatically when a filter is clicked.

All website assets are local. The page does not load external fonts, track visitors, or require a backend. The motion preference is stored only in the visitor's browser. The email button opens the visitor's email application; it is not a server-side contact form.

## Verification completed

- JavaScript syntax check.
- Desktop browser review.
- Mobile layout at a 390-pixel iframe width (375-pixel content width with scrollbar), with no horizontal overflow.
- Embedded ML filter shows two projects; all-work list shows nine.
- Project-note dialog opens with the correct project and repository link.
- Hardware mode controls, pointer-drag rotation, reset, motion pause, and mobile navigation checked.
- Local asset paths and internal anchor targets checked.
- ZIP integrity and saved-file hashes checked.

The site has been built and packaged. It has not been uploaded or published to your GitHub account. Repository contents and credential status were not independently audited; descriptions and certificate details are based on the supplied PDFs.
