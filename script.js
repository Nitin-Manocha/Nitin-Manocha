document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");
    
    // Add dynamic hover effect on sections
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.backgroundColor = "#f9f9f9";
            section.style.transition = "background-color 0.3s ease";
        });
        section.addEventListener("mouseleave", () => {
            section.style.backgroundColor = "white";
        });
    });
});
