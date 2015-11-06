"use strict"
window.onload = init;

function init () {

	window.conf = get_config(); // global !!!

	window.conf.canvas = document.getElementById("render_canvas");
	window.conf.canvas.width = window.conf.width;
	window.conf.canvas.height = window.conf.height;
	window.conf.ctx = window.conf.canvas.getContext("2d");
	
}

