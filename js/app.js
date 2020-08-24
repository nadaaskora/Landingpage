/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbarList = document.querySelector(".navbar__list");
const navbarListLink = document.querySelectorAll("a");
const menuButton = document.querySelector(".menu-btn");
const sections = document.querySelectorAll("section");
let mainNavLinks = document.querySelectorAll(".link");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function getActiveElem() {
  maxSection = sections[0];
  minVal = 1000000;
  for (let item of sections) {
    let boundaries = item.getBoundingClientRect();
    if ((boundaries.top > -300) & (boundaries.top < minVal)) {
      minVal = boundaries.top;
      maxSection = item;
    }
  }
  return maxSection;
}
// setActiveSection
function setActiveSection() {
  window.section = getActiveElem();
  section.classList.add("your-active-class");
}
// removeInactiveSections
function removeInactiveSections() {
  for (let item of sections) {
    if (item.classList.contains("your-active-class")) {
      item.classList.remove("your-active-class");
      continue;
    }
  }
}

// header style
function headerStyle() {
  // set corresponding header style
  const active = document.querySelector('a[data-link="' + section.id + '"]');
  active.classList.add("active");
  // remove from other headers
  const mainNavLinks = document.querySelectorAll(".link");
  for (let item of mainNavLinks) {
    if (
      (item.dataset.link != active.dataset.link) &
      item.classList.contains("active")
    ) {
      item.classList.remove("active");
    }
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((el) => {
  const navListElement = `<li><a href=#${el.id} class='link' data-link=${el.id}>${el.dataset.nav}</a></li>`;
  navbarList.insertAdjacentHTML("beforeend", navListElement);
});

// Add class 'active' to section when near top of viewport
function setActive() {
  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    // set Active Section
    setActiveSection();
    // set other sections as inactive
    removeInactiveSections();
    // header style
    headerStyle();
  });
}

// Scroll to anchor ID using scrollTO event
function scrollToClick() {
  navbarList.addEventListener("click", (e) => {
    e.preventDefault();
    const elementToScrollTo = document.querySelector(
      "#" + e.target.dataset.link
    );
    elementToScrollTo.scrollIntoView({
      block: "end",
      behavior: "smooth",
      inline: "nearest",
    });
  });
}
// responsive menu
// hide menu on click (responsive menu)
function hideMenu() {
  navbarList.classList.remove("show");
}

menuButton.addEventListener("click", () => navbarList.classList.toggle("show"));
navbarListLink.forEach((link) => link.addEventListener("click", hideMenu));

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// Scroll to section on link click
scrollToClick();
// Set sections as active
setActive();
/* Scroll to the top */
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* */
