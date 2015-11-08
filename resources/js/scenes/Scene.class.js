"use strict"

function Scene (id, bg_color) {

	this.id = id;
	this.bg_color = bg_color;
	this.item_list = [];
	this.in_item_xy = [];
	this.out_item_xy = [];
}

Scene.prototype._Init = function () { // items in arguments

	console.log("init de la scene:", this.id);

	for (var i = arguments.length; i--;) {
		if (arguments[i].x !== undefined && arguments[i].y !== undefined) {

			var index = this.item_list.length;
			
			this.item_list[index] = arguments[i];
			
			this.in_item_xy[index] = {
				x: arguments[i].x,
				y: arguments[i].y
			};

			this.out_item_xy[index] = {
				x: arguments[i].x,
				y: arguments[i].y
			};

			if (Math.random() < 0.5) {
				this.out_item_xy[index].x = this.item_list[index].x < window.all.width / 2 ? window.all.width_out : - window.all.width_out - (this.item_list[index].w || window.all.width * 0.2);
			} else {
				this.out_item_xy[index].y = this.item_list[index].y < window.all.height / 2 ? window.all.height_out : - window.all.height_out - (this.item_list[index].h || window.all.height * 0.2);
			}

		} else {
			console.log("there are no xy coords in:", arguments[i]);
		}
	}

}

Scene.prototype._Update = function () {

	window.all.ctx.fillStyle = this.bg_color;
	window.all.ctx.fillRect(0, 0, window.all.width, window.all.height);
}

