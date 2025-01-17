const skillsList = document.getElementById("skills-list");
fetch("skills.json")
        .then(response => response.json())
        .then(skills => {
            // Display each skill as a list item
            skills.forEach(skill => {
                const listItem = document.createElement("li");
                listItem.textContent = skill;
                skillsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error loading skills:", error);
            skillsList.innerHTML = "<li>Failed to load skills. Please try again later.</li>";
        });