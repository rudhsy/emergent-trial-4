# Portfolio Website - Technical Contracts

## Current Status
**Phase**: Frontend-only implementation with mock data
**Data Source**: `/app/frontend/src/data/mockData.js`

## Mock Data Structure

### Projects (6 items)
```javascript
{
  id: number,
  title: string,
  category: string,
  year: string,
  thumbnail: string (URL),
  description: string,
  images: string[] (array of URLs),
  behanceLink: string (URL)
}
```

### About Content
```javascript
{
  name: string,
  title: string,
  bio: string,
  email: string,
  linkedin: string (URL),
  behance: string (URL),
  skills: string[],
  experience: string
}
```

### Resume Content
```javascript
{
  pdfUrl: string,
  sections: [{
    title: string,
    items: [{
      role/degree: string,
      company/institution: string,
      period: string,
      description: string
    }]
  }]
}
```

## Features Implemented (Frontend Only)

### 1. Navigation
- Fixed header with logo and links (Work, About, Resume)
- Active page highlighting
- Smooth transitions

### 2. Work Page (Landing)
- 6 draggable project thumbnails in responsive grid
- HTML5 drag-and-drop functionality
- Visual rearrangement (resets on page refresh)
- Hover effects on thumbnails
- Click to open project detail drawer

### 3. Project Detail Drawer
- Slides up from bottom (90vh height)
- Behance reel-style layout
- Close button (top right)
- Displays project images vertically
- Link to Behance project

### 4. About Page
- Two-column layout (content + skills sidebar)
- Contact information with icons (lucide-react)
- Social links to LinkedIn and Behance

### 5. Resume Page
- Download PDF button
- Viewable sections (Experience, Education)
- PDF embed iframe (placeholder)

## Backend Integration Plan (Future)

### Potential API Endpoints
If backend integration is needed in the future:

```
GET /api/projects - Fetch all projects
GET /api/projects/:id - Fetch single project
GET /api/about - Fetch about page content
GET /api/resume - Fetch resume content
POST /api/projects/order - Save project order (if persistence needed)
```

### Database Schema (If needed)
- Projects collection
- About collection (single document)
- Resume collection (single document)

## Content Replacement Guide

All placeholder content is marked with `// TODO: Replace` comments in:
- `/app/frontend/src/data/mockData.js`

### Steps to customize:
1. Replace project titles, descriptions, categories, and years
2. Upload project images and update URLs
3. Update about page bio and contact information
4. Update resume experience and education details
5. Add actual resume PDF to `/app/frontend/public/` folder
6. Update `pdfUrl` in mockData.js to point to actual PDF

## Notes
- No backend currently required - fully functional frontend
- Drag & drop order does not persist (by design)
- All content is client-side
- PDF embed requires actual PDF file in public folder
