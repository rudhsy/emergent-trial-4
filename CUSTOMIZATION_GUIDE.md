# Portfolio Website - Customization Guide

## 🎨 Your Portfolio is Ready!

This is a clean, minimalist portfolio website inspired by kirschberg.co.nz with a monochrome aesthetic.

## 📁 Where to Update Your Content

### 1. Project Information
**File**: `/app/frontend/src/data/mockData.js`

Look for the `projects` array and update each project:
- `title`: Your project name
- `category`: Type of work (e.g., "Interaction Design", "UI/UX Design")
- `year`: Project year
- `thumbnail`: URL to project thumbnail image (800x600px recommended)
- `description`: Brief project description
- `images`: Array of project image URLs for the detail view
- `behanceLink`: Link to your Behance project

**Note**: Currently using placeholder images from Unsplash. Replace with your actual project images.

### 2. About Page Content
**File**: `/app/frontend/src/data/mockData.js`

Look for the `aboutContent` object:
- `name`: Your full name (currently "Anirudh A.")
- `title`: Your professional title
- `bio`: Your professional bio/description
- `email`: Your contact email
- `linkedin`: Your LinkedIn URL (already set to https://www.linkedin.com/in/rudhsy/)
- `behance`: Your Behance URL (already set to https://www.behance.net/rudhsy)
- `skills`: Array of your skills
- `experience`: Years of experience

### 3. Resume Content
**File**: `/app/frontend/src/data/mockData.js`

Look for the `resumeContent` object:
- Update the `sections` array with your actual experience and education
- Each item should have: `role/degree`, `company/institution`, `period`, `description`

### 4. Add Your Resume PDF
**Steps**:
1. Place your resume PDF in `/app/frontend/public/` folder
2. Name it something like `Anirudh_Resume.pdf`
3. Update the `pdfUrl` in mockData.js to: `"/Anirudh_Resume.pdf"`

Example:
```javascript
pdfUrl: "/Anirudh_Resume.pdf"
```

## 🖼️ Adding Your Project Images

### Option 1: Host on Image Services
- Upload images to services like:
  - Imgur
  - Cloudinary
  - Your own hosting
- Copy the image URLs
- Paste into mockData.js

### Option 2: Use Local Images
1. Create a folder: `/app/frontend/public/images/projects/`
2. Place your images there
3. Reference them like: `"/images/projects/project1-thumbnail.jpg"`

## 🎯 Interactive Features

### Draggable Thumbnails
- Click and drag any project thumbnail to rearrange
- Other thumbnails automatically adjust position
- Order resets on page refresh (by design)

### Project Detail Drawer
- Click any project thumbnail to open detail view
- Drawer slides up from bottom (Behance reel style)
- Click X button or backdrop to close
- Scrollable content for long projects

## 🎨 Design Customization

### Colors
The website uses a monochrome palette. If you want to adjust colors, edit:
**File**: `/app/frontend/src/index.css`

Current color scheme:
- Background: white
- Text: black
- Accents: grays

### Fonts
Currently using system fonts. To change fonts:
1. Add font import to `/app/frontend/src/index.css`
2. Update font-family in Tailwind config or CSS

### Layout Spacing
The design uses generous whitespace. Adjust padding/margins in component files:
- `/app/frontend/src/components/Layout.jsx`
- `/app/frontend/src/pages/*.jsx`

## 📱 Responsive Design

The website is fully responsive:
- **Desktop**: 2-column project grid, spacious layout
- **Mobile**: 1-column project grid, stacked navigation

Test on different screen sizes to ensure everything looks good.

## 🚀 Going Live

### Before Launch Checklist:
- [ ] Replace all project images with your actual work
- [ ] Update all project titles and descriptions
- [ ] Add your real resume PDF
- [ ] Update contact email in About page
- [ ] Test all links (LinkedIn, Behance, project links)
- [ ] Test drag and drop on different browsers
- [ ] Test on mobile devices
- [ ] Verify PDF download works

## 📞 Support

All placeholder content is marked with `// TODO: Replace` comments in the code for easy identification.

---

**Your portfolio is ready to showcase your work! Update the content and make it yours.** ✨
