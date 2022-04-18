// Get project html elements
// var project_image = $('.p-img')
var project_image = $('.p-img')
var projects = $('.project-id-wrapper')
var selected = $('.selected-project-logo')

// iterate through projects on click
for (let i = 0; i < project_image.length; i++) {
    project_image[i].addEventListener('click', function(e) {
        if (e.target.attributes.src.nodeValue.length > 50) {
            let target = e.target.attributes.src.nodeValue.slice(53,)
            clickHandler(target);
        } else {
            let target = e.target.attributes.src.nodeValue.slice(7,)
            clickHandler(target);
        }
    })
}

const clickHandler = (target) => {
    projects.map((e, item) => {
        if (item.id == target) {
            // displays an element with the same image id
            item.classList.remove('hidden')
            item.classList.add('current')
            addActive(item);
        }
        if (item.id != target) {
            // Else hide all other elements
            item.classList.add('hidden')
            item.classList.remove('current')
        }
    });

}

function addActive(current) {
    console.log(current)
    project_image.map((e, i) => {
        if (i.children[0].attributes[1].nodeValue.slice(0, 6) == "https") {
            if (i.children[0].attributes[1].nodeValue.slice(53,) == current.id) {
                i.classList.add('active')
            } else {
                i.classList.remove('active')
            }
        } else {
            if (i.children[0].attributes[1].nodeValue.slice(7,) == current.id) {
                i.classList.add('active')
            } else {
                i.classList.remove('active')
            }
        }
    })

}

for (let i = 0; i < projects.length; i++) {
    // Display the first project on page load
    projects[0].classList.remove('hidden')
    projects[0].classList.add('current')
}

// Deploy tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})