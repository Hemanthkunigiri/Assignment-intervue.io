/* 
  Custom JavaScript for Intervue Page Interactivity
  - Mobile Navigation Toggle
  - FAQ Accordion
*/

document.addEventListener('DOMContentLoaded', function () {
    
    // --- Mobile Navigation Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');

    if (navToggle && navContent) {
        navToggle.addEventListener('click', function () {
            // Toggles the 'hidden' class from Tailwind CSS
            navContent.classList.toggle('hidden');
        });
    }
    
    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');

        if (questionButton) {
            questionButton.addEventListener('click', () => {
                // Check if the clicked item is already active
                const isAlreadyActive = item.classList.contains('active');

                // First, close all other open FAQ items for a clean accordion effect
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Then, toggle the 'active' class on the clicked item
                if (!isAlreadyActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });

});