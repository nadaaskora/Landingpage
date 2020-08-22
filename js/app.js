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
const navbarList = document.querySelector('.navbar__list');
const navbarListLink = document.querySelectorAll('a');
const menuButton = document.querySelector('.menu-btn');
const sections = document.querySelectorAll('section')

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
function addLinks() {
    for (let item of sections) {
        let section = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', `#${item.id}`);
        link.innerText = item.dataset.nav;
        navbarList.appendChild(section).appendChild(link);
    }
}
// responsive menu
// hide menu on click (responsive menu)
function hideMenu() {
    navbarList.classList.remove('show');
}

menuButton.addEventListener('click', () => navbarList.classList.toggle('show'));
navbarListLink.forEach(link => link.addEventListener('click', hideMenu));

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
addLinks();
// Scroll to section on link click

// Set sections as active

/* Scroll to the top */
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
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