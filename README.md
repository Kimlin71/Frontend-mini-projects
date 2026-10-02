# Frontend CV — Kim Lindberg

A personal CV/resume website built with plain HTML and CSS. This project is a training exercise completed as part of a 9-month Applied AI & Agentic Systems studies programme.

## Purpose

This repository is a hands-on learning project. Its goals are to practice:

- Structuring semantic HTML
- Styling with plain CSS and custom properties
- Deploying a static site via GitHub Pages

## Tech stack

| Layer | Choice |
|-------|--------|
| Markup | Plain HTML (`index.html`) |
| Styles | Plain CSS (`styles.css`) |
| Build | None — no framework, no bundler, no JavaScript |

## Getting started

Clone the repo and open `index.html` directly in a browser, or spin up a local static server:

```bash
npx serve .
```

## Project structure

```
index.html  # CV content and sections (Header, About, Skills, Experience, Education, Contact)
styles.css  # Design, layout, colors, and CSS custom properties
CONTEXT.md  # Domain glossary and project notes
README.md   # This file
```

## Sections

| Section | Contents |
|---------|----------|
| Header | Name, job title, and location |
| About | Short professional summary |
| Skills | Skill categories and skill tags |
| Experience | Work history (roles) |
| Education | Degrees, courses, and certificates |
| Contact | Email, phone, LinkedIn, and GitHub |

## Customising the CV

1. Edit text and structure in `index.html`.
2. Adjust colors, spacing, and typography in `styles.css` — look for the CSS custom properties at the top of the file.
3. Duplicate an existing `<section>` block to add a new section.

> **Tip:** Ask "Is this content or appearance?" — content lives in `index.html`, appearance in `styles.css`.

## Deploying to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages** and set the source to **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build and publish the site.
4. GitHub will display the live URL in the Pages settings once the workflow completes.

## Browser support

Designed for modern evergreen browsers: Chrome, Firefox, Safari, and Edge.
