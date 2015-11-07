"use strict"

function Scene (id, bg_color) {

	this.id = id;
	this.bg_color = bg_color;
}

Scene.prototype._Init = function () {
	console.log("init de la scene:", this.id);
}

Scene.prototype._Update = function () {
	window.all.ctx.fillStyle = this.bg_color;
	window.all.ctx.fillRect(0, 0, window.all.width, window.all.height);
}

