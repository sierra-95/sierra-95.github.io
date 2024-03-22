const topCurtain = document.querySelector('.top');
const bottomCurtain = document.querySelector('.bottom');

function openCurtains() {
  topCurtain.style.height = '0';
  bottomCurtain.style.height = '0';
}

function closeCurtains() {
  topCurtain.style.height = '0%';
  bottomCurtain.style.height = '0%';
}

// To close the curtains after a certain time (for demonstration)
setTimeout(openCurtains, 3000); // Adjust the time as needed
