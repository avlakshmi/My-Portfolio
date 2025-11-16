// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Work Experience Expand/Collapse Functionality
function createExperienceItem(date, title, content) {
    const experienceContainer = document.getElementById('experience-container');
    
    const experienceItem = document.createElement('div');
    experienceItem.className = 'experience-item';
    
    const header = document.createElement('div');
    header.className = 'experience-header';
    header.innerHTML = `
        <div>
            <div class="experience-date">${date}</div>
            <div class="experience-title">${title}</div>
        </div>
        <span class="expand-icon">▼</span>
    `;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'experience-content';
    contentDiv.innerHTML = content;
    
    experienceItem.appendChild(header);
    experienceItem.appendChild(contentDiv);
    
    // Add click event to toggle expand/collapse
    header.addEventListener('click', () => {
        experienceItem.classList.toggle('expanded');
    });
    
    experienceContainer.appendChild(experienceItem);
}

// Projects are now merged into work experience sections

// Populate page with resume data
function populateResumeData() {
    // Populate Personal Details
    if (resumeData.personalDetails) {
        const mobileElement = document.getElementById('mobile');
        const emailElement = document.getElementById('email');
        const locationElement = document.getElementById('location');
        const educationElement = document.getElementById('education-details');
        
        if (mobileElement && resumeData.personalDetails.mobile) {
            mobileElement.textContent = resumeData.personalDetails.mobile;
        }
        if (emailElement && resumeData.personalDetails.email) {
            emailElement.textContent = resumeData.personalDetails.email;
        }
        if (locationElement && resumeData.personalDetails.location) {
            locationElement.textContent = resumeData.personalDetails.location;
        }
        if (educationElement && resumeData.personalDetails.education && resumeData.personalDetails.education.length > 0) {
            educationElement.innerHTML = resumeData.personalDetails.education.map(edu => {
                let eduText = `<p><strong>Education:</strong> ${edu.degree}`;
                if (edu.specialization) {
                    eduText += ` | ${edu.specialization}`;
                }
                if (edu.institution) {
                    eduText += `, ${edu.institution}`;
                }
                eduText += `</p>`;
                return eduText;
            }).join('');
        }
        
        // Populate Links under Education
        const linksElement = document.getElementById('links-details');
        if (linksElement && resumeData.personalDetails) {
            let linksHTML = '';
            if (resumeData.personalDetails.linkedin) {
                linksHTML += `<p><strong>LinkedIn:</strong> <a href="${resumeData.personalDetails.linkedin}" target="_blank" style="color: var(--secondary-color); text-decoration: none;">${resumeData.personalDetails.linkedin}</a></p>`;
            }
            if (resumeData.personalDetails.aboutMe) {
                linksHTML += `<p><strong>About Me:</strong> <a href="${resumeData.personalDetails.aboutMe}" target="_blank" style="color: var(--secondary-color); text-decoration: none;">${resumeData.personalDetails.aboutMe}</a></p>`;
            }
            if (resumeData.personalDetails.github) {
                linksHTML += `<p><strong>Github:</strong> <a href="${resumeData.personalDetails.github}" target="_blank" style="color: var(--secondary-color); text-decoration: none;">${resumeData.personalDetails.github}</a></p>`;
            }
            linksElement.innerHTML = linksHTML;
        }
    }

    // Populate Professional Summary (as bullets)
    const summaryElement = document.getElementById('professional-summary');
    if (summaryElement && resumeData.professionalSummary) {
        if (Array.isArray(resumeData.professionalSummary)) {
            summaryElement.innerHTML = '<ul>' + 
                resumeData.professionalSummary.map(item => `<li>${item}</li>`).join('') + 
                '</ul>';
        } else {
            summaryElement.textContent = resumeData.professionalSummary;
        }
    }

    // Populate Work Summary (as bullets)
    const workSummaryElement = document.getElementById('work-summary-text');
    if (workSummaryElement && resumeData.workSummary) {
        if (Array.isArray(resumeData.workSummary)) {
            workSummaryElement.innerHTML = '<ul>' + 
                resumeData.workSummary.map(item => `<li>${item}</li>`).join('') + 
                '</ul>';
        } else {
            workSummaryElement.innerHTML = `<p>${resumeData.workSummary}</p>`;
        }
    }

    // Populate Technical Skills
    const skillsElement = document.getElementById('technical-skills');
    if (skillsElement && resumeData.technicalSkills) {
        skillsElement.innerHTML = resumeData.technicalSkills.map(skill => `<p>${skill}</p>`).join('');
    }

    // Populate AI Skills
    const aiSkillsElement = document.getElementById('ai-skills-list');
    if (aiSkillsElement && resumeData.aiSkills) {
        aiSkillsElement.innerHTML = resumeData.aiSkills.map(skill => {
            if (skill.trim() === '') {
                return '<br>';
            }
            return `<p>${skill}</p>`;
        }).join('');
    }

    // Populate Work Experience
    if (resumeData.workExperience && resumeData.workExperience.length > 0) {
        resumeData.workExperience.forEach(exp => {
            const content = formatWorkExperience(exp);
            createExperienceItem(exp.date, `${exp.title} - ${exp.company}`, content);
        });
    }

    // Projects are now merged into work experience, so no separate projects section

    // Populate Certifications
    const certificationsElement = document.getElementById('certifications-list');
    if (certificationsElement && resumeData.certifications) {
        certificationsElement.innerHTML = '<ul>' + 
            resumeData.certifications.map(cert => `<li>${cert}</li>`).join('') + 
            '</ul>';
    }
}

// Resume download handlers
function downloadPDF(event) {
    event.preventDefault();
    // Open resume.html in new window for printing to PDF
    const resumeWindow = window.open('resume.html', '_blank');
    if (resumeWindow) {
        resumeWindow.onload = function() {
            setTimeout(() => {
                resumeWindow.print();
            }, 500);
        };
    }
}

function downloadWord(event) {
    event.preventDefault();
    // Open resume.html for user to save as Word
    window.open('resume.html', '_blank');
    alert('Please use your browser\'s "Save As" feature and select Word format, or use an online HTML to Word converter.');
}

// Add active state to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully');
    populateResumeData();
});

