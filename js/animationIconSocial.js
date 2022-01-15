// Logo social
let list = document.querySelectorAll('.sci li')
let bg = document.querySelector('.socialMedial')

// color lors du hover
list.forEach(elements => {
    elements.addEventListener('mouseenter', function (event) {
        let color = event.target.getAttribute('data-color')
        bg.style.backgroundColor = color
    })
})

// background color sorti du hover
list.forEach(elements => {
    elements.addEventListener('mouseleave', function (event) {
        bg.style.backgroundColor = "#0e1538"
    })
})

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1,
});