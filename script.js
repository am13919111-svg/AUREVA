// MOBILE MENU

const navbar = document.querySelector(".navbar");
const nav = document.querySelector("nav");

const menuButton = document.createElement("button");
menuButton.className = "menu-button";
menuButton.textContent = "☰";
menuButton.setAttribute("aria-label", "Open menu");
menuButton.setAttribute("aria-expanded", "false");

navbar.insertBefore(menuButton, nav);

menuButton.addEventListener("click", function () {
    nav.classList.toggle("active");

    const isOpen = nav.classList.contains("active");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});


// SCROLL ANIMATION

const animatedElements = document.querySelectorAll(
    ".about, .services, .work, .contact, .service, .project-card"
);

animatedElements.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

animatedElements.forEach(function (element) {
    observer.observe(element);
});


// BACK TO TOP BUTTON

const topButton = document.createElement("button");

topButton.className = "back-to-top";
topButton.textContent = "↑";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formStatus.textContent =
        "Thank you! Your message has been received in this demo.";

    contactForm.reset();

});