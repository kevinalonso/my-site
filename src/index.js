require("../assets/stylesheets/styles.scss");


import { initMap } from './map.js';
import { NavigationSection } from './navigation.js';
import {zoomImg} from './image.js';


document.addEventListener("DOMContentLoaded", function() {
    initMap();
    NavigationSection();
    zoomImg(".img-container img");
});
