document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick= () => {
var src = images.getAttribute('src');
document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider",{
    spaceBetween: 20 ,
    pagination: {
        el:".swiper-pagination",
        clickable: true
    },
    loop:true,
    grabCursor : true,
    autoplay : {
        delay : 7500 ,
        disableOnInteracrion : false,
    },
    breakpoints : {
        0: {
            slidesPerView: 1 ,
        },
        768 : {
            slidesPerView: 2,
        },
    },
})


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-solid');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-solid');
    navbar.classList.remove('active');
}



