/* ============================================
   ACE PLAYZ — GSAP ANIMATIONS ENGINE
   Scroll animations, micro-interactions, effects
   ============================================ */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // 1. SCROLL PROGRESS BAR
    // ============================================
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.prepend(progressBar);

    gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });

    // ============================================
    // 2. SECTION REVEALS (fade + slide up)
    // ============================================
    gsap.utils.toArray('.reveal-hidden').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    toggleActions: 'play none none none',
                    once: true
                }
            }
        );
    });

    // ============================================
    // 3. STAGGER GRID REVEALS
    // ============================================
    const staggerGrids = [
        '.stats-grid',
        '.difference-grid',
        '.availability-grid',
        '.contact-info-wrap',
        '.social-icons'
    ];

    staggerGrids.forEach(selector => {
        const container = document.querySelector(selector);
        if (!container) return;
        const items = container.children;
        if (items.length === 0) return;

        gsap.fromTo(items,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    once: true
                }
            }
        );
    });

    // ============================================
    // 4. PARALLAX ON IMAGES
    // ============================================
    gsap.utils.toArray('[data-parallax]').forEach(img => {
        const speed = parseFloat(img.dataset.parallax) || 0.15;
        gsap.fromTo(img,
            { y: 0 },
            {
                y: () => -(img.offsetHeight * speed),
                ease: 'none',
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );
    });

    // ============================================
    // 5. SECTION TITLE TEXT REVEAL
    // ============================================
    document.querySelectorAll('.section-title, .page-title').forEach(title => {
        if (title.querySelector('span')) return;
        const text = title.textContent;
        const chars = text.split('').map(ch =>
            ch === ' ' ? ' ' : `<span class="char-reveal">${ch}</span>`
        ).join('');
        title.innerHTML = chars;
        title.style.opacity = '1';

        gsap.fromTo(title.querySelectorAll('.char-reveal'),
            { opacity: 0, y: 40, rotateX: -90 },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.5,
                stagger: 0.02,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: title.closest('section, header'),
                    start: 'top 80%',
                    once: true
                }
            }
        );
    });

    // ============================================
    // 6. HERO TITLE — NEON TEXT GLOW STAGGER
    // ============================================
    document.querySelectorAll('.hero-title-new').forEach(title => {
        gsap.fromTo(title,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: {
                    trigger: title.closest('.home-hero-section'),
                    start: 'top 70%',
                    once: true
                }
            }
        );
    });

    // ============================================
    // 6. STACKED CARDS ON HOME — GSAP AUTO-CYCLE (REMOVED)
    // The auto-cycle has been removed so cards stay in static positions.
    // ============================================

    // ============================================
    // 7. ANIMATED COUNTERS WITH GSAP
    // ============================================
    document.querySelectorAll('.stat-value[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = target >= 1000 ? '+' : '+';
        const formatted = target >= 1000;

        ScrollTrigger.create({
            trigger: el.closest('.stats-section') || el.parentElement,
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

    // ============================================
    // 8. MAGNETIC BUTTON EFFECT
    // ============================================
    document.querySelectorAll('.btn-buy, .btn-primary, .btn-glass, .btn-white').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.4)'
            });
        });
    });

    // ============================================
    // 9. RIPPLE EFFECT ON CLICK
    // ============================================
    document.querySelectorAll('.btn-buy, .btn-primary, .btn-glass, .btn-white').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            gsap.to(ripple, {
                scale: 4,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => ripple.remove()
            });
        });
    });

    // ============================================
    // 10. CUSTOM CURSOR ENHANCEMENT
    // ============================================
    const cursor = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (cursor && ring) {
        const pos = { x: 0, y: 0 };
        const ringPos = { x: 0, y: 0 };

        document.addEventListener('mousemove', (e) => {
            pos.x = e.clientX;
            pos.y = e.clientY;
            gsap.to(cursor, { x: pos.x, y: pos.y, duration: 0 });
            gsap.to(ring, { x: pos.x, y: pos.y, duration: 0.3, ease: 'power2.out' });
        });

        document.querySelectorAll('a, button, .station, .pricing-card, .diff-card, .bento-card, .pop-card, .thumb-card, .game-card, .social-icon').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(ring, { scale: 1.8, borderColor: 'var(--neon-green, #00E573)', duration: 0.3 });
                gsap.to(cursor, { scale: 2, backgroundColor: 'var(--neon-green, #00E573)', duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(ring, { scale: 1, borderColor: 'rgba(0, 240, 255, 0.5)', duration: 0.3 });
                gsap.to(cursor, { scale: 1, backgroundColor: 'var(--neon-cyan, #00F0FF)', duration: 0.3 });
            });
        });
    }

    // ============================================
    // 11. NAVBAR SCROLL EFFECT (GSAP)
    // ============================================
    const navbar = document.querySelector('.store-nav, .navbar');
    if (navbar) {
        ScrollTrigger.create({
            trigger: document.body,
            start: '50px top',
            onEnter: () => gsap.to(navbar, {
                backdropFilter: 'blur(20px)',
                background: 'rgba(12, 13, 17, 0.95)',
                borderBottom: '1px solid rgba(0, 229, 115, 0.15)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                duration: 0.3
            }),
            onLeaveBack: () => gsap.to(navbar, {
                backdropFilter: 'blur(10px)',
                background: 'rgba(12, 13, 17, 0.8)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                duration: 0.3
            })
        });
    }

    // ============================================
    // 12. CONTACT INFO CARDS — STAGGER FROM LEFT
    // ============================================
    const infoCards = document.querySelectorAll('.contact-info-card');
    if (infoCards.length) {
        gsap.fromTo(infoCards,
            { opacity: 0, x: 40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.contact-info-wrap',
                    start: 'top 80%',
                    once: true
                }
            }
        );
    }

    // ============================================
    // 13. SOCIAL ICONS STAGGER
    // ============================================
    const socialIcons = document.querySelectorAll('.social-icon');
    if (socialIcons.length) {
        gsap.fromTo(socialIcons,
            { opacity: 0, scale: 0 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.08,
                ease: 'back.out(2)',
                scrollTrigger: {
                    trigger: '.social-links',
                    start: 'top 85%',
                    once: true
                }
            }
        );
    }

    // ============================================
    // 14. GAMES THUMBNAIL HOVER EFFECT
    // ============================================
    document.querySelectorAll('.thumb-card, .pop-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // ============================================
    // 15. HERO LIGHT SWOOSH PARALLAX (GSAP)
    // ============================================
    const swoosh = document.querySelector('.light-swoosh');
    if (swoosh) {
        gsap.to(swoosh, {
            scale: 1.1,
            opacity: 0.6,
            ease: 'none',
            scrollTrigger: {
                trigger: '.home-hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // ============================================
    // 16. BENTO CARDS 3D TILT (GSAP)
    // ============================================
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            gsap.to(card, {
                rotationY: x * 8,
                rotationX: -y * 8,
                transformPerspective: 1000,
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

    // ============================================
    // 17. SMOOTH ANCHOR SCROLLING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 80 },
                    duration: 1,
                    ease: 'power3.inOut'
                });
            }
        });
    });

    // ============================================
    // 18. CARD GLOW ON MOUSE MOVE
    // ============================================
    document.querySelectorAll('.bento-card, .pop-card, .diff-card, .availability-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--glow-x', x + '%');
            card.style.setProperty('--glow-y', y + '%');
        });
    });

});