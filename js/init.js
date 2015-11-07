"use strict"
window.onload = init;

function init () {

	window.all = get_config(); // global !!!

	// set buffer
	
	window.all.canvas = document.getElementById("render_canvas");
	window.all.canvas.width = window.all.width;
	window.all.canvas.height = window.all.height;
	window.all.ctx = window.all.canvas.getContext("2d");
	
	// load imgs
	
	on_assets_loaded();
}

function on_assets_loaded () {

	//init scenes:
	init_transition_sc();
	init_share_sc();
	
	window.all.active_sc = "share";
	
	window.all.scenes[window.all.active_sc].init();

	init_events();

	window.requestAnimationFrame(run_loop);
}

