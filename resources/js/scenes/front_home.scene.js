"use strict"

function init_front_home_sc () {


	window.all.scenes[window.all.SCENES.FRONT_HOME.ID] = new Scene(window.all.SCENES.FRONT_HOME.ID, window.all.SCENES.FRONT_HOME.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.FRONT_HOME.ID]; // ref

	sc.box_color = "#68F";
	sc.box_size = 64;
	sc.box_text_size = 22;
	sc.users_count = 1;
	sc.text_color = "#000";
	sc.border_down_size = 40;
	sc.border_color_yep = "#1C1";
	sc.border_color_nop = "#C11";

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}

	sc.reset = function () {
		sc.users_count = 1;
	}
	
	sc.update = function () {
		
		sc._Update(); // init de la classe mere	
		var xs, ys;
		var text;
		xs = window.all.width / 2 - sc.box_size / 2;
		ys = window.all.height / 2 - sc.box_size / 2;

		//var img_name = "banniere_0";
		//window.all.ctx.drawImage(window.all.imgs["banniere"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, 0, 0, window.all.width, window.all.height);

		var text;
		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_size + "px Arial";

		text = "Select numbers of payer: ";
		window.all.ctx.fillText(text, window.all.width / 2 - window.all.ctx.measureText(text).width / 2, ys - 15);

		{

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs, ys, sc.box_size, sc.box_size);

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs - sc.box_size / 2 - 1, ys, sc.box_size / 2, sc.box_size);

			window.all.ctx.fillStyle = sc.box_color;
			window.all.ctx.fillRect(xs + sc.box_size + 1, ys, sc.box_size / 2, sc.box_size);

			text = sc.users_count + "";
			window.all.ctx.fillStyle = sc.text_color;
			window.all.ctx.font = "bold " + sc.box_text_size + "px Arial";
			window.all.ctx.fillText(text, xs + sc.box_size / 2 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);
			text = "-";
			window.all.ctx.fillText(text, xs - sc.box_size / 4 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);
			text = "+";
			window.all.ctx.fillText(text, xs + sc.box_size + sc.box_size / 4 - window.all.ctx.measureText(text).width / 2, ys + sc.box_size / 2 + window.all.ctx.measureText(text).width / 2);


			if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, xs - sc.box_size / 2 - 1, ys, sc.box_size / 2, sc.box_size)
				&& sc.users_count > 1)
			{
				window.all.mouse.can_click = false;
				--sc.users_count;
			}
			if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, xs + sc.box_size + 1, ys, sc.box_size / 2, sc.box_size))
			{
				window.all.mouse.can_click = false;
				++sc.users_count;
			}
		}
		text = "Back";

		if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, 0, window.all.height - sc.border_down_size, window.all.width / 2, sc.border_down_size))
		{
			window.all.mouse.can_click = false;
			scenes_transition(window.all.SCENES.FRONT_HOME.ID, window.all.SCENES.BACK_CONFIRM.ID);
		}
		window.all.ctx.fillStyle = sc.border_color_nop;
		window.all.ctx.fillRect(0, window.all.height - sc.border_down_size, window.all.width, sc.border_down_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, 0 + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, window.all.height - sc.border_down_size / 2 + 5);


		text = "Confirm";

		if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, window.all.width / 2, window.all.height - sc.border_down_size, window.all.width / 2, sc.border_down_size))
		{
			while (sc.users_count--)
			{
				window.all.users.push({ avatar: (Math.random() * (19 * 5 - 1) | 0) + 1, bill_2_pay: 0, active: true, items: [], can_click: true});
			}
			window.all.mouse.can_click = false;
			scenes_transition(window.all.SCENES.FRONT_HOME.ID, window.all.SCENES.FRONT_CONFIRM.ID);
		}
		window.all.ctx.fillStyle = sc.border_color_yep;
		window.all.ctx.fillRect(window.all.width / 2, window.all.height - sc.border_down_size, window.all.width, sc.border_down_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, window.all.width / 2 + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, window.all.height - sc.border_down_size / 2 + 5);
	// stuff
}
}


