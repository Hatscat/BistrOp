"use strict"
window.onload = init;

function init () {

	window.all = get_config(); // global !!!

	// set final buffer
	window.all.final_canvas = document.getElementById("render_canvas");
	window.all.final_canvas.width = window.all.width;
	window.all.final_canvas.height = window.all.height;
	window.all.final_ctx = window.all.final_canvas.getContext("2d");
	// set buffer
	window.all.buffer_canvas = document.createElement("canvas"); // never append
	window.all.buffer_canvas.width = window.all.width;
	window.all.buffer_canvas.height = window.all.height;
	window.all.ctx = window.all.buffer_canvas.getContext("2d");
	
	// load bill && imgs
	//load_data(on_assets_loaded);
	on_assets_loaded();

	// Start service
	window.all.t_service = tetra.service({
		service: 'local.transaction.engine', namespace: 'ingenico.transaction' 
	}).reset(
	).connect();

	// TODO: window.all.t_service.disconnect();
}

function on_assets_loaded () {

	for (var i = window.all.imgs.length; i--;) {

		//window.all.img_2_load[i].name
		// boucler sur les cols et les rows
		//window.all.sprites[] = {
			
		//}
	}

	//init scenes:
	init_transition_sc();
	init_share_sc();
	
	window.all.active_sc = "share";
	
	window.all.scenes[window.all.active_sc].init();

	init_events();

	window.requestAnimationFrame(run_loop);
}

