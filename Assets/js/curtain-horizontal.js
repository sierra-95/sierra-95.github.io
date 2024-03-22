// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Select the left and right curtains
  const leftCurtain = document.querySelector(".left-curtain");
  const rightCurtain = document.querySelector(".right-curtain");

  // Set the initial width of the curtains to 0
  leftCurtain.style.width = "50%";
  rightCurtain.style.width = "50%";

  // Trigger the opening of the curtains after a short delay (for demonstration purposes)
  setTimeout(() => {
    leftCurtain.style.width = "0%";
    rightCurtain.style.width = "0%";
  }, 3000); // Adjust the delay as needed (in milliseconds)
});
