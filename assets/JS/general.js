"use strict";

const goToTopBtn = document.querySelector(".go-to-top ");
const header = document.querySelector(".header");
window.addEventListener("scroll", function (item) {
   if (this.pageYOffset > 200) {
      goToTopBtn.classList.remove("hidden-btn");
      header.classList.add("fixed-header");
   } else {
      goToTopBtn.classList.add("hidden-btn");
      header.classList.remove("fixed-header");
   }
});

goToTopBtn.addEventListener("click", function (e) {
   window.scrollTo(0, 0);
});
