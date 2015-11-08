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
	
	// Start service
	window.all.t_service = tetra.service({
		service: 'local.transaction.engine', namespace: 'ingenico.transaction'
	}).reset().connect();

	// TODO: window.all.t_service.disconnect();

	// load bill && imgs
	load_data(on_assets_loaded);
	//on_assets_loaded();


}

function on_assets_loaded () {

	window.all.bill_data = window.fake_data; // tmp

	// split images in sprites
	for (var i = window.all.imgs_2_load.length; i--;) {

		var cols_nb = window.all.imgs_2_load[i].cols_nb;
		var sprites_nb = cols_nb * window.all.imgs_2_load[i].rows_nb;
		var w = window.all.imgs[window.all.imgs_2_load[i].name].width / cols_nb;
		var h = window.all.imgs[window.all.imgs_2_load[i].name].height / window.all.imgs_2_load[i].rows_nb;
		
		for (var ii = sprites_nb; ii--;) {

			window.all.sprites[window.all.imgs_2_load[i].name + "_" + ii] = {
				x: (ii % cols_nb) * w,
				y: (ii / cols_nb | 0) * h,
				w: w,
				h: h
			}
		}
	}

	//init scenes:
	init_transition_sc();
	init_back_home_sc();
	init_back_confirm_sc();
	init_front_home_sc();
	init_front_confirm_sc();
	init_share_sc();
	init_games_sc();
	init_darts_confirm_sc();
	init_darts_game_sc();
	init_final_confirm_sc();
	init_init_transaction_sc();
	init_split_sc();
	init_average_sc();
	
	window.all.active_sc = window.all.SCENES.BACK_HOME.ID;
	
	window.all.scenes[window.all.active_sc].init();

	init_events();

	window.requestAnimationFrame(run_loop);
}

