"use strict"

function init_init_transaction_sc () {


	window.all.scenes[window.all.SCENES.INIT_TRANSACTION.ID] = new Scene(window.all.SCENES.INIT_TRANSACTION.ID, window.all.SCENES.INIT_TRANSACTION.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.INIT_TRANSACTION.ID]; // ref

	sc.text_color = "#000";
	sc.text_size = 20;

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}

	sc.reset = function () {
		sc.i = 1;
		window.all.user_to_credit = 1
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	
		var user = window.all.users[window.all.user_to_credit];
		var text;

		if (user)
		{
			var img_name = "avatars_" + user.avatar;

			window.all.ctx.drawImage(window.all.imgs["avatars"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h
				, window.all.width / 2 - window.all.sprites[img_name].w / 2, window.all.height / 2, window.all.sprites[img_name].w, window.all.sprites[img_name].h);

			text = "Bill: " + user.bill_2_pay + "E";
			window.all.ctx.fillStyle = sc.text_color;
			window.all.ctx.font = "bold " + sc.text_size + "px Arial";
			window.all.ctx.fillText(text, window.all.width / 2 - window.all.ctx.measureText(text).width / 2, window.all.height / 2 + window.all.sprites[img_name].h + sc.text_size + 5);
		}
		if (sc.i == window.all.users.length)
		{
			scenes_transition(window.all.SCENES.INIT_TRANSACTION.ID, window.all.SCENES.BACK_HOME.ID);
			console.log("ENDD !!!!");
		}
		else if (sc.i == window.all.user_to_credit)
		{
			if (window.all.mouse.can_click)
			{
				window.all.mouse.can_click = false;
				init_transaction(user.bill_2_pay);
				++sc.i;
			}
		}
	}
}


