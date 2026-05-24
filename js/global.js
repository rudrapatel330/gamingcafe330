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

    // Global Click Sound Effect
    const clickSound = new Audio('soundeffects/mixkit-interface-device-click-2577.wav');
    // Preload audio
    clickSound.preload = 'auto';
    
    document.addEventListener('click', (e) => {
        const target = e.target.closest('button, a, .btn, .btn-buy, .btn-white, .btn-glass, .nav-links a, .slide-arrow, .slide-dot, .hamburger');
        if (target) {
            // Clone the audio node so rapid clicks can overlap without cutting off
            const soundClone = clickSound.cloneNode();
            soundClone.volume = 0.6; // Not too loud
            soundClone.play().catch(err => {
                // Browsers may block audio if the user hasn't interacted with the page yet
                console.log('Audio play blocked:', err);
            });
        }
    });
});
