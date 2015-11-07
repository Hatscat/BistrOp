"use strict"

function init_darts_game_sc () {


	window.all.scenes[window.all.SCENES.DARTS_GAME.ID] = new Scene(window.all.SCENES.DARTS_GAME.ID, window.all.SCENES.DARTS_GAME.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.DARTS_GAME.ID]; // ref

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	

		var img_name = "avatars_0";

		window.all.ctx.drawImage(window.all.imgs["avatars"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, 10, 10, window.all.sprites[img_name].w, window.all.sprites[img_name].h);

	// stuff
	}
}


