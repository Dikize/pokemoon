//  menu toggle
let toggle = document.querySelector('.toggle')
let navidation = document.querySelector('.navi')
let main = document.querySelector('.main')

toggle.onclick = function() {
    navidation.classList.toggle('active')
    main.classList.toggle('active')
}

// add hovered class in selected list item
let list = document.querySelectorAll('.navi li')
function activeLink() {
    list.forEach(item => {
        item.classList.remove('hovered');
    })
    this.classList.add('hovered');
}
list.forEach(item =>{
    item.addEventListener('mouseover', activeLink)
})
activeLink()


//  menu toggle
let toggle2 = document.querySelector('.toggle2')
let navidation2 = document.querySelector('.navi2')
let main2 = document.querySelector('.main')

toggle2.onclick = function() {
    navidation2.classList.toggle('active2')
    main2.classList.toggle('active2')
}

// add hovered class in selected list item
let list2 = document.querySelectorAll('.navi2 li')
function activeLink2() {
    list2.forEach(item => {
        item.classList.remove('hovered');
    })
    this.classList.add('hovered');
}
list2.forEach(item =>{
    item.addEventListener('mouseover', activeLink2)
})
activeLink2()