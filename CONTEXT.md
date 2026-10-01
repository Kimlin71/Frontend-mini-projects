# CV — Kim Lindberg

A single-page React CV application built as the frontend deliverable of a 9-month Applied AI & Agentic Systems training programme. The primary reader is a trainer reviewing the work via the cloned repository.

## Language

**CV Owner**:
Kim Lindberg — the person whose professional history, skills, and education the site presents.
_Avoid_: User, candidate, applicant

**Section**:
One of the top-level content areas rendered as a `<section>` element: About, Skills, Experience, Education, Contact.
_Avoid_: Page, tab, component (when referring to content, not code)

**Role**:
A single professional position in the Experience section, with a title, company, period, and description.
_Avoid_: Job, position, entry

**Credential**:
An entry in the Education section — either a formal degree, a named training programme, or a professional certificate.
_Avoid_: Degree (when the entry is a certificate or course), Course (when it is a degree)

**Skill Tag**:
A single item within a skill category displayed as a visual label in the Skills section.
_Avoid_: Badge, chip, technology

**Skill Category**:
A named grouping of Skill Tags (e.g. Languages, Frameworks, Tools).
_Avoid_: Group, section (to avoid confusion with Section above)

**Contact Link**:
An email address, phone number, or external URL (LinkedIn, GitHub) displayed in the Contact section.
_Avoid_: Social link (not all are social), button

**Header**:
The top banner of the CV showing the CV Owner's name and professional title.
_Avoid_: Hero, banner, navbar
