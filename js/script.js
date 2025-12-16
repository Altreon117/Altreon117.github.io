// Gestion des dropdowns FAQ
document.addEventListener('DOMContentLoaded', function() {
    // FAQ dropdowns
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqContent = faqItem.querySelector('.faq-content');

            // Fermer les autres dropdowns
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    const t = item.querySelector('.faq-toggle');
                    const c = item.querySelector('.faq-content');
                    t.classList.remove('active');
                    t.setAttribute('aria-expanded', 'false');
                    c.classList.remove('active');
                }
            });

            // Toggle le dropdown actuel + ARIA
            const isOpen = !faqContent.classList.contains('active');
            this.classList.toggle('active', isOpen);
            faqContent.classList.toggle('active', isOpen);
            this.setAttribute('aria-expanded', String(isOpen));
        });
    });

    // Feature switcher via cards
    const cards = document.querySelectorAll('.card');
    const featureImage = document.getElementById('feature-image');
    const featureTitle = document.getElementById('feature-title');
    const featureDescription = document.getElementById('feature-description');

    const updateFeature = (card) => {
        if (!card || !featureImage || !featureTitle || !featureDescription) return;
        const { img, title, desc } = card.dataset;
        if (img) featureImage.src = img;
        if (title) featureTitle.textContent = title;
        if (desc) featureDescription.textContent = desc;
        featureImage.alt = title || featureImage.alt;
    };

    cards.forEach(card => {
        card.addEventListener('click', () => updateFeature(card));
    });

    // Assure l'état initial basé sur la première carte (Hellblade)
    if (cards.length) {
        updateFeature(cards[0]);
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('primary-nav');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });
        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }));
    }
});
