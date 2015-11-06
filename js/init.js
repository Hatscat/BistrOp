"use strict"
window.onload = init;

function init () {

	var config = get_config();

	config.canvas = document.getElementById("render_canvas");
	config.canvas.width = config.width;
	config.canvas.height = config.height;
	config.ctx = config.canvas.getContext("2d");
	
}

