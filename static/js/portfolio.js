// Get project html elements
var project_image = $('.list-inline-item')
var projects = $('.project-id-wrapper')

// iterate through projects on click
for (let i = 0; i < project_image.length; i++) {
    project_image[i].addEventListener('click', function(e) {
        if (e.target.attributes.src.nodeValue.length > 50) {
            const target = e.target.attributes.src.nodeValue.slice(53,)
            projects.map((e, item) => {
                if (item.id == target) {
                    // displays an element with the same image id 
                    item.style.display = "block"
                }
                if (item.id != target) {
                    // Else hide all other elements
                    item.style.display = "none"
                }
            });
        } else {
            const target = e.target.attributes.src.nodeValue.slice(7,)
            projects.map((e, item) => {
                if (item.id == target) {
                    // displays an element with the same image id 
                    item.style.display = "block"
                }
                if (item.id != target) {
                    // Else hide all other elements
                    item.style.display = "none"
                }
            });
        }
    })
}

for (let i = 0; i < projects.length; i++) {
    // Hide all projects
    projects[i].style.display = "none"
    // Display the first project on page load
    projects[0].style.display = "block"
}

// Deploy tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})