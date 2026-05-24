document.addEventListener('DOMContentLoaded', () => {
    const gamesData = {
        'gow': {
            title: 'God of War: Ragnar\u00f6k',
            rating: 98,
            desc: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Witness the changing dynamics of their relationship as they prepare for war.',
            platforms: ['PS5'],
            genres: ['Action', 'Adventure'],
            image: 'assets/Godofwar_ragnarock.png'
        },
        'wukong': {
            title: 'Black Myth: Wukong',
            rating: 95,
            desc: 'Immerse yourself in Chinese mythology as the Destined One. Explore a vast and beautifully crafted world, face formidable foes, and uncover the truth beneath the veil of a glorious legend.',
            platforms: ['PS5', 'PC'],
            genres: ['Action', 'RPG', 'Adventure'],
            image: 'assets/Black Myth wukong.png'
        },
        'spiderman': {
            title: 'Spider-Man 2',
            rating: 93,
            desc: 'Spider-Men Peter Parker and Miles Morales face the ultimate test of strength inside and outside the mask as they fight to save the city, each other and the ones they love.',
            platforms: ['PS5'],
            genres: ['Action', 'Open World'],
            image: 'assets/spiderman2.png'
        },
        'gta5': {
            title: 'Grand Theft Auto V',
            rating: 96,
            desc: 'Experience the ultimate open-world adventure in Los Santos. When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with the criminal underworld.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Action', 'Open World'],
            image: 'assets/gta5.avif'
        },
        'dragon_ball': {
            title: 'Dragon Ball: Sparking Zero',
            rating: 91,
            desc: 'Unleash legendary battles in Dragon Ball: Sparking Zero. Master iconic techniques, transform mid-fight, and recreate the anime\u2019s most epic showdowns with breathtaking visuals.',
            platforms: ['PS5', 'PC'],
            genres: ['Fighting', 'Anime'],
            image: 'assets/dragon_ball_sparking_zero.png'
        },
        'mortal_kombat': {
            title: 'Mortal Kombat 1: Ultimate',
            rating: 97,
            desc: 'Enter the legendary fighting franchise reborn. Mortal Kombat 1 introduces a reimagined universe with iconic characters, bone-crushing combos, and cinematic fatalities.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Fighting', 'Action'],
            image: 'assets/mortalcombate_ultimate.png'
        },
        'tekken8': {
            title: 'Tekken 8',
            rating: 94,
            desc: 'The King of Iron Fist Tournament returns. Tekken 8 brings aggressive new combat systems, stunning visuals powered by Unreal Engine 5, and the next chapter of the Mishima saga.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Fighting'],
            image: 'assets/tekken8.png'
        },
        'it_takes_two': {
            title: 'It Takes Two',
            rating: 99,
            desc: 'Embark on the wildest co-op adventure of a lifetime. Play as Cody and May, a couple turned into dolls, as they work together through genre-bending challenges in a fantastical world.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Co-op', 'Adventure'],
            image: 'assets/ittakestwo.png'
        },
        'split_fiction': {
            title: 'Split Fiction',
            rating: 100,
            desc: 'A genre-bending co-op adventure from the creators of It Takes Two. Switch between sci-fi and fantasy realms, master unique abilities, and unravel a story about creativity and friendship.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Co-op', 'Adventure'],
            image: 'assets/splitfiction.png'
        },
        'nba2k25': {
            title: 'NBA 2K25',
            rating: 88,
            desc: 'Experience the next evolution of basketball gaming. NBA 2K25 delivers authentic gameplay, deep MyCAREER mode, and stunning realism that puts you on the court like never before.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Sports', 'Basketball'],
            image: 'assets/2k25.png'
        },
        'wwe2k26': {
            title: 'WWE 2K26',
            rating: 87,
            desc: 'Step into the ring with WWE 2K26. Featuring an expanded roster, immersive storylines, and refined grappling mechanics that capture the drama and excitement of sports entertainment.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Sports', 'Wrestling'],
            image: 'assets/W2k26.png'
        },
        'fc26': {
            title: 'EA FC 26',
            rating: 89,
            desc: 'The world\u2019s game evolves. EA FC 26 brings authentic football action with enhanced gameplay, updated teams, and immersive modes that put you at the heart of the beautiful game.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Sports', 'Football'],
            image: 'assets/FC26.png'
        },
        'nfs_unbound': {
            title: 'Need for Speed Unbound',
            rating: 92,
            desc: 'Race through the streets of Lakeshore with style. Need for Speed Unbound combines street racing culture with unique anime-inspired visuals and intense high-speed chases.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Racing', 'Open World'],
            image: 'assets/nfcumbound.png'
        },
        'rdr2': {
            title: 'Red Dead Redemption 2',
            rating: 100,
            desc: 'An epic tale of life in America\u2019s unforgiving heartland. Follow outlaw Arthur Morgan as he navigates the decline of the Wild West in this breathtaking open-world masterpiece.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Action', 'Open World', 'Western'],
            image: 'assets/RDR2.png'
        },
        'expedition33': {
            title: 'Expedition 33',
            rating: 90,
            desc: 'Venture into a stunning and perilous world in Expedition 33. Uncover ancient mysteries, forge alliances, and survive the untamed wilds in this gripping action RPG.',
            platforms: ['PS5', 'PC'],
            genres: ['RPG', 'Adventure'],
            image: 'assets/Expedition33.png'
        },
        'ghost_yotei': {
            title: 'Ghost of Yotei',
            rating: 96,
            desc: 'Rise as a new legend in feudal Japan. Set in the breathtaking Hokkaido region, Ghost of Yotei continues the award-winning legacy with an all-new story of vengeance and honor.',
            platforms: ['PS5'],
            genres: ['Action', 'Adventure', 'Open World'],
            image: 'assets/GhostofYotie.png'
        },
        'uncharted': {
            title: 'Uncharted: Legacy of Thieves',
            rating: 94,
            desc: 'Join Nathan Drake and Chloe Frazer in two globe-trotting adventures. Uncover ancient treasures, solve elaborate puzzles, and survive deadly set pieces in this cinematic collection.',
            platforms: ['PS5', 'PC'],
            genres: ['Action', 'Adventure'],
            image: 'assets/uncharted_lagacy of thives_collection.png'
        },
        'resident_evil9': {
            title: 'Resident Evil 9',
            rating: 92,
            desc: 'Survival horror reaches new heights. Resident Evil 9 continues the iconic franchise with spine-chilling terror, intricate puzzles, and a gripping narrative that keeps you on edge.',
            platforms: ['PS5', 'PC', 'Xbox'],
            genres: ['Horror', 'Survival'],
            image: 'assets/re9.png'
        }
    };

    const gameIds = Object.keys(gamesData);
    const groupSize = 4;
    const groups = [];
    for (let i = 0; i < gameIds.length; i += groupSize) {
        groups.push(gameIds.slice(i, i + groupSize));
    }

    const wrapper = document.getElementById('slideshow-wrapper');
    const dotsContainer = document.getElementById('slide-dots');
    const prevBtn = document.getElementById('slide-prev');
    const nextBtn = document.getElementById('slide-next');
    const heroTitle = document.getElementById('hero-title');
    const heroScore = document.getElementById('hero-score');
    const heroDesc = document.getElementById('hero-desc');
    const heroPlatforms = document.getElementById('hero-platforms');
    const heroGenres = document.getElementById('hero-genres');
    const heroImg = document.getElementById('hero-img');

    let currentSlide = 0;
    let currentGameIndex = 0;
    let autoSlideInterval;
    let isAnimating = false;

    const createSpans = (arr, className) => {
        return arr.map(item => `<span class="${className}">${item}</span>`).join('');
    };

    const updateHero = (gameId) => {
        const game = gamesData[gameId];
        if (!game) return;
        const heroContent = document.querySelector('.hero-content');
        heroContent.style.transition = 'opacity 0.3s';
        heroContent.style.opacity = '0';
        heroImg.style.transition = 'opacity 0.3s, transform 0.3s';
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'scale(0.95)';
        setTimeout(() => {
            heroTitle.textContent = game.title;
            heroScore.textContent = game.rating;
            heroDesc.textContent = game.desc;
            heroPlatforms.innerHTML = `<span>PLATFORMS:</span> ${createSpans(game.platforms, 'plat-icon')}`;
            heroGenres.innerHTML = `<span>GENRES:</span> ${createSpans(game.genres, 'genre-tag')}`;
            heroImg.src = game.image;
            heroImg.alt = game.title;
            heroContent.style.opacity = '1';
            heroImg.style.opacity = '1';
            heroImg.style.transform = 'scale(1)';
        }, 300);
    };

    const handleThumbClick = (card, id) => {
        if (card.classList.contains('active-thumb')) return;
        document.querySelectorAll('.thumb-card').forEach(c => c.classList.remove('active-thumb'));
        card.classList.add('active-thumb');
        updateHero(id);
        const slide = wrapper.querySelectorAll('.slide')[currentSlide];
        const cards = slide.querySelectorAll('.thumb-card');
        currentGameIndex = Array.from(cards).indexOf(card);
        resetAutoSlide();
    };

    const goToSlide = (index) => {
        if (isAnimating || index === currentSlide) return;
        isAnimating = true;
        currentGameIndex = 0;
        const slides = wrapper.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active-slide');
        slides[index].classList.add('active-slide');
        dotsContainer.querySelectorAll('.slide-dot').forEach((d, i) => {
            d.classList.toggle('active-dot', i === index);
        });
        currentSlide = index;
        const firstCard = slides[index].querySelector('.thumb-card');
        if (firstCard) {
            document.querySelectorAll('.thumb-card').forEach(c => c.classList.remove('active-thumb'));
            firstCard.classList.add('active-thumb');
            updateHero(firstCard.dataset.id);
        }
        setTimeout(() => { isAnimating = false; }, 400);
        resetAutoSlide();
    };

    const advanceToNextGame = () => {
        if (isAnimating) return;
        const slides = wrapper.querySelectorAll('.slide');
        const slide = slides[currentSlide];
        const cards = slide.querySelectorAll('.thumb-card');
        if (currentGameIndex < cards.length - 1) {
            currentGameIndex++;
            cards.forEach(c => c.classList.remove('active-thumb'));
            cards[currentGameIndex].classList.add('active-thumb');
            updateHero(cards[currentGameIndex].dataset.id);
        } else {
            currentGameIndex = 0;
            goToSlide((currentSlide + 1) % groups.length);
        }
    };

    const nextSlide = () => {
        const slides = wrapper.querySelectorAll('.slide');
        const cards = slides[currentSlide].querySelectorAll('.thumb-card');
        if (currentGameIndex < cards.length - 1) {
            currentGameIndex++;
            cards.forEach(c => c.classList.remove('active-thumb'));
            cards[currentGameIndex].classList.add('active-thumb');
            updateHero(cards[currentGameIndex].dataset.id);
            resetAutoSlide();
        } else {
            currentGameIndex = 0;
            goToSlide((currentSlide + 1) % groups.length);
        }
    };

    const prevSlide = () => {
        const slides = wrapper.querySelectorAll('.slide');
        const cards = slides[currentSlide].querySelectorAll('.thumb-card');
        if (currentGameIndex > 0) {
            currentGameIndex--;
            cards.forEach(c => c.classList.remove('active-thumb'));
            cards[currentGameIndex].classList.add('active-thumb');
            updateHero(cards[currentGameIndex].dataset.id);
            resetAutoSlide();
        } else {
            currentGameIndex = 0;
            goToSlide((currentSlide - 1 + groups.length) % groups.length);
        }
    };

    let isHeroInView = true;

    const startAutoSlide = () => {
        stopAutoSlide();
        if (isHeroInView) {
            autoSlideInterval = setInterval(advanceToNextGame, 5000);
        }
    };

    const stopAutoSlide = () => clearInterval(autoSlideInterval);
    const resetAutoSlide = () => startAutoSlide();

    const heroSection = document.querySelector('.store-hero');
    if (heroSection) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isHeroInView = entry.isIntersecting;
                if (isHeroInView) {
                    startAutoSlide();
                } else {
                    stopAutoSlide();
                }
            });
        }, { threshold: 0.1 });
        heroObserver.observe(heroSection);
    }

    const buildSlides = () => {
        wrapper.innerHTML = '';
        groups.forEach((group, slideIndex) => {
            const slide = document.createElement('div');
            slide.className = 'slide' + (slideIndex === 0 ? ' active-slide' : '');
            const grid = document.createElement('div');
            grid.className = 'thumb-grid slide-grid';
            group.forEach(id => {
                const game = gamesData[id];
                const card = document.createElement('div');
                card.className = 'thumb-card';
                if (id === gameIds[0] && slideIndex === 0) card.classList.add('active-thumb');
                card.dataset.id = id;
                card.innerHTML = `
                    <img src="${game.image}" alt="${game.title}" loading="lazy">
                    <div class="thumb-overlay"><h3>${game.title}</h3></div>
                `;
                card.addEventListener('click', () => handleThumbClick(card, id));
                grid.appendChild(card);
            });
            slide.appendChild(grid);
            wrapper.appendChild(slide);
        });

        dotsContainer.innerHTML = '';
        groups.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'slide-dot' + (i === 0 ? ' active-dot' : '');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        setupThumbReveal();
    };

    const setupThumbReveal = () => {
        document.querySelectorAll('.thumb-card').forEach(el => {
            el.classList.add('reveal-hidden');
        });
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px' });
        document.querySelectorAll('.thumb-card.reveal-hidden').forEach(el => revealObserver.observe(el));
    };

    buildSlides();
    const firstCard = document.querySelector('.thumb-card');
    if (firstCard) updateHero(firstCard.dataset.id);
    startAutoSlide();

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    /* Swipe Gestures */
    let touchStartX = 0;
    let touchEndX = 0;
    const handleSwipe = () => {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) nextSlide();
        if (touchEndX > touchStartX + swipeThreshold) prevSlide();
    };
    const heroSectionEl = document.querySelector('.store-hero');
    if (heroSectionEl) {
        heroSectionEl.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX, {passive: true});
        heroSectionEl.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
    }

    /* Ripple Effect */
    document.querySelectorAll('.btn-buy, .btn-white').forEach(btn => {
        btn.classList.add('ripple');
        btn.addEventListener('touchstart', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            const circle = document.createElement('span');
            circle.classList.add('ripple-element');
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            const size = Math.max(rect.width, rect.height);
            circle.style.width = circle.style.height = `${size}px`;
            circle.style.marginLeft = circle.style.marginTop = `-${size / 2}px`;
            this.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
        }, {passive: true});
    });
});
