export function NavigationSection() {
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let currentVisibleSection = null;

    const activateCardsAnimation = () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible-translation');
            }, index * 400);
        });
    };

    const hideCards = () => {
        cards.forEach(card => card.classList.remove('visible-translation'));
    };

    const updateURL = (id) => {
        if (id !== currentVisibleSection) {
            history.pushState(null, null, `#${id}`);
            currentVisibleSection = id;

            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });

            if (id === 'projets') {
                activateCardsAnimation();
            } else {
                hideCards();
            }
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateURL(entry.target.id);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            target?.scrollIntoView({ behavior: 'smooth' });
            updateURL(targetId);
        });
    });

    // Forcer le check manuel sur scroll (utile sur mobile quand l'observer bug)
    window.addEventListener('scroll', () => {
        const projetsSection = document.getElementById('projets');
        if (projetsSection) {
            const rect = projetsSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
            if (isVisible && currentVisibleSection !== 'projets') {
                updateURL('projets');
            }
        }
    }, { passive: true });

    // Check initial à l'ouverture
    if (document.location.hash === '#projets') {
        activateCardsAnimation();
    } else {
        hideCards();
    }
}
