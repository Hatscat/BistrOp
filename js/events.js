"use strict"

function init_events () {

	Window.requestAnimationFrame(loop);
}

function loop () {
	update();
	draw();
}

