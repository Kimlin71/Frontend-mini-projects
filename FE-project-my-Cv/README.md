# FE-project-my-Cv

A personal CV/resume site for Kim Lindberg — Applied AI & Agentic Systems Consultant. Built with plain HTML and CSS, no build step or framework required.

## Preview

Open `index.html` in any modern browser to view the CV.

## Getting started

```bash
# Clone the repo
git clone <repo-url>
cd FE-project-my-Cv

# Open directly in the browser
open index.html

# …or serve with any static file server
npx serve .
```

## Project structure

```
index.html      # All CV sections: Header, About, Skills, Experience, Education, Contact
styles.css      # All styles — CSS custom properties for colors, fonts, and layout
CONTEXT.md      # Domain model and design decisions
README.md       # This file
```

## Tech stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup and document structure |
| CSS3 | Layout (CSS Grid/Flexbox), custom properties, responsive design |

No JavaScript, no frameworks, no build tools — intentionally minimal for fast loading and easy maintenance.

## Sections

- **Header** — Name, title, location, and logo mark
- **Contact** — Email, phone, LinkedIn, location
- **Skills** — Languages & Markup, Frameworks & Runtimes, AI & Agentic, Tools
- **About** — Professional summary
- **Experience** — Work history with roles, companies, and descriptions
- **Education** — Academic and professional training

## Customising

1. Update personal details and content in `index.html`
2. Adjust colors, fonts, and spacing via CSS custom properties at the top of `styles.css`
3. Add or remove sections by copying an existing section block in `index.html`

## Browser support

Targets all modern browsers (Chrome, Firefox, Safari, Edge). No polyfills needed.

## License

Personal project — not licensed for redistribution.
