"use strict";

const swiper = new Swiper(".swiper", {
   // Default parameters
   direction: "horizontal",
   slidesPerView: 1,
   // spaceBetween: 10,

   // Responsive breakpoints
   pagination: {
      el: ".swiper-pagination",
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 3000,
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});
