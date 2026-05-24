/* ============================================
   HOME PAGE JS — DYNAMIC INTERACTIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // === 1. HERO 3D PARALLAX EFFECT ===
    const heroSection = document.querySelector('.home-hero-section');
    const swoosh = document.querySelector('.light-swoosh');
    const stackedCards = document.querySelector('.stacked-cards');
    
    if (heroSection && swoosh && stackedCards) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2; // Range: -1 to 1
            const y = (e.clientY / window.innerHeight - 0.5) * 2; // Range: -1 to 1

            // Move the background glow opposite to mouse
            swoosh.style.transform = `translate(${x * -40}px, ${y * -40}px)`;
            
            // Move the cards with mouse and add 3D rotation
            stackedCards.style.transform = `translate(${x * 30}px, ${y * 30}px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            swoosh.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
            stackedCards.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
            
            swoosh.style.transform = 'translate(0, 0)';
            stackedCards.style.transform = 'translate(0, 0) rotateY(0) rotateX(0)';
        });

        heroSection.addEventListener('mouseenter', () => {
            swoosh.style.transition = 'none';
            stackedCards.style.transition = 'none';
        });
    }

    // === 3. BENTO CARDS 3D HOVER TILT ===
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'border-color 0.3s ease'; // disable transform transition
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
            const rotateY = ((x - centerX) / centerX) * 6;  // max 6 deg
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
            card.style.borderColor = 'var(--neon-green)';
            card.style.boxShadow = '0 15px 35px rgba(0, 229, 115, 0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
            card.style.borderColor = 'transparent';
            card.style.boxShadow = 'none';
        });
    });

    // === 4. NAVBAR SCROLL GLOW EFFECT ===
    const navbar = document.querySelector('.store-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(12, 13, 17, 0.95)';
                navbar.style.boxShadow = '0 10px 30px rgba(0, 229, 115, 0.08)';
                navbar.style.borderBottom = '1px solid rgba(0, 229, 115, 0.2)';
            } else {
                navbar.style.background = 'rgba(12, 13, 17, 0.8)';
                navbar.style.boxShadow = 'none';
                navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
            }
        });
    }

    // === 5. PARTICLES BACKGROUND ===
    const canvas = document.getElementById('hero-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }
            draw() {
                ctx.fillStyle = 'rgba(0, 229, 115, 0.4)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            const numberOfParticles = (canvas.width * canvas.height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        function resizeCanvas() {
            canvas.width = document.body.clientWidth;
            canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
            initParticles();
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    }
});
