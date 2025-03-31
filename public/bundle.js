/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/stylesheets/styles.scss":
/*!****************************************!*\
  !*** ./assets/stylesheets/styles.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/image.js":
/*!**********************!*\
  !*** ./src/image.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zoomImg: () => (/* binding */ zoomImg)
/* harmony export */ });
function zoomImg(elemntImg) {

    const img = document.querySelector(elemntImg);

    img.addEventListener("click", function () {
        if (!document.getElementById("zoomOverlay")) {
            const overlay = document.createElement("div");
            overlay.id = "zoomOverlay";
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.background = "rgba(0, 0, 0, 0.8)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "1000";
            overlay.style.cursor = "zoom-out";

            const imgClone = img.cloneNode();
            imgClone.style.maxWidth = "90%";
            imgClone.style.maxHeight = "90%";
            imgClone.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.8)";
            
            overlay.appendChild(imgClone);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {
                document.body.removeChild(overlay);
            });
        }
    });

}

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMap: () => (/* binding */ initMap)
/* harmony export */ });


function initMap() {
    
    var map = L.map('map').setView([48.007438857169625, -0.8166790008544923], 13); // Coordonnées de Paris

    // Ajouter le fond de carte OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Ajouter un marqueur
    var marker = L.marker([48.013438, -0.816955]).addTo(map)
        .bindPopup("Je suis ici !")
        .openPopup(); // Affiche la popup au chargement

        setTimeout(() => {
            map.invalidateSize();
        }, 500);
    
}

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationSection: () => (/* binding */ NavigationSection)
/* harmony export */ });
function NavigationSection() {
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Fonction pour activer l'animation des cartes
    const activateCardsAnimation = () => {
        cards.forEach((card, index) => {

            let delay = index * 400;
            // Ajout de la classe 'visible' pour activer l'animation
            setTimeout(() => {
                card.classList.add('visible-translation');
            }, delay);
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.js */ "./src/navigation.js");
/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.js */ "./src/image.js");
__webpack_require__(/*! ../assets/stylesheets/styles.scss */ "./assets/stylesheets/styles.scss");







document.addEventListener("DOMContentLoaded", function() {
    (0,_map_js__WEBPACK_IMPORTED_MODULE_0__.initMap)();
    (0,_navigation_js__WEBPACK_IMPORTED_MODULE_1__.NavigationSection)();
    (0,_image_js__WEBPACK_IMPORTED_MODULE_2__.zoomImg)(".img-container img");
});

})();

/******/ })()
;