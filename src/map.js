

export function initMap() {
    
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