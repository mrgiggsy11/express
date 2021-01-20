const schoolSlide = document.querySelector(".school-slide");
const schoolImages = document.querySelectorAll(".school-slide img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = schoolSlide[0].clientWidth;
schoolSlide.style.transform = "translateX(" + -size * counter + "px)";

//button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= schoolSlide.length - 1) return;

  schoolSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  schoolSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  schoolSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  schoolSlide.style.transform = "translateX(" + -size * counter + "px)";
});

schoolSlide.addEventListener("transitionend", () => {
  if (schoolSlide[counter].id === "lastClone") {
    schoolSlide.style.transition = "none";
    counter = schoolSlide.length - 2;
    schoolSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (schoolSlide[counter].id === "firstClone") {
    schoolSlide.style.transition = "none";
    counter = schoolSlide.length - counter;
    schoolSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
