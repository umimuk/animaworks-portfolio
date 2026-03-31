document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Flow Steps
    const flowSteps = document.querySelectorAll('.flow-step');
    
    const observerOptions = {
        threshold: 0.5,
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
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 7, 10, 0.9)';
            header.style.padding = '1rem 0';
        } else {
            header.style.background = 'transparent';
            header.style.padding = '1.5rem 0';
        }
    });

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
});
