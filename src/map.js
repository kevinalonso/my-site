

export function initMap() {
    
    var map = L.map('map').setView([48.013438, -0.816955], 13); // Coordonnées de Paris

    // Ajouter le fond de carte OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Ajouter un marqueur
    var marker = L.marker([48.013438, -0.816955]).addTo(map)
        .bindPopup("<b>Je suis ici !</b><br>Bienvenue sur ma carte.")
        .openPopup(); // Affiche la popup au chargement

        setTimeout(() => {
            map.invalidateSize();
        }, 500);
    
}