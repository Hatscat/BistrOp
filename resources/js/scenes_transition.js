"use strict"

function scenes_transition (scene_A_id, scene_B_id, smooth) {
	
	window.all.active_sc = scene_B_id;
	
	window.all.scene_A = window.all.scenes[scene_A_id];
	window.all.scene_B = window.all.scenes[scene_B_id];

	if (window.all.scene_B.reset) {
		window.all.scene_B.reset();
	}
/*
	if (!smooth) {
		sc_transition_end(scene_B_id);
		return;
	}

	window.all.scene_A = window.all.scenes[scene_A_id];
	window.all.scene_B = window.all.scenes[scene_B_id];

	// step 1: disable inputs
	window.all.can_input = false;
	// init transition
	window.all.smooth_sc_transition = true;
	window.all.sc_transition_step = 1;
	// step 2: set scene_A items out
	window.all.out_scene_id = scene_A_id;
	window.all.sc_trans_timer = 0;
	// step 3: change bg color 
	// step 4: set scene_b items in
	// step 5: change active scene to scene_B
	// step 6: re-active inputs
*/
}
/*
function sc_transition_end () {

	window.all.active_sc = window.all.scene_B.id;
	window.all.can_input = true;
	window.all.smooth_transition = false;

	if (window.all.scene_B.reset) {
		window.all.scene_B.reset();
	}
}

function update_scene_transition () {
	
	switch (window.all.sc_trans_step) {
		case 1:
			var k = Math.min(1, 1 window.all.sc_trans_timer / window.all.out_timer_max);

			window.all.sc_trans_timer += window.all.delta_time;

			if (k == 1) {
				++window.all.sc_trans_step;
				window.all.sc_trans_timer = 0;
			}

			update_out(k);
		break;
		case 2:
			var k = Math.min(1, 1 window.all.sc_trans_timer / window.all.ch_bg_timer_max);

			window.all.sc_trans_timer += window.all.delta_time;

			if (k == 1) {
				++window.all.sc_trans_step;
				window.all.sc_trans_timer = 0;
			}

			update_bg(k);
		break;
		case 3:
			var k = Math.min(1, 1 window.all.sc_trans_timer / window.all.in_timer_max);

			window.all.sc_trans_timer += window.all.delta_time;

			if (k == 1) {
				++window.all.sc_trans_step;
				window.all.sc_trans_timer = 0;
			}

			update_in(k);
		break;
		case 4:
			
		break;
	}
}

function update_out (k) {
	
	var sc =  window.all.scene_A;
	
	for (var i = sc.item_list.length; i--;) {

		sc.item_list[i].x = lerp(sc.in_item_xy[i].x, sc.out_item_xy[i].x, k); 
		sc.item_list[i].y = lerp(sc.in_item_xy[i].y, sc.out_item_xy[i].y, k); 
	}
}

function update_bg (k) {
	
	window.all.ctx.fillStyle = window.all.scene_B.bg_color;
	window.all.ctx.fillRect(0, 0, window.all.width, window.all.height);
	
	var dir = sign(window.all.scene_A.id - window.all.scene_B.id);
	
	window.all.ctx.fillStyle = window.all.scene_A.bg_color;
	window.all.ctx.fillRect(lerp(0, window.all.width * dir, k), 0, window.all.width, window.all.height);
}

function update_in (k) {

	var sc =  window.all.scene_B;

	for (var i = sc.item_list.length; i--;) {

		sc.item_list[i].x = lerp(sc.out_item_xy[i].x, sc.in_item_xy[i].x, k); 
		sc.item_list[i].y = lerp(sc.out_item_xy[i].y, sc.in_item_xy[i].y, k); 
	}
}
*/
