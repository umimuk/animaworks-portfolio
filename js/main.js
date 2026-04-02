document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Flow Steps
    const flowSteps = document.querySelectorAll('.flow-step');

    const observerOptions = {
        threshold: 0.4,
        rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    flowSteps.forEach(step => {
        observer.observe(step);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile nav if open
            const mobileNav = document.getElementById('mobile-nav');
            if (mobileNav) {
                mobileNav.classList.remove('open');
            }
        });
    });

    // Header Scroll Effect
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(10, 14, 23, 0.95)';
                header.style.padding = '1rem 0';
                header.style.borderBottom = '1px solid rgba(79, 195, 247, 0.15)';
            } else {
                header.style.background = 'transparent';
                header.style.padding = '1.5rem 0';
                header.style.borderBottom = 'none';
            }
        });
    }

    // Hero Text Animation
    const heroContent = document.querySelector('#hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'all 1s ease-out 0.2s';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Hamburger Menu
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
    }
});
