"use strict"

function init_events () {

	window.addEventListener("mousedown", on_mouse_down, false);
	window.addEventListener("mouseup", on_mouse_up, false);
}

function on_mouse_down (event) {

}

function on_mouse_up (event) {
	init_transaction(42.42);
}

