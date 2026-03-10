# Milestone-Based Interactive Resume Builder

A step-by-step interactive resume builder built with **HTML**, **CSS**, and **TypeScript**. Each milestone builds upon the previous one, progressing from a static resume to a fully dynamic, editable, and shareable online resume.

## Milestones

### Milestone 1-2: Static Resume + GitHub & Vercel Deployment
- Static resume with Personal Info, Education, Skills, Work Experience, and Languages
- TypeScript toggle button to show/hide the Skills section
- Responsive design for mobile and desktop
- Published on GitHub and deployed on Vercel

### Milestone 3: Dynamic Resume Builder with Form
- Form to capture user input (Personal Info, Education, Skills, Experience, Languages)
- Form validation on mandatory fields
- Dynamically generates resume from form data using localStorage

### Milestone 4: Editable Resume
- Inline editing: click **Edit** to make all resume sections editable directly on the page
- Click **Save** to save changes to localStorage without page reload
- Visual indicators (dashed border) show editable fields

### Milestone 5: Unique Path & Shareable Link
- All features from Milestone 4
- **Download as PDF** button (via browser print)
- **Shareable Link** button generates a unique URL based on username (e.g., `/resume/username`) and copies it to clipboard

## Tech Stack
- HTML5
- CSS3 (Vanilla, no frameworks)
- TypeScript

## Project Structure
```
├── mileStone1-2/          # Static resume with toggle functionality
├── mileSton3/             # Dynamic resume with form
├── mileStone4/            # Editable resume
├── mileStone5/            # Shareable link + PDF download
└── README.md
```

## How to Run
1. Clone the repository
2. Open any milestone's `index.html` in a browser
3. For Milestones 3-5: Fill out the form and submit to generate your resume
