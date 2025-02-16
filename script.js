import { navTranslations } from './js/translations/nav.js';

document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.flag');
    
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const language = flag.dataset.lang;
            sessionStorage.setItem('edoproLanguage', language);
            window.location.href = 'services.html';
        });
    });
});

// Update navigation based on selected language
function updateNavigation() {
    const language = sessionStorage.getItem('edoproLanguage') || 'fr';
    const nav = document.querySelector('.nav-links');
    if (nav) {
        const translations = navTranslations[language];
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        nav.innerHTML = `
            <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">${translations.home}</a>
            <a href="services.html" class="${currentPage === 'services.html' ? 'active' : ''}">${translations.services}</a>
            <a href="how-it-works.html" class="${currentPage === 'how-it-works.html' ? 'active' : ''}">${translations.howItWorks}</a>
            <a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">${translations.contact}</a>
            <a href="credits.html" class="${currentPage === 'credits.html' ? 'active' : ''}">${translations.credits}</a>
        `;
    }
}

// Call updateNavigation when DOM is loaded
document.addEventListener('DOMContentLoaded', updateNavigation);