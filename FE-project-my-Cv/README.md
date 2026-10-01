# FE-project-my-Cv

This is a simple personal CV website. It uses only HTML and CSS, so it is easy to open, read, and edit even if you are new to web development.

## What this project is

- `index.html` contains the words and structure on the page.
- `styles.css` controls how the page looks.
- There is no framework, no JavaScript, and no build step.

## How to view it

Open `index.html` in your browser. If you want to run it like a small local website, use a static server such as:

```bash
npx serve .
```

## Deploy to GitHub Pages

This project is ready to deploy as a static site on GitHub Pages.

1. Push the repository to GitHub.
2. In the GitHub repo, open `Settings` → `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` to trigger the deployment workflow in `.github/workflows/deploy.yml`.

After the workflow finishes, GitHub will show the public Pages URL in the repository settings.

## How the code is organized

- **Header** shows the name, job title, and location.
- **Contact** contains email, phone, LinkedIn, and location.
- **Skills** lists the main technologies and tools.
- **About** gives a short summary of the person.
- **Experience** lists work history.
- **Education** lists training and education.

## If you want to change the CV

1. Edit the text in `index.html`.
2. Change colors, spacing, and font settings in `styles.css`.
3. Copy an existing section if you want to add a new one.

## Beginner tip

If you are unsure where to make a change, ask this simple question: "Is this content or appearance?" If it is content, edit `index.html`. If it is appearance, edit `styles.css`.

## Files

```
index.html  # CV content and sections
styles.css  # Design, layout, and colors
CONTEXT.md  # Extra notes about the project
README.md   # This guide
```

## Browser support

The page is designed to work in modern browsers like Chrome, Firefox, Safari, and Edge.
