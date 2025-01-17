// // Sample JSON data
// const resumeData = [
    
       
// ];

// // Select the main container
// const resumeContainer = document.getElementById("resume");

// // Function to create a section with a title and content
// function createSection(title, content) {
//     const sectionDiv = document.createElement("div");
//     sectionDiv.innerHTML = `<h3>${title}</h3><div>${content}</div>`;
//     resumeContainer.appendChild(sectionDiv);
// }

// // Render Resume Data
// resumeData.forEach(person => {
//     // Name
//     createSection("Name", person.name);

//     // Contact Information
//     const contactInfo = Object.entries(person.contactInformation)
//         .map(([key, value]) => `<p><b>${key}:</b> ${value}</p>`)
//         .join("");
//     createSection("Contact Information", contactInfo);

//     // Objective
//     createSection("Objective", `<p>${person.objective}</p>`);

//     // Skills
//     const skills = Object.entries(person.skills)
//         .map(([key, value]) => {
//             if (Array.isArray(value)) {
//                 return `<p><b>${key}:</b> ${value.join(", ")}</p>`;
//             }
//             if (typeof value === "object") {
//                 return `<p><b>${key}:</b> ${Object.entries(value)
//                     .map(([lang, level]) => `${lang} (${level})`)
//                     .join(", ")}</p>`;
//             }
//             return `<p><b>${key}:</b> ${value}</p>`;
//         })
//         .join("");
//     createSection("Skills", skills);

//     // Work Experience
//     const workExperience = person.workExperience
//         .map(
//             experience => `
//             <p><b>Role:</b> ${experience.role}</p>
//             <p><b>Organization:</b> ${experience.organization}</p>
//             <p><b>Period:</b> ${experience.period}</p>
//             <ul>
//                 ${experience.responsibilities
//                     .map(task => `<li>${task}</li>`)
//                     .join("")}
//             </ul>`
//         )
//         .join("");
//     createSection("Work Experience", workExperience);
// });

// Full Resume Data
const resumeData = [
    {
        "name": "Qutaiba Aldandachi",
        "contactInformation": {
            "address": "Karlskrona, 37129 Sverige",
            "phone": "0766400078",
            "email": "qutaebadandashi@gmail.com",
            "linkedin": "linkedin.com/in/qutaiba-al-dandachi",
            "github": "github.com/Qutaeba89"
        },
        "objective": "Aspiring Java Developer with a solid foundation in object-oriented programming, currently studying Java development in Värnamo, Sweden. Seeking a practice position to apply my technical skills and gain hands-on experience in Java and web development, with a strong commitment to learning and contributing effectively to a team.",
        "skills": {
            "programmingLanguages": ["Java", "Python", "HTML", "CSS", "JavaScript", "SQL"],
            "frameworksAndTools": ["Java Swing", "Java Spring Boot", "Microsoft Office", "Linux", "Networking", "Cloud Computing (basic knowledge)"],
            "languages": {
                "Swedish": "Very Good",
                "English": "Very Good",
                "Arabic": "Excellent"
            },
            "softSkills": ["Problem-solving", "Team collaboration", "Customer support", "Adaptability", "Technical support"]
        },
        "technicalExperience": [
            {
                "role": "IT Technical Support Intern",
                "organization": "Dar al-Alsson Institute, Damascus",
                "period": "Jan 2008 - Mar 2013",
                "responsibilities": [
                    "Provided technical support in an Agile environment, managing hardware and software issues for improved operational efficiency.",
                    "Performed system upgrades, troubleshooting, and hardware replacements, ensuring systems operated reliably.",
                    "Resolved network connectivity issues and maintained up-to-date logs on daily server tasks, supporting smooth office operations."
                ]
            }
        ],
        "workExperience": [
            {
                "role": "Nurse Assistant",
                "organization": "Home Service, Karlskrona",
                "period": "Mar 2018 - Current",
                "responsibilities": [
                    "Assisted patients with daily care tasks, applied organizational skills to manage patient schedules, and provided consistent support during additional shifts.",
                    "Demonstrated adaptability, communication, and time-management skills in a high-demand healthcare environment."
                ]
            }
        ],
        "education": [
            {
                "degree": "Java Development",
                "institution": "Värnamo, Sweden",
                "period": "2024 - Current",
                "details": "Currently studying Java programming and software development, with a focus on object-oriented programming, Java, SQL, Java Swing, HTML, CSS, JavaScript, and Java Spring Boot."
            }
        ],
        "projectsAndAccomplishments": [
            "IT Troubleshooting & Technical Support: Developed skills in diagnosing and resolving IT issues, including network and system troubleshooting.",
            "Programming and Software Development: Applied knowledge of Java and Python through coursework and self-directed projects, including building simple applications and tools.",
            "Certifications and Self-Study: Completed online certifications to broaden knowledge in networking, cloud computing, and Linux fundamentals."
        ],
        "additionalInformation": "With a passion for IT and programming, I am dedicated to continuous learning and self-improvement. My studies in Java and web development equip me with a solid foundation, and I am eager to apply my knowledge in a hands-on environment. I aim to contribute meaningfully to a supportive team while advancing my technical skills and practical understanding of software development."
    }
];

