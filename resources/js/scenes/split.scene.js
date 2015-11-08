"use strict"

function init_split_sc () {


	window.all.scenes[window.all.SCENES.SPLIT.ID] = new Scene(window.all.SCENES.SPLIT.ID, window.all.SCENES.SPLIT.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.SPLIT.ID]; // ref

	sc.popup_color = "#AAA";
	sc.popup_border = 20;


	sc.box_color = "#68F";
	sc.box_size = 64;

	sc.confirm_color = "#0F0";
	sc.cancel_color = "#F00";
	sc.text_color = "#000";

	sc.border_down_size =  40;
	sc.border_down_ys = window.all.height - sc.border_down_size;

	sc.text_mid_size = 30;
	sc.back = undefined;
	sc.back_ctx = undefined;
	sc.new_item = undefined;
	sc.item_selected = undefined;

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}
/*
	sc.reset = function () {
		sc.back = document.createElement("canvas"); // never append
		sc.back.width = window.all.width;
		sc.back.height = window.all.height;
		sc.back_ctx = sc.back.getContext("2d");
		sc.back_ctx.drawImage(window.all.buffer_canvas, 0, 0);


		item_selected = window.all.users[window.all.selected_user].items[window.all.selected_item];
		sc.new_item = clone(item_selected);
	}
	*/
	sc.update = function () {

		sc._Update(); // init de la classe mere	

		var xs, ys;
		var text;
		xs = sc.popup_border;
		ys = sc.popup_border;
		if (sc.new_item == undefined)
		{
			sc.item_selected = window.all.users[window.all.selected_user].items[window.all.selected_item];
			sc.new_item = clone(sc.item_selected);
		}
		/**** BACK ****/
		// // // window.all.ctx.drawImage(sc.back, 0, 0);

		window.all.ctx.fillStyle = sc.popup_color;
		window.all.ctx.fillRect(xs, ys, window.all.width - sc.popup_border - xs, window.all.height - sc.popup_border - ys - sc.border_down_size);
		/**** SPLIT ****/

		window.all.ctx.fillStyle = sc.box_color;

		window.all.ctx.fillRect(xs, ys, sc.box_size, sc.box_size);


		/**** CONFIRM ****/
		text = "Confirm";
		var cx = window.all.width /2;
		var cy = sc.border_down_ys;

		window.all.ctx.fillStyle = sc.confirm_color;
		if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, cx, cy, window.all.width / 2, sc.border_down_size))
		{
			window.all.mouse.can_click = false;
			scenes_transition(window.all.SCENES.SHARE.ID, window.all.SCENES.SHARE.ID);
		}
		window.all.ctx.fillRect(cx, cy, window.all.width /2, sc.border_down_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, cx + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, cy + sc.border_down_size / 2 + sc.text_mid_size / 2 - 5);

		/**** CANCEL ****/
		text = "Cancel";
		cx = 0;
		cy = sc.border_down_ys;

		window.all.ctx.fillStyle = sc.cancel_color;
		if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, cx, cy, window.all.width / 2, sc.border_down_size))
		{
			window.all.mouse.can_click = false;
			scenes_transition(window.all.SCENES.SHARE.ID, window.all.SCENES.SHARE.ID);
		}
		window.all.ctx.fillRect(cx, cy, window.all.width /2, sc.border_down_size);
		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, cx + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, cy + sc.border_down_size / 2 + sc.text_mid_size / 2 - 5);

	// stuff
}
}
