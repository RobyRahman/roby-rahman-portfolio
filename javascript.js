function initMap() {
    var location = {lat: -6.9175, lng: 107.6191}; // Contoh koordinat Bandung
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1.",
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
        },
        // Tambahkan proyek lainnya di sini
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });

    // Animasi scroll
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fitur pencarian
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('input', function() {
        const query = searchBox.value.toLowerCase();
        const projectElements = document.querySelectorAll('.project');
        projectElements.forEach(project => {
            const title = project.querySelector('h3').textContent.toLowerCase();
            const description = project.querySelector('p').textContent.toLowerCase();
            if (title.includes(query) || description.includes(query)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });

        const articleElements = document.querySelectorAll('article');
        articleElements.forEach(article => {
            const title = article.querySelector('h3').textContent.toLowerCase();
            const content = article.querySelector('p').textContent.toLowerCase();
            if (title.includes(query) || content.includes(query)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });
});