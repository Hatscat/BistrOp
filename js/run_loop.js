"use strict"

function run_loop (t) {
	

	// deltatime
	
	window.all.scenes[window.all.active_sc].update();
	
	// draw buffer
	
	window.requestAnimationFrame(run_loop);
}

