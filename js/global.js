document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll-triggered micro-interactions
    const observerOptions = {
        threshold: 0,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for elements entering together
                setTimeout(() => {
                    entry.target.classList.add('reveal-visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.bento-card, .pop-card, .news-block, .affiliate-block, .newsletter-card, .best-product-card, .thumb-card');
    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu-container');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Button click ripple/press micro-interactions are handled via CSS :active
});
