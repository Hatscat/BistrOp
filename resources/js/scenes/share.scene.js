"use strict"


function init_share_sc () {


	window.all.scenes.share = new Scene(window.all.SCENES.SHARE.ID, window.all.SCENES.SHARE.BG_COLOR);

	var sc = window.all.scenes.share; // ref

	sc.foo = "bar"; // prop

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	
		window.all.ctx.fillStyle = "#F00";
		window.all.ctx.fillRect(10,10,10,10);

}
	sc.update = function () {
		
		sc._Update(); // init de la classe mere	

		// stuff
	}
}


