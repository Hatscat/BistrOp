"use strict"

function init_events () {

	window.addEventListener("mousedown", on_mouse_down, false);
	window.addEventListener("mouseup", on_mouse_up, false);
}

function on_mouse_down (event) {

	window.all.mouse.x = event.clientX;
	window.all.mouse.y = event.clientY;
	window.all.mouse.is_down = true;
	window.all.mouse.can_click = true;
}

function on_mouse_up (event) {
	window.all.mouse.x = event.clientX;
	window.all.mouse.y = event.clientY;
	window.all.mouse.is_down = false;
	window.all.mouse.can_click = false;
}
