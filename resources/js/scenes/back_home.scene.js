"use strict"

function fack()
{
	window.all.users = [{ avatar: 0, bill_2_pay: 0, active: true, items: [], can_click: true}];

	window.all.users[0].items = window.fake_data.Tb42;
}

function init_back_home_sc () {


	window.all.scenes[window.all.SCENES.BACK_HOME.ID] = new Scene(window.all.SCENES.BACK_HOME.ID, window.all.SCENES.BACK_HOME.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.BACK_HOME.ID]; // ref

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	
		console.log(window.all.imgs["banniere"]);
		console.log(window.all.sprites["banniere_0"]);
		// stuff
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	

		var img_name = "banniere_0";
		window.all.ctx.drawImage(window.all.imgs["banniere"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, 0, 0, window.all.width, window.all.height);

		if (window.all.mouse.can_click && window.all.mouse.is_down)
		{
			window.all.mouse.can_click = false;
			fack();
			scenes_transition(window.all.SCENES.BACK_HOME.ID, window.all.SCENES.BACK_CONFIRM.ID);
		}
	}
}


