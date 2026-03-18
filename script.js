// ============================================
// VYACHESLAV EFIMOV — WEBSITE SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- Scroll Reveal (staggered) ----
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        // Group entries that fire in the same batch for staggering
        const visible = entries.filter(e => e.isIntersecting);
        visible.forEach((entry, index) => {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ---- Navbar Scroll ----
    const nav = document.getElementById('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // ---- Mobile Menu ----
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ---- Smooth anchor scrolling ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---- Rotating hero text ----
    const rotatingEl = document.getElementById('rotatingText');
    const phrases = [
        'production AI systems.',
        'ML pipelines at scale.',
        'computer vision apps.',
        'NLP & LLM solutions.',
        'AI products from 0 to 1.'
    ];
    let phraseIndex = 0;

    setInterval(() => {
        rotatingEl.classList.add('fade-out');
        rotatingEl.classList.remove('fade-in');

        setTimeout(() => {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            rotatingEl.textContent = phrases[phraseIndex];
            rotatingEl.classList.remove('fade-out');
            rotatingEl.classList.add('fade-in');
        }, 400);
    }, 5000);

    // ---- Parallax floating tags ----
    const floatingTags = document.querySelectorAll('.floating-tag');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                floatingTags.forEach((tag, i) => {
                    const speed = 0.015 + (i * 0.008);
                    tag.style.transform = `translateY(${Math.sin(scrollY * speed) * 10}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });

});
