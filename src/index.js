require("../assets/stylesheets/styles.scss");
import { initMap } from './map.js';
import { NavigationSection } from './navigation.js'

document.addEventListener("DOMContentLoaded", function() {
    initMap();
    NavigationSection();
});
