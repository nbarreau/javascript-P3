
"use strict";
document.addEventListener("DOMContentLoaded", function(e) {
	let sliderInit = new Slider("#diapo-container", 5000, 1000, 1000);
	let mapInit = new Map("#map_container","map", 45.763119, 4.838298, 16, "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=10a787cac13cc464d6431b8c8ca1c2b1b5f8cb7e");
	let resaInit= new Resa("#form-container", 20 * 60 * 1000, new Canvas("#canvas-div", "#canvas-sign"));
	let canvasInit = new Canvas("#canvas-div", "#canvas-sign");
});