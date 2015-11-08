"use strict"

function init_front_confirm_sc () {


	window.all.scenes[window.all.SCENES.FRONT_CONFIRM.ID] = new Scene(window.all.SCENES.FRONT_CONFIRM.ID, window.all.SCENES.FRONT_CONFIRM.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.FRONT_CONFIRM.ID]; // ref

	sc.text_color = "#000";
	sc.text_size = 20;

	sc.box_width = window.all.width * 0.75;
	sc.box_height = 60;
	sc.box_color_average = "#1C1";
	sc.box_color_share = "#e2e529";
	sc.box_color_back = "#C11";

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	

		//var img_name = "banniere_0";
		//window.all.ctx.drawImage(window.all.imgs["banniere"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, 0, 0, window.all.width, window.all.height);

		var text;
		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_size + "px Arial";

		var average =(window.all.users[0].bill_2_pay / (window.all.users.length - 1)).toFixed(2);
		text = "You're " + (window.all.users.length - 1) + " to share the " + window.all.users[0].bill_2_pay + "E.";
		window.all.ctx.fillText(text, 10, 50);

		text = "The average sum is : " + average + "E";
		window.all.ctx.fillText(text, 10, 80);

		text = "Please select a way to share it:";
		window.all.ctx.fillText(text, 10, 130);


		{
			var xs = window.all.width / 2;
			var ys = 230;

			if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, xs - sc.box_width / 2, ys - sc.box_height, sc.box_width, sc.box_height))
			{
				window.all.mouse.can_click = false;
				scenes_transition(window.all.SCENES.FRONT_CONFIRM.ID, window.all.SCENES.AVERAGE.ID);
			}
			
			var img_name = "back_mid_2";
			window.all.ctx.drawImage(window.all.imgs["back_mid"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h,  xs - sc.box_width / 2, ys - sc.box_height, sc.box_width, sc.box_height);
		}
		{
			var xs = window.all.width / 2;
			var ys = 310;

			if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, xs - sc.box_width / 2, ys - sc.box_height, sc.box_width, sc.box_height))
			{
				window.all.mouse.can_click = false;
				scenes_transition(window.all.SCENES.FRONT_CONFIRM.ID, window.all.SCENES.SHARE.ID);
			}

			var img_name = "back_mid_2";
			window.all.ctx.drawImage(window.all.imgs["back_mid"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h,  xs - sc.box_width / 2, ys - sc.box_height, sc.box_width, sc.box_height);

		}
		{
			var text = "back";
			var xs = window.all.width / 2;
			var ys = 390;

			if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, xs - sc.box_width / 2, ys - sc.box_height, sc.box_width, sc.box_height))
			{
				window.all.mouse.can_click = false;
				scenes_transition(window.all.SCENES.FRONT_CONFIRM.ID, window.all.SCENES.FRONT_HOME.ID);
			}

			var img_name = "back_mid_2";
			window.all.ctx.drawImage(window.all.imgs["back_mid"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, xs - sc.box_width / 2, ys - sc.box_height, sc.box_width, sc.box_height);

		}
	}
}


