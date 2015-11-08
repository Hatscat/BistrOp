"use strict"

function init_back_confirm_sc () {


	window.all.scenes[window.all.SCENES.BACK_CONFIRM.ID] = new Scene(window.all.SCENES.BACK_CONFIRM.ID, window.all.SCENES.BACK_CONFIRM.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.BACK_CONFIRM.ID]; // ref
	sc.text_color = "#000";
	sc.text_size = 20;
	sc.border_down_size = 40;
	sc.border_color_yep = "#1C1";
	sc.border_color_nop = "#C11";

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

		text = "Bill table 42";
		window.all.ctx.fillText(text, 50, 50);


		window.all.users[0].bill_2_pay = sum_inv_price(window.all.users[0].items);
		text = "Sum: " + window.all.users[0].bill_2_pay;

		text = "Sum: " + sum_inv_price(window.all.users[0].items);
		window.all.ctx.fillText(text, 50, 80);

		text = "List: ";
		window.all.ctx.fillText(text, 50, 110);

		var drawed = 1;
		for (var i = 0; i < window.all.users[0].items.length && 110 + drawed * (sc.text_size + 1) < window.all.height - sc.border_down_size; ++i)
		{
			text = window.all.users[0].items[i].amount + " x " + window.all.users[0].items[i].name;
			window.all.ctx.fillText(text, 70, 110 + drawed * (sc.text_size + 1));
			++drawed;
		}



		var text = "Back";

		if (window.all.mouse.can_click && window.all.mouse.is_down && is_point_inside_box(window.all.mouse, 0, window.all.height - sc.border_down_size, window.all.width / 2, sc.border_down_size))
		{
			window.all.mouse.can_click = false;
			scenes_transition(window.all.SCENES.BACK_CONFIRM.ID, window.all.SCENES.BACK_HOME.ID);
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
			scenes_transition(window.all.SCENES.BACK_CONFIRM.ID, window.all.SCENES.FRONT_HOME.ID);
		}
		window.all.ctx.fillStyle = sc.border_color_yep;
		window.all.ctx.fillRect(window.all.width / 2, window.all.height - sc.border_down_size, window.all.width, sc.border_down_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, window.all.width / 2 + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, window.all.height - sc.border_down_size / 2 + 5);
	}
}


