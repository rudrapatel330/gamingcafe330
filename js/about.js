document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // === HERO PARTICLES ===
    const particlesContainer = document.getElementById('about-hero-particles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'about-hero-particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 8 + 's';
            p.style.animationDuration = (5 + Math.random() * 5) + 's';
            p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
            particlesContainer.appendChild(p);
        }
    }

    // === STORY IMAGE PARALLAX ===
    const storyImg = document.querySelector('.about-story-img-wrap img');
    if (storyImg) {
        gsap.to(storyImg, {
            y: 40,
            ease: 'none',
            scrollTrigger: {
                trigger: '.about-story-img-wrap',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
            }
        });
    }

    // === STORY FEATURES STAGGER ===
    gsap.fromTo('.about-story-feat', {
        opacity: 0,
        x: -20
    }, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about-story-features',
            start: 'top 80%',
            once: true
        }
    });

    // === DIFF CARDS STAGGER ===
    gsap.fromTo('.about-diff-card', {
        opacity: 0,
        y: 40
    }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-diff-grid',
            start: 'top 75%',
            once: true
        }
    });

    // === DIFF CARDS 3D TILT ===
    document.querySelectorAll('.about-diff-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            gsap.to(card, {
                rotationY: x * 6,
                rotationX: -y * 6,
                transformPerspective: 1200,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.4)'
            });
        });
    });

    // === STAT COUNTERS ===
    document.querySelectorAll('.about-stat-value[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = target >= 1000 ? '+' : '+';
        const formatted = target >= 1000;

        ScrollTrigger.create({
            trigger: el.closest('.about-stats'),
            start: 'top 80%',
            once: true,
            onEnter: () => {
                gsap.fromTo(el,
                    { textContent: 0 },
                    {
                        textContent: target,
                        duration: 2,
                        ease: 'power3.out',
                        snap: { textContent: 1 },
                        onUpdate: () => {
                            const val = parseInt(el.textContent);
                            el.textContent = formatted
                                ? val.toLocaleString('en-IN') + suffix
                                : val + suffix;
                        },
                        onComplete: () => {
                            el.textContent = formatted
                                ? target.toLocaleString('en-IN') + suffix
                                : target + suffix;
                        }
                    }
                );
            }
        });
    });

    // === MISSION QUOTE REVEAL ===
    gsap.fromTo('.about-mission-quote', {
        opacity: 0,
        scale: 0.9
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-mission',
            start: 'top 75%',
            once: true
        }
    });

    // === CTA REVEAL ===
    gsap.fromTo('.about-cta-content', {
        opacity: 0,
        y: 40
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-cta',
            start: 'top 75%',
            once: true
        }
    });

    // === STAT CARDS STAGGER ===
    gsap.fromTo('.about-stat-card', {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about-stats-grid',
            start: 'top 80%',
            once: true
        }
    });

    // === STORY SECTION REVEAL ===
    gsap.fromTo('.about-story-content', {
        opacity: 0,
        x: 40
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-story',
            start: 'top 70%',
            once: true
        }
    });

    gsap.fromTo('.about-story-image', {
        opacity: 0,
        x: -40
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-story',
            start: 'top 70%',
            once: true
        }
    });

    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 80 },
                    duration: 1.2,
                    ease: 'power3.inOut'
                });
            }
        });
    });
});
