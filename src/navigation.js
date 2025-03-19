export function NavigationSection() {
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Fonction pour activer l'animation des cartes
    const activateCardsAnimation = () => {
        cards.forEach((card) => {
            // Ajout de la classe 'visible' pour activer l'animation
            card.classList.add('visible-translation');
        });
    };

    // Fonction pour cacher les cartes
    const hideCards = () => {
        cards.forEach((card) => {
            // Retirer la classe 'visible' pour cacher les cartes
            card.classList.remove('visible-translation');
        });
    };

    // Fonction pour mettre à jour l'URL en fonction de la section visible
    const updateURL = (id) => {
        history.pushState(null, null, `#${id}`);

        // Si la section visible est #projets, activer les animations des cartes
        if (id === 'projets') {
            activateCardsAnimation();
        } else {
            hideCards();
        }
    };

    // Observer pour suivre les sections visibles
    const observerOptions = {
        root: null, // viewport
        threshold: 0.5 // 50% de la section doit être visible pour déclencher l'événement
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                updateURL(id); // Mettre à jour l'URL
                
                // Ajouter une classe "active" au lien correspondant dans la barre de navigation
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });

                
            }
        });
    };

    // Créer l'Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observer chaque section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Gérer les clics sur les liens de la barre de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Extrait l'ID de la section
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            updateURL(targetId); // Mettre à jour l'URL
        });
    });

    // Vérifier si l'URL contient #projets dès le chargement de la page
    if (document.location.hash === '#projets') {
        activateCardsAnimation();
    } else {
        hideCards();
    }
}