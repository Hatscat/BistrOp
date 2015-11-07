"use strict"

function init_transition_sc () {


	window.all.scenes.transition = new Scene(window.all.SCENES.TRANSITION.ID, window.all.SCENES.TRANSITION.BG_COLOR);

	var sc = window.all.scenes.transition; // ref

	sc.foo = "bar"; // prop

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	

		// stuff
	}
}


