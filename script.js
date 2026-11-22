// Wait until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    // Open and close navigation
    function toggleNav() {
        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    }

    // Menu button click
    menuToggle.addEventListener("click", toggleNav);

    // Close menu when a navigation link is clicked
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });

    // Close menu when Escape is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            navbar.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });


    // SMOOTH SCROLLING
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // SUBSCRIPTION FORM
    const subscriptionForm = document.querySelector(
        ".subscription-section form"
    );

    if (subscriptionForm) {

        subscriptionForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const deathDate = document.querySelector("#death-date").value;
            const zombieNumber = document.querySelector("#zombie-number").value.trim();

            // Check that all fields contain information
            if (!name || !deathDate || !zombieNumber) {
                alert("Please complete all subscription fields.");
                return;
            }

            // Display confirmation
            alert(
                "Welcome to AfterLife, " + name +
                "! Your subscription form is complete."
            );

            // Clear the form
            subscriptionForm.reset();

        });
    }


    // SOCIAL MEDIA ICONS
    const socialLinks = document.querySelectorAll(".icon-area a");

    socialLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            if (link.getAttribute("href") === "#") {
                event.preventDefault();

                alert("Social media link coming soon!");
            }

        });

    });

});

// CATEGORIES

/* NAVIGATION MENU */

// Select the menu button
const menuToggle = document.querySelector(".menuToggle");

// Select the navigation menu
const navbar = document.querySelector(".navbar");

// Open and close the navigation menu
if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        // Open or close the menu
        navbar.classList.toggle("active");

        // Check if the menu is open
        const isOpen = navbar.classList.contains("active");

        // Update the accessibility attribute
        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu when a navigation link is clicked
    navbar.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


/* CATEGORY DROPDOWN */

// Select the dropdown
const dropdown = document.querySelector(".dropdown");

// Select the dropdown button
const dropdownToggle = document.querySelector(".dropdown-toggle");

if (dropdown && dropdownToggle) {

    // Open and close the dropdown
    dropdownToggle.addEventListener("click", function() {

        dropdown.classList.toggle("open");

        // Check if the dropdown is open
        const isOpen = dropdown.classList.contains("open");

        // Update the accessibility attribute
        dropdownToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close dropdown when a category link is clicked
    dropdown.querySelectorAll(".dropdown-menu a").forEach(function(link) {

        link.addEventListener("click", function() {

            dropdown.classList.remove("open");

            dropdownToggle.setAttribute("aria-expanded", "false");

        });

    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {

        if (!dropdown.contains(event.target)) {

            dropdown.classList.remove("open");

            dropdownToggle.setAttribute("aria-expanded", "false");

        }

    });

    // Close dropdown with Escape key
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            dropdown.classList.remove("open");

            dropdownToggle.setAttribute("aria-expanded", "false");

            dropdownToggle.focus();

        }

    });

}


// NAVBAR
const primaryNavigation = document.querySelector(".primary-navigation");
const navigationToggle = document.querySelector(".navigation-toggle");

// Opens and closes mobile navigation
navigationToggle.addEventListener("click", function () {

    // Toggles the menu
    primaryNavigation.classList.toggle("active");

    // Checks if the menu is open
    const isOpen = primaryNavigation.classList.contains("active");

    // Updates accessibility
    navigationToggle.setAttribute("aria-expanded", isOpen);
});