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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

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
function activeSection() {
  let mainNavLinks = document.querySelectorAll("li a");
  let mainSections = document.querySelectorAll("section");

  let lastId;
  let cur = [];

  window.addEventListener("scroll", (event) => {
    event.preventDefault();
    let fromTop = window.scrollY;

    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
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
activeSection();
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
