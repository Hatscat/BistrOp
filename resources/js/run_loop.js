"use strict"

function run_loop (time) {
	
	// deltatime
	var elapsed_time = time - window.all.old_time;
	window.all.old_time = time;
	window.all.delta_time = elapsed_time * 0.03; // 30 fps

	
	// update
	window.all.scenes[window.all.active_sc].update();
	
	// draw buffer
	window.all.final_ctx.drawImage(window.all.buffer_canvas, 0, 0);
	
	window.requestAnimationFrame(run_loop);
}

