//------------  baray button Navbar ---------------//
let navbar = document.querySelector(".header .navbar");
 document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.add("active-n");
 };
 document.querySelector("#nav-close").onclick = () => {
    navbar.classList.remove("active-n");
 };

//------------  baray button Search  ---------------//
 let searchForm = document.querySelector(".search-form");
  document.querySelector("#search-btn").onclick = () => {
     searchForm.classList.add("active-s");
  };
  document.querySelector("#close-search").onclick = () => {
     searchForm.classList.remove("active-s");
  };
//------------  baray neashan dadane Header dar zamn scroll  ---------------//
  window.onscroll = () =>{
   navbar.classList.remove('active');

   if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active-h');
   }else{
       document.querySelector('.header').classList.remove('active-h');
   }
};
   window.onload = () =>{
      if(window.scrollY > 0){
         document.querySelector('.header').classList.add('active-h');
      }else{
         document.querySelector('.header').classList.remove('active-h');
      }
   };
   
//------------------- baray home slide  ------------------//
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//------------------- baray shop slide  ------------------//
var swiper = new Swiper(".product-slider", {
   spaceBetween: 10,
   grabCursor:true,
   loop:true,
   effect: "coverflow",
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
          rotate: 150,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   breakpoints: {
     "0": {
       slidesPerView: 1,
       spaceBetween: 10,
     },
     "450": {
       slidesPerView: 2,
       spaceBetween: 20,
     },
     "768": {
       slidesPerView: 2,
       spaceBetween: 40,
     },
     "991": {
       slidesPerView: 3,
       spaceBetween: 50,
     },
     "1200": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
   },
 });
//------------------- baray reviews slide  ------------------//
var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 10,
   grabCursor:true,
   loop:true,
   centeredSlides: true,
   slidesPerView: "auto",
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   breakpoints: {
     "0": {
       slidesPerView: 1,
       spaceBetween: 10,
     },
     "450": {
       slidesPerView: 2,
       spaceBetween: 20,
     },
     "768": {
       slidesPerView: 2,
       spaceBetween: 40,
     },
     "991": {
       slidesPerView: 3,
       spaceBetween: 50,
     },
   },
 });
//------------------- baray blogs slide  --------------------//
var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
     delay: 2000,
     disableOnInteraction: false,
     },
  navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
  breakpoints: {
    "0": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "450": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    "991": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    "1200": {
     slidesPerView: 3,
     spaceBetween: 50,
   },
  },
});
//------------------- baray clients slide  --------------------//
var swiper = new Swiper(".clients-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
  navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
  breakpoints: {
    "0": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "450": {
      slidesPerView: 2,
      
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    "991": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    "1200": {
     slidesPerView: 4,
     spaceBetween: 50,
   },
  },
});