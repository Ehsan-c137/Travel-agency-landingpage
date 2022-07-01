"use strict";

const learnMoreBtn = document.querySelectorAll(".offer__learnmore");

[...learnMoreBtn].map(function (item) {
   item.addEventListener("focus", function (i) {
      item.parentElement.classList.add("offer__modal");

      item.style.transform = "translateX(2000px)";
   });

   item.addEventListener("blur", function (i) {
      item.parentElement.classList.remove("offer__modal");
      item.style.transform = "translateX(0px)";
   });
});
