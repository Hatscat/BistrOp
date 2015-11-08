"use strict"

function init_split_sc () {


	window.all.scenes[window.all.SCENES.SPLIT.ID] = new Scene(window.all.SCENES.SPLIT.ID, window.all.SCENES.SPLIT.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.SPLIT.ID]; // ref

	sc.popup_color = "#AAA";
	sc.popup_border = 20;


	sc.box_color = "#68F";
	sc.box_size = 64;
	sc.box_text_size = 32;

	sc.confirm_color = "#0F0";
	sc.cancel_color = "#F00";
	sc.text_color = "#000";

	sc.border_down_size =  40;
	sc.border_down_ys = window.all.height - sc.border_down_size;

	sc.text_mid_size = 30;
	sc.back = undefined;
	sc.back_ctx = undefined;
	sc.new_item = undefined;
	sc.copy_item = undefined;
	sc.item_selected = undefined;

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}
0/*
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
			sc.copy_item = clone(sc.item_selected);
		}
		/**** BACK ****/
		// // // window.all.ctx.drawImage(sc.back, 0, 0);

		window.all.ctx.fillStyle = sc.popup_color;
		window.all.ctx.fillRect(xs, ys, window.all.width - sc.popup_border - xs, window.all.height - sc.popup_border - ys - sc.border_down_size);

		/**** SPLIT ****/
		xs = window.all.width / 2 - sc.box_size / 2;
		ys += 10;
		//window.all.ctx.fillText(text, xs + sc.box_size + sc.box_size / 2 + 5, ys + sc.box_size + window.all.ctx.measureText(text).width / 2);

		var img_name = "items_" + (sc.item_selected.col + sc.item_selected.row * 8);

		window.all.ctx.drawImage(window.all.imgs["items"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, xs, ys, window.all.sprites[img_name].w, window.all.sprites[img_name].h);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + (sc.box_text_size / 2) + "px Arial";
		text = sc.new_item.name;
		window.all.ctx.fillText(text, xs + window.all.sprites[img_name].w + 10, ys + 20);
		text = sc.new_item.unit_price + "E";
		window.all.ctx.fillText(text, xs + window.all.sprites[img_name].w + 10, ys + window.all.sprites[img_name].h / 2 + 10);

		{
			ys += 110;

			window.all.ctx.fillStyle = sc.text_color;
			window.all.ctx.font = "bold " + (sc.box_text_size / 2) + "px Arial";
			text = "Nombres de " + sc.new_item.name + ":";
			window.all.ctx.fillText(text, xs - window.all.ctx.measureText(text).width / 2 + sc.box_size / 2, ys - 15);

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs, ys, sc.box_size, sc.box_size);

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs - sc.box_size / 2 - 1, ys, sc.box_size / 2, sc.box_size);

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs + sc.box_size + 1, ys, sc.box_size / 2, sc.box_size);

			text = sc.copy_item.amount + "";
			window.all.ctx.fillStyle = sc.text_color;
			window.all.ctx.font = "bold " + sc.box_text_size + "px Arial";
			window.all.ctx.fillText(text, xs + sc.box_size / 2 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);
			text = "-";
			window.all.ctx.fillText(text, xs - sc.box_size / 4 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);
			text = "+";
			window.all.ctx.fillText(text, xs + sc.box_size + sc.box_size / 4 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);


			if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, xs - sc.box_size / 2 - 1, ys, sc.box_size / 2, sc.box_size)
				&& sc.copy_item.amount > 1)
			{
				window.all.mouse.can_click = false;
				--sc.copy_item.amount;
			}
			if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, xs + sc.box_size + 1, ys, sc.box_size / 2, sc.box_size)
				&& sc.copy_item.amount < sc.item_selected.amount)
			{
				window.all.mouse.can_click = false;
				++sc.copy_item.amount;
			}
		}
		sc.new_item.unit_price = (sc.copy_item.unit_price * sc.copy_item.amount / sc.new_item.amount).toFixed(2);

		{
			ys += sc.box_size + 50;


			window.all.ctx.fillStyle = sc.text_color;
			window.all.ctx.font = "bold " + (sc.box_text_size / 2) + "px Arial";
			text = "Nombres de payeur: ";
			window.all.ctx.fillText(text, xs - window.all.ctx.measureText(text).width / 2 + sc.box_size / 2, ys - 15);

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs, ys, sc.box_size, sc.box_size);

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs - sc.box_size / 2 - 1, ys, sc.box_size / 2, sc.box_size);

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs + sc.box_size + 1, ys, sc.box_size / 2, sc.box_size);

			text = sc.new_item.amount + "";
			window.all.ctx.fillStyle = sc.text_color;
			window.all.ctx.font = "bold " + sc.box_text_size + "px Arial";
			window.all.ctx.fillText(text, xs + sc.box_size / 2 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);
			text = "-";
			window.all.ctx.fillText(text, xs - sc.box_size / 4 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);
			text = "+";
			window.all.ctx.fillText(text, xs + sc.box_size + sc.box_size / 4 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);


			if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, xs - sc.box_size / 2 - 1, ys, sc.box_size / 2, sc.box_size)
				&& sc.new_item.amount > 1)
			{
				window.all.mouse.can_click = false;
				--sc.new_item.amount;
			}
			if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, xs + sc.box_size + 1, ys, sc.box_size / 2, sc.box_size))
			{
				window.all.mouse.can_click = false;
				++sc.new_item.amount;
			}
		}

		xs = sc.popup_border;
		ys += sc.box_size + 50;
		
		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + (sc.box_text_size / 2) + "px Arial";
		text = "Description: " + sc.new_item.description;
		window.all.ctx.fillText(text, xs, ys);

		/**** CONFIRM ****/
		text = "Confirm";
		var cx = window.all.width /2;
		var cy = sc.border_down_ys;

		window.all.ctx.fillStyle = sc.confirm_color;
		if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, cx, cy, window.all.width / 2, sc.border_down_size))
		{
			window.all.mouse.can_click = false;

			window.all.users[window.all.selected_user].items[window.all.selected_item].amount -= sc.item_selected.amount;
			window.all.users[window.all.selected_user].items[window.all.users[window.all.selected_user].items.length] = sc.new_item;

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
