"use strict"

function Scene (id, bg_color) {

	this.id = id;
	this.bg_color = bg_color;

	this.border_color = "#666";
	this.border_size = 4;

	this.text_size = 12;
	this.text_color = "#000";
	this.text_color_font = "#F00";

	this.icon_size = 64; // DEPEND
}

function fack()
{
	window.all.users.push({ avatar: 0,  id: 0, bill_2_pay: 0, active: true, items: []});
	window.all.users.push({ avatar: 4,  id: 1, bill_2_pay: 0, active: true, items: []});
	window.all.users.push({ avatar: 1,  id: 2, bill_2_pay: 0, active: true, items: []});
	window.all.users.push({ avatar: 5,  id: 3, bill_2_pay: 0, active: true, items: []});

	window.all.users[0].items.push({ icon: 1,  name: "biere", nbr: 4, base_price: 5.5, divided: 1, price: 5.5, active: true});
	window.all.users[0].items.push({ icon: 2,  name: "jambon", nbr: 1, base_price: 12.0, divided: 1, price: 12.0, active: true});
	window.all.users[0].items.push({ icon: 3,  name: "fromage", nbr: 3, base_price: 2.5, divided: 1, price: 2.5, active: true});
	window.all.users[0].items.push({ icon: 4,  name: "vodka", nbr: 1, base_price: 4.5, divided: 1, price: 4.5, active: true});
	window.all.users[0].items.push({ icon: 5,  name: "croq-messieur", nbr: 3, base_price: 7.5, divided: 1, price: 7.5, active: true});
	window.all.users[0].items.push({ icon: 6,  name: "frite", nbr: 4, base_price: 3.5, divided: 1, price: 3.5, active: true});
	window.all.users[0].items.push({ icon: 7,  name: "cafe", nbr: 3, base_price: 2, divided: 1, price: 2, active: true});
	window.all.users[0].items.push({ icon: 8,  name: "macaron", nbr: 1, base_price: 14, divided: 1, price: 14, active: true});
	window.all.users[0].items.push({ icon: 9,  name: "cocktail", nbr: 1, base_price: 8, divided: 1, price: 8, active: true});

}

function sum_inv_price(items)
{

	var count = 0;

	for (var i in items)
	{
		count += items[i].price * items[i].nbr;
	}
	return (count);
}

Scene.prototype._Draw_user = function(x, y, user)
{
	var xs, ys;
	var text;

	xs = (window.all.width / 4 - this.icon_size) / 2;
	ys = window.all.height / 2 + this.border_size / 2 + (window.all.height / 4 - this.icon_size) / 2;

	window.all.ctx.fillStyle = "#0F0"; // TMP
	window.all.ctx.fillRect(xs + x * (window.all.width / 4), ys + y * (window.all.height/ 4), this.icon_size, this.icon_size);

	text = user.bill_2_pay + "E";
	window.all.ctx.fillStyle = this.text_color_font; // TMP
	window.all.ctx.fillRect(xs + x * (window.all.width / 4), ys + y * (window.all.height / 4) + this.icon_size, this.icon_size, this.text_size + 1);
	window.all.ctx.fillStyle = this.text_color; // TMP
	window.all.ctx.font = "bold " + this.text_size + "px Arial";
	window.all.ctx.fillText(text, xs + x * (window.all.width / 4) + this.icon_size - window.all.ctx.measureText(text).width, ys + y * (window.all.height/ 4) + this.icon_size  + this.text_size);
}

Scene.prototype._Draw_item = function(x, y, item)
{
	var xs, ys;
	var text;
	xs = (window.all.width / 4 - this.icon_size) / 2;
	ys = (window.all.height / 4 - this.icon_size) / 2;

	window.all.ctx.fillStyle = "#00F"; // TMP
	window.all.ctx.fillRect(xs + x * (window.all.width / 4), ys + y * (window.all.height/ 4), this.icon_size, this.icon_size);

	/**** TODO FEATURES: degrader ****/
	text = item.price + "E";

	window.all.ctx.font = "bold " + this.text_size + "px Arial";
	window.all.ctx.fillStyle = this.text_color_font; // TMP
	window.all.ctx.fillRect(xs + x * (window.all.width / 4), ys + y * (window.all.height/ 4) + this.icon_size, this.icon_size, this.text_size + 1);
	window.all.ctx.fillStyle = this.text_color; // TMP
	window.all.ctx.fillText(text, xs + x * (window.all.width / 4), ys + y * (window.all.height/ 4) + this.icon_size  + this.text_size);
	text = "x" + item.nbr;
	window.all.ctx.fillStyle = this.text_color; // TMP
	window.all.ctx.fillText(text, xs + x * (window.all.width / 4) + this.icon_size - window.all.ctx.measureText(text).width, ys + y * (window.all.height/ 4) + this.icon_size  + this.text_size);
}

Scene.prototype._Draw_inv = function(user)
{
	var x, y;

	x = y = 0;

	for (var i in user.items)
	{
		this._Draw_item(x, y, user.items[i]);
		if (++x >= 4)
		{
			x = 0;
			if (++y >= 2)
				break ;
		}
	}
}

Scene.prototype._Draw = function() {
	window.all.ctx.fillStyle = this.bg_color;
	window.all.ctx.fillRect(0, 0, window.all.width, window.all.height);

	window.all.ctx.fillStyle = this.border_color;
	window.all.ctx.fillRect(0, window.all.height / 2 - this.border_size / 2, window.all.width, this.border_size);

	var x, y;

	x = y = 0;
	for (var i in window.all.users)
	{
		window.all.users[i].bill_2_pay = sum_inv_price(window.all.users[i].items);


		this._Draw_user(x, y, window.all.users[i]);
		if (window.all.users[i].id == window.all.selected_user)
			this._Draw_inv(window.all.users[i]);
		if (++x >= 4)
		{
			x = 0;
			if (++y >= 2)
				break ;
		}
	}

};

Scene.prototype._Init = function () {
	fack();
	console.log("init de la scene:", this.id);
	this._Draw();
}

Scene.prototype._Update = function () {

	//console.log("update de la scene:", this.id);	this._Draw()

}

