# Portfolio Website - Vijayalakshmi Ayyavu

A professional single-page scroll portfolio website showcasing skills, experience, and accomplishments.

## Features

- **Professional Design**: Modern, responsive layout with smooth scrolling
- **Dynamic Content**: Expandable work experience sections with project details
- **Resume Downloads**: PDF and Word format downloads (without photo)
- **Contact Integration**: Email, LinkedIn, and GitHub links
- **ATS-Optimized**: Professional summary with keywords for Applicant Tracking Systems
- **Compact Layout**: Reduced spacing for minimal scrolling

## File Structure

- `index.html` - Main portfolio page
- `styles.css` - All styling and responsive design
- `script.js` - JavaScript functionality (expand/collapse, smooth scroll)
- `resume-data.js` - Resume content data (populated from text files)
- `resume.html` - Printable resume page (for PDF/Word downloads)
- `logo.jpg` - Logo image file
- `Viji Photo - 4.png` - Profile photo
- `Vijayalakshmi A Resume.txt` - Source resume content
- `AI training plan.txt` - Source AI training content

## Website Structure

### Navigation Menu
The navigation includes:
- Professional Summary
- Work Summary
- Skills
- Certifications
- Projects (links to Work Experience section)
- Connect

### Sections (in order)

1. **Personal Details** - Mobile, email, location, and education
2. **Professional Summary** - Bullet-point format with ATS keywords
3. **Work Summary** - Bullet-point list of all positions
4. **Technical Skills** - Plain text format (not table)
5. **AI Web Development** - Detailed AI skills from training plan with phases and topics
6. **Work Experience & Accomplishments** - Expandable sections with:
   - Date periods as headers
   - Company, role, and project information
   - Responsibilities and accomplishments
   - Integrated project details (merged from separate projects section)
7. **Certifications** - List of certifications from resume
8. **Connect With Me** - Contact information (email, LinkedIn, GitHub)
9. **Download Resume** - PDF and Word download options

## Content Format

- **Professional Summary**: Displayed as bullet points (one sentence per bullet)
- **Work Summary**: Displayed as bullet points (one position per bullet)
- **Technical Skills**: Plain text format, not in table
- **AI Skills**: Organized by phases with sub-topics
- **Work Experience**: Expandable/collapsible sections with date headers
- **Projects**: Merged into Work Experience sections (no separate section)

## Resume Downloads

The website includes download buttons at the bottom for PDF and Word formats:
- **PDF**: Opens resume.html and triggers browser print dialog (select "Save as PDF")
- **Word**: Opens resume.html for manual saving or conversion

Note: The downloadable resumes do NOT include the photo as requested.

## Contact Information

- **Email**: avlakshmi@hotmail.com
- **LinkedIn**: https://www.linkedin.com/in/vijayalakshmi-ayyavu
- **GitHub**: https://github.com/vijayalakshmiayyavu/AI-Web-Development

## Design Features

- **Logo**: Uses logo.jpg image file (positioned before name in header)
- **Compact Spacing**: Reduced padding between sections (30px instead of 60px)
- **Responsive Design**: Works on all screen sizes (mobile, tablet, desktop)
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Expandable Sections**: Work experience items can be expanded/collapsed

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## Customization

- Colors can be modified in `styles.css` using CSS variables in `:root`
- Logo can be replaced by updating `logo.jpg`
- Layout and spacing can be adjusted in the respective CSS sections
- Content is managed in `resume-data.js` for easy updates

## Data Source

All content is extracted from:
- `Vijayalakshmi A Resume.txt` - Resume content
- `AI training plan.txt` - AI training plan details

The `resume-data.js` file contains all the structured data that populates the website dynamically.

## Notes

- The resume content in `resume-data.js` is populated from the text files
- Professional summary is formatted as bullet points for better readability
- Work summary is formatted as bullet points instead of numbered list
- Projects are integrated into work experience sections (no duplication)
- AI skills are organized by training phases with detailed sub-topics
- Section spacing is optimized to minimize scrolling
