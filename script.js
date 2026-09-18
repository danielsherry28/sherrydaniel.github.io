// =========================
// SMOOTH SCROLLING
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            e.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================
// STICKY HEADER EFFECT
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================
// FADE-IN SCROLL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    ".experience-card, .project-card, .education-card, .about-container, .skills-container"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// =========================
// PROJECT CARD HOVER
// =========================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// =========================
// CURRENT YEAR IN FOOTER
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================
// CONSOLE MESSAGE
// =========================

console.log("Daniel Sherry Portfolio loaded successfully.");

For the fade animations and active navigation to actually show visually, add this near the bottom of your style.css too:

/* JavaScript scroll animations */

.hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}


/* Header when scrolling */

header.scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}


/* Active navigation link */

.nav-links a.active {
    font-weight: 700;
    border-bottom: 2px solid #222222;
}
