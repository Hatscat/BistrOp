"use strict"

function init_games_sc () {


	window.all.scenes[window.all.SCENES.GAMES.ID] = new Scene(window.all.SCENES.GAMES.ID, window.all.SCENES.GAMES.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.GAMES.ID]; // ref

	sc.text_color = "#000";
	sc.text_size = 40;
	sc.box_size = 60;
	sc.border_color = "#777";

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	
		var xs, ys;
		var text;

		xs = 0;
		ys = sc.box_size;


		text = "Games";

		window.all.ctx.fillStyle = sc.border_color;
		window.all.ctx.fillRect(0, ys - sc.box_size, window.all.width, sc.box_size);

		//	window.all.ctx.drawImage(window.all.imgs[game.icon], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, 0, ys - sc.box_size, sc.box_size, sc.box_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_size + "px Arial";
		window.all.ctx.fillText(text, window.all.width / 2 - window.all.ctx.measureText(text).width / 2 / 2, ys - sc.box_size / 2 + 15);



		for (var i = 0; i < window.all.games.length; ++i)
		{
			var game = window.all.games[i];
			var img_name = game.icon + "_0";
			text = game.name;

			ys += sc.box_size + 10;
			if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, 0, ys - sc.box_size, window.all.width, sc.box_size))
			{
				window.all.mouse.can_click = false;
				scenes_transition(window.all.SCENES.GAMES.ID, window.all.SCENES.DARTS_CONFIRM.ID);
			}
			window.all.ctx.fillStyle = game.bg_color;
			window.all.ctx.fillRect(0, ys - sc.box_size, window.all.width, sc.box_size);

			window.all.ctx.drawImage(window.all.imgs[game.icon], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, 0, ys - sc.box_size, sc.box_size, sc.box_size);

			window.all.ctx.fillStyle = sc.text_color;
			window.all.ctx.font = "bold " + sc.text_size + "px Arial";
			window.all.ctx.fillText(text, window.all.width / 2 - window.all.ctx.measureText(text).width / 2 + sc.box_size / 2, ys - sc.box_size / 2 + 15);

		}

		ys += sc.box_size + 10;
		text = "BACK";
		
		window.all.ctx.fillStyle = "#D11";
		window.all.ctx.fillRect(0, ys - sc.box_size, window.all.width, sc.box_size);

		if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, 0, ys - sc.box_size, window.all.width, sc.box_size))
		{
			window.all.mouse.can_click = false;
			scenes_transition(window.all.SCENES.GAMES.ID, window.all.SCENES.SHARE.ID);
		}
		//	window.all.ctx.drawImage(window.all.imgs[game.icon], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, 0, ys - sc.box_size, sc.box_size, sc.box_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_size + "px Arial";
		window.all.ctx.fillText(text, window.all.width / 2 - window.all.ctx.measureText(text).width / 2 / 2, ys - sc.box_size / 2 + 15);
	// stuff
}
}


