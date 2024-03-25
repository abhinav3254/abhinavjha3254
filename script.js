/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// feeding the data

fetch('skills.json')
    .then(response => response.json())
    .then(data => {
        const skillsContainer = document.querySelector('.skills-container');
        data.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skills-element');

            const image = document.createElement('img');
            image.src = skill.image;
            image.alt = skill.name;

            const line = document.createElement('div');
            line.classList.add('line');

            const p = document.createElement('p');
            p.textContent = skill.name;

            skillElement.appendChild(image);
            skillElement.appendChild(line);
            skillElement.appendChild(p);

            skillsContainer.appendChild(skillElement);
        });
    })
    .catch(error => console.error('Error fetching skills:', error));