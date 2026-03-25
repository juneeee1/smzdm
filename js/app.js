/**
 * app.js - Main application entry point
 * Assembles all sections and initializes the website
 */

document.addEventListener('DOMContentLoaded', function() {
    var app = document.getElementById('app');
    if (!app) return;

    // Create navigation
    var navResult = createNav();
    document.body.prepend(navResult.mobileMenu);
    document.body.prepend(navResult.nav);

    // Build page sections in order
    var sections = [
        createBanner(),
        createCoCreated(),
        createSeparator(),
        createProductValue(),
        createAiFoundation(),
        createCoreCompetence(),
        createCooperation(),
        createSteps(),
        createValueCooperation(),
        createPartner(),
        createContact(),
        createCTA(),
        createFooter()
    ];

    // Append all sections
    var fragment = document.createDocumentFragment();
    sections.forEach(function(section) {
        fragment.appendChild(section);
    });
    app.appendChild(fragment);

    // Initialize all animations and interactions
    initAnimations();
    initParallax();
});
