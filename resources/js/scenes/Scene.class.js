"use strict"

function Scene (id, bg_color) {

	this.id = id;
	this.bg_color = bg_color;
}

Scene.prototype._Init = function () {

	console.log("init de la scene:", this.id);
}

Scene.prototype._Update = function () {

	//console.log("update de la scene:", this.id);
}

