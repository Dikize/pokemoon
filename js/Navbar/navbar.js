// let listNavMobil = document.querySelectorAll('.listNavMobile')

// function activeLink2() {
//     listNavMobil.forEach(item => {
//         item.classList.remove('active');
//     })
//     this.classList.add('active');
// }
// listNavMobil.forEach(item => {
//     item.addEventListener('click', activeLink2)
// })

// activeLink2()


//  menu toggle nav desktop
let toggle = document.querySelector('.toggle')
let navidation = document.querySelector('.navi')
let main = document.querySelector('.main')

toggle.onclick = function () {
    navidation.classList.toggle('active')
    main.classList.toggle('active')
}

// add hovered class in selected list item

function activeLink() {
    let list = document.querySelectorAll('.navi li')
    list.forEach(item => {
        item.classList.remove('hovered');
    })
    this.classList.add('hovered');
    
    list.forEach(item => {
        item.addEventListener('mouseover', activeLink)
    })

}
activeLink()



// const media1 = window.matchMedia("(min-width: 960px)")
// const media1 = window.matchMedia("(min-width: 960px)")
// const media2 = window.matchMedia("(max-width: 960px)")

// window.onload = function() {
//     window.addEventListener("resize", function() {
//         let toggle = document.querySelector('.toggle')
//         let navidation = document.querySelector('.navi')
//         let main = document.querySelector('.main')
//         navidation.classList.add("active");

//         if (media2.matches) {

//             toggle.onclick = function() {

//                 navidation.classList.toggle('active')
//                 main.classList.toggle('active')
//             }

//             // add hovered class in selected list item
//             let list = document.querySelectorAll('.navi li')
//             function activeLink() {
//                 list.forEach(item => {
//                     item.classList.remove('hovered');
//                 })
//                 this.classList.add('hovered');
//             }
//             list.forEach(item =>{
//                 item.addEventListener('mouseover', activeLink)
//             })
//             activeLink()
//         }else if (media1.matches) {navidation.classList.remove('active')}
//     })
// }