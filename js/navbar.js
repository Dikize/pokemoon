//  menu toggle
let toggle = document.querySelector('.toggle')
let navidation = document.querySelector('.navi')
let main = document.querySelector('.main')

toggle.onclick = function () {

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
list.forEach(item => {
    item.addEventListener('mouseover', activeLink)
})
activeLink()



// const media1 = window.matchMedia("(min-width: 960px)")
const media2 = window.matchMedia("(max-width: 960px)")

window.onload = function () {
    window.addEventListener("resize", function () {
        const card = document.querySelector("header .navCustom");

        if (media2.matches) {
            card.innerHTML += `
                <div class="navigation active">
                    <ul>
                        <div class="toggle mx-auto">
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                        <li class="active">
                            <a href="#">
                                <span class="icon"><img src="./img/pokeball.png" alt=""></span>
                                <span class="title">Metapokemoon</span>
                            </a>
                        </li>
    
                        <li>
                            <a href="#">
                                <span class="icon"><img src="./img/pokeball.png" alt=""></span>
                                <span class="title">About Us</span>
                            </a>
                        </li>
    
                        <li>
                            <a href="#">
                                <span class="icon"><img src="./img/2.svg" alt=""></span>
                                <span class="title">Tokenomics</span>
                            </a>
                        </li>
    
                        <li>
                            <a href="#">
                                <span class="icon"><img src="./img/roadmap.png" alt=""></span>
                                <span class="title">Roadmap</span>
                            </a>
                        </li>
    
                        <li>
                            <a href="#">
                                <span class="icon"><img src="./img/buy.png" alt=""></span>
                                <span class="title">How to Buy</span>
                            </a>
                        </li>
    
                        <li>
                            <a href="#">
                                <span class="icon"><img src="./img/faq.png" alt=""></span>
                                <span class="title">FAQ</span>
                            </a>
                        </li>
    
                        <li>
                            <a href="#">
                                <span class="icon"><img src="./img/chart.png" alt=""></span>
                                <span class="title">Live Chart</span>
                            </a>
                        </li>
                        <div class="indicator"></div>
                    </ul>
                </div>
            `;
        }
    })
}

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