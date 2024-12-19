document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const hoverZone = document.createElement("div");

    // Add hover zone to the document
    hoverZone.classList.add("navbar-hover-zone");
    document.body.appendChild(hoverZone);

    // Handle navbar visibility based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            // User is at the top of the page
            navbar.classList.remove("hidden");
        } else {
            // User is not at the top
            navbar.classList.add("hidden");
        }
    });

    // Show navbar on hover over hover zone
    hoverZone.addEventListener("mouseenter", () => {
        navbar.classList.remove("hidden");
    });

    // Ensure navbar stays visible when hovered directly
    navbar.addEventListener("mouseenter", () => {
        navbar.classList.remove("hidden");
    });

    // Hide navbar when mouse leaves, only if not at the top
    navbar.addEventListener("mouseleave", () => {
        if (window.scrollY > 0) {
            navbar.classList.add("hidden");
        }
    });


    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDown = document.querySelector(".dropdown");

    toggleBtn.onclick = function () {
        dropDown.classList.toggle("open");
        const isOpen = dropDown.classList.contains("open");

        toggleBtnIcon.classList = isOpen
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";
    }
});
