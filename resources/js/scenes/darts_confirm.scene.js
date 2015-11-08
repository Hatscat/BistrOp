"use strict"

function init_darts_confirm_sc () {


	window.all.scenes[window.all.SCENES.DARTS_CONFIRM.ID] = new Scene(window.all.SCENES.DARTS_CONFIRM.ID, window.all.SCENES.DARTS_CONFIRM.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.DARTS_CONFIRM.ID]; // ref

	sc.box_color = "#68F";
	sc.box_size = 64;
	sc.box_text_size = 22;

	sc.icon_size = 64;
	sc.users_count = 1;
	sc.text_color = "#000";
	sc.border_down_size = 40;
	sc.border_color_yep = "#1C1";
	sc.border_color_nop = "#C11";

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	

		var xs, ys;
		var text;
		var user = window.all.users[0];

		for (var i = 1; i < window.all.users.length; ++i)
		{
			xs = ((i - 1) % 4) * (window.all.width / 4) + window.all.width / 8;
			ys = (((i - 1) / 4) | 0) * (window.all.width / 4 + 10) + window.all.width / 8;

			user = window.all.users[i];
			var img_name = "avatars_" + user.avatar;

			if (user.active)
				window.all.ctx.fillStyle = "#0F0";
			else
				window.all.ctx.fillStyle = "#666";
			window.all.ctx.fillRect(xs - sc.box_size / 2, ys - sc.box_size / 2, sc.box_size, sc.box_size);

			if (window.all.mouse.is_down && window.all.mouse.can_click && is_point_inside_box(window.all.mouse, xs - sc.box_size / 2, ys - sc.box_size / 2, sc.box_size, sc.box_size))
			{
				window.all.mouse.can_click = false;
				user.active = !user.active;
			}
			window.all.ctx.drawImage(window.all.imgs["avatars"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, xs - sc.icon_size / 2, ys - sc.icon_size / 2, sc.icon_size, sc.icon_size);
		}
		text = "Back";

		if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, 0, window.all.height - sc.border_down_size, window.all.width / 2, sc.border_down_size))
		{
			window.all.mouse.can_click = false;
			scenes_transition(window.all.SCENES.FRONT_HOME.ID, window.all.previous_scene);
		}
		window.all.ctx.fillStyle = sc.border_color_nop;
		window.all.ctx.fillRect(0, window.all.height - sc.border_down_size, window.all.width, sc.border_down_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, 0 + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, window.all.height - sc.border_down_size / 2 + 5);


		text = "Confirm";

		if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, window.all.width / 2, window.all.height - sc.border_down_size, window.all.width / 2, sc.border_down_size))
		{
			window.all.mouse.can_click = false;
			scenes_transition(window.all.SCENES.FRONT_HOME.ID, window.all.SCENES.DARTS_GAME.ID);
		}
		window.all.ctx.fillStyle = sc.border_color_yep;
		window.all.ctx.fillRect(window.all.width / 2, window.all.height - sc.border_down_size, window.all.width, sc.border_down_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, window.all.width / 2 + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, window.all.height - sc.border_down_size / 2 + 5);
	}
}



