"use strict"

function init_accueil_sc() {


	window.all.scenes[window.all.SCENES.ACCUEIL.ID] = new Scene(window.all.SCENES.ACCUEIL.ID, window.all.SCENES.ACCUEIL.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.ACCUEIL.ID]; // ref

	sc.init = function () {
		
		sc._Init(); // init de la classe mere
		// stuff
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	

		var img_name = "logo_0";
		window.all.ctx.drawImage(window.all.imgs["logo"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, 0, window.all.height / 2 - window.all.width / 2., window.all.width, window.all.width);

		if (window.all.mouse.can_click && window.all.mouse.is_down)
		{
			window.all.mouse.can_click = false;
			fack();
			scenes_transition(window.all.SCENES.ACCUEIL.ID, window.all.SCENES.BACK_HOME.ID);
		}
	}
}