// Main container for the resume
const resumeContainer = document.getElementById("resume");

// Function to create and display each section
function createSection(title, content) {
    const sectionDiv = document.createElement("div");
    sectionDiv.innerHTML = `<h2>${title}</h2>${content}`;
    resumeContainer.appendChild(sectionDiv);
}

// Render the resume data
resumeData.forEach((person) => {
    // Name
    createSection("Name", `<p>${person.name}</p>`);

    // Contact Information
    const contactInfo = Object.entries(person.contactInformation)
        .map(([key, value]) => `<p><b>${key.charAt(0).toUpperCase() + key.slice(1)}:</b> ${value}</p>`)
        .join("");
    createSection("Contact Information", contactInfo);

    // Objective
    createSection("Objective", `<p>${person.objective}</p>`);

    // Skills
    const skills = Object.entries(person.skills)
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                return `<p><b>${key.charAt(0).toUpperCase() + key.slice(1)}:</b> ${value.join(", ")}</p>`;
            }
            if (typeof value === "object") {
                return `<p><b>${key.charAt(0).toUpperCase() + key.slice(1)}:</b> ${Object.entries(value)
                    .map(([subKey, subValue]) => `${subKey} (${subValue})`)
                    .join(", ")}</p>`;
            }
            return `<p><b>${key.charAt(0).toUpperCase() + key.slice(1)}:</b> ${value}</p>`;
        })
        .join("");
    createSection("Skills", skills);

    // Technical Experience
    const technicalExperience = person.technicalExperience
        .map((exp) => `
            <p><b>Role:</b> ${exp.role}</p>
            <p><b>Organization:</b> ${exp.organization}</p>
            <p><b>Period:</b> ${exp.period}</p>
            <ul>${exp.responsibilities.map((task) => `<li>${task}</li>`).join("")}</ul>
        `)
        .join("");
    createSection("Technical Experience", technicalExperience);

    // Work Experience
    const workExperience = person.workExperience
        .map((exp) => `
            <p><b>Role:</b> ${exp.role}</p>
            <p><b>Organization:</b> ${exp.organization}</p>
            <p><b>Period:</b> ${exp.period}</p>
            <ul>${exp.responsibilities.map((task) => `<li>${task}</li>`).join("")}</ul>
        `)
        .join("");
    createSection("Work Experience", workExperience);

    // Education
    const education = person.education
        .map((edu) => `
            <p><b>Degree:</b> ${edu.degree}</p>
            <p><b>Institution:</b> ${edu.institution}</p>
            <p><b>Period:</b> ${edu.period}</p>
            <p>${edu.details}</p>
        `)
        .join("");
    createSection("Education", education);

    // Projects and Accomplishments
    const projects = person.projectsAndAccomplishments
        .map((project) => `<li>${project}</li>`)
        .join("");
    createSection("Projects and Accomplishments", `<ul>${projects}</ul>`);

    // Additional Information
    createSection("Additional Information", `<p>${person.additionalInformation}</p>`);
});
