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

// global variable to store all sections
const allSections = document.querySelectorAll('section');

// global variable to retrieve ul element
const navbarList = document.querySelector('#navbar__list');

// build the nav
for (let i = 0; i < allSections.length; i++) {
    let liElement = document.createElement("li");
    liElement.innerHTML = "<a class = 'menu__link' href = ''>" + allSections[i].getAttribute("data-nav") + "</a>";
    navbarList.appendChild(liElement);
}

// function to apply active to section that near top of viewport
window.addEventListener("scroll", () => {
    for ( let i = 0; i < allSections.length; i++) {
        let scrolledSection = allSections[i];
        let scrolledSectionY = (scrolledSection.getBoundingClientRect()).top;
        if (scrolledSectionY <= 200) {
            applyActiveClass(i);
        }
    }
});

// function to Scroll to section on link click 
const allMenuLinks = document.querySelectorAll(".menu__link");
for (let i = 0; i < allMenuLinks.length; i++) {
    allMenuLinks[i].addEventListener('click', (event) => {
        event.preventDefault();
        let indexOfscrolledSection = i + 1;
        let scrolledSection = document.getElementById("section" + indexOfscrolledSection) ;
        scrolledSection.scrollIntoView({behavior: "smooth"});
        applyActiveClass(i);
    });
}
// this helper function will be invoked to apply "your-active-class" to ative section and "highlight-nav" to highlight navigation item
let applyActiveClass = (indexOfscrolledSection) => {
    for (let i = 0; i < allSections.length; i++) {
        if (allSections[i].classList.contains("your-active-class")) {
            if (i !== indexOfscrolledSection ) {
                allSections[i].classList.remove("your-active-class");
                allMenuLinks[i].parentElement.classList.remove("highlight-nav");
                allMenuLinks[i].classList.remove("color-link");
            }
        }   
        else if (i === indexOfscrolledSection) {
            allSections[i].classList.add("your-active-class");
            allMenuLinks[i].parentElement.classList.add("highlight-nav");
            allMenuLinks[i].classList.add("color-link");
        }   
    }       
};






