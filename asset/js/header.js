document
  .getElementById("nav-menu-button")
  .addEventListener("click", function () {
    var navMenu = document.getElementById("nav-menu");
    var hamburgerIcon = document.getElementById("hamburger-icon");
    var xIcon = document.getElementById("x-icon");

    navMenu.classList.toggle("scale-y-0");
    navMenu.classList.toggle("scale-y-100");

    hamburgerIcon.classList.toggle("hidden");
    xIcon.classList.toggle("hidden");
  });

document.querySelectorAll("#nav-menu a").forEach((navMenuItem) => {
  navMenuItem.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var navMenuItems = document.querySelectorAll("#nav-menu a");

  sections.forEach(function (section) {
    var rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      var id = section.getAttribute("id");
      navMenuItems.forEach(function (navMenu) {
        navMenu.classList.remove("text-primary");
        if (navMenu.getAttribute("href").substring(1) === id) {
          navMenu.classList.add("text-primary");
        }
      });
    }
  });
});

const jobArray = ["Web Developer", "Software Engineer"];
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000;
let jobArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < jobArray[jobArrayIndex].length) {
    document.getElementById("job").textContent += jobArray[jobArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    document.getElementById("job").textContent = jobArray[jobArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    jobArrayIndex++;
    if (jobArrayIndex >= jobArray.length) jobArrayIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (jobArray.length) setTimeout(type, newTextDelay);
});