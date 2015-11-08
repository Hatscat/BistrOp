"use strict"

function init_average_sc () {


	window.all.scenes[window.all.SCENES.AVERAGE.ID] = new Scene(window.all.SCENES.AVERAGE.ID, window.all.SCENES.AVERAGE.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.AVERAGE.ID]; // ref

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		// stuff
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	
		var average = window.all.users[0].bill_2_pay / (window.all.users.length - 1);
		for (var i = 1; i < window.all.users.length; ++i)
		{
			window.all.users[i].bill_2_pay = average;
		}
			scenes_transition(window.all.SCENES.AVERAGE.ID, window.all.SCENES.INIT_TRANSACTION.ID);
	}
}