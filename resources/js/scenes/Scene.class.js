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
	window.all.users.push({ avatar: 0, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 4, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 1, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 5, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 5, bill_2_pay: 0, active: true, items: [], can_click: true});

	window.all.users[0].items.push({ icon: 1,  name: "biere", nbr: 4, base_price: 5.5, divided: 1, price: 5.5, active: true, can_click: true});
	window.all.users[0].items.push({ icon: 2,  name: "jambon", nbr: 1, base_price: 12.0, divided: 1, price: 12.0, active: true, can_click: true});
	window.all.users[0].items.push({ icon: 3,  name: "fromage", nbr: 3, base_price: 2.5, divided: 1, price: 2.5, active: true, can_click: true});
	window.all.users[0].items.push({ icon: 4,  name: "vodka", nbr: 1, base_price: 4.5, divided: 1, price: 4.5, active: true, can_click: true});
	window.all.users[0].items.push({ icon: 5,  name: "croq-messieur", nbr: 3, base_price: 7.5, divided: 1, price: 7.5, active: true, can_click: true});
	window.all.users[0].items.push({ icon: 6,  name: "frite", nbr: 4, base_price: 3.5, divided: 1, price: 3.5, active: true, can_click: true});
	window.all.users[0].items.push({ icon: 7,  name: "cafe", nbr: 3, base_price: 2, divided: 1, price: 2, active: true, can_click: true});
	window.all.users[0].items.push({ icon: 8,  name: "macaron", nbr: 1, base_price: 14, divided: 1, price: 14, active: true, can_click: true});
	window.all.users[0].items.push({ icon: 9,  name: "cocktail", nbr: 1, base_price: 8, divided: 1, price: 8, active: true, can_click: true});

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

function get_next_item()
{
	for (var i = window.all.selected_item + 1; i < window.all.users[window.all.selected_user].items.length; ++i)
	{
		if (window.all.users[window.all.selected_user].items && window.all.users[window.all.selected_user].items[i].nbr > 0)
		{
			return i;
		}
	}
	return (-1);
}

Scene.prototype._Draw_user = function(x, y, user, index)
{
	var xs, ys;
	var text;

	xs = (window.all.width / 4 - this.icon_size) / 2;
	ys = window.all.height / 2 + this.border_size / 2 + (window.all.height / 4 - this.icon_size) / 2;
	xs += x * (window.all.width / 4);
	ys += y * (window.all.height / 4);



	user.bill_2_pay = sum_inv_price(user.items);

	if (window.all.mouse.is_down && is_point_inside_box(window.all.mouse, xs, ys, this.icon_size, this.icon_size))
	{
		if (user.can_click)
		{
			user.can_click = false;
			if (window.all.selected_item == -1)
			{
				window.all.selected_user = index;
				window.all.selected_item = -1;
			}
			else if (index != window.all.selected_user)
			{
				if (!user.items[window.all.selected_item])
				{
					user.items[window.all.selected_item] = clone(window.all.users[window.all.selected_user].items[window.all.selected_item]);
					user.items[window.all.selected_item].nbr = 1;
				}
				else
					++user.items[window.all.selected_item].nbr;
				--(window.all.users[window.all.selected_user].items[window.all.selected_item].nbr);
				if (window.all.users[window.all.selected_user].items[window.all.selected_item].nbr <= 0)
					window.all.selected_item = get_next_item();	
			}
		}
	}
	else
		user.can_click = true;



	window.all.ctx.fillStyle = "#0F0"; // TMP
	window.all.ctx.fillRect(xs, ys, this.icon_size, this.icon_size);

	text = user.bill_2_pay + "E";
	if (index == window.all.selected_user)
		window.all.ctx.fillStyle = "#0F0";
	else
		window.all.ctx.fillStyle = this.text_color_font;


	window.all.ctx.fillRect(xs, ys + this.icon_size, this.icon_size, this.text_size + 1);
	window.all.ctx.fillStyle = this.text_color;
	window.all.ctx.font = "bold " + this.text_size + "px Arial";
	window.all.ctx.fillText(text, xs + this.icon_size - window.all.ctx.measureText(text).width, ys + this.icon_size  + this.text_size);
}

Scene.prototype._Draw_item = function(x, y, item, index)
{
	var xs, ys;
	var text;
	xs = (window.all.width / 4 - this.icon_size) / 2;
	ys = (window.all.height / 4 - this.icon_size) / 2;
	xs += x * (window.all.width / 4);
	ys += y * (window.all.height / 4);


	if (window.all.mouse.is_down && is_point_inside_box(window.all.mouse, xs, ys, this.icon_size, this.icon_size))
	{
		if (item.can_click)
		{
			item.can_click = false;
			if (index == window.all.selected_item)
				window.all.selected_item = -1;
			else
				window.all.selected_item = index;
		}
	}
	else
		item.can_click = true;

	window.all.ctx.fillStyle = "#00F";
	window.all.ctx.fillRect(xs, ys, this.icon_size, this.icon_size);

	/**** TODO FEATURES: degrader ****/
	text = item.price + "E";

	window.all.ctx.font = "bold " + this.text_size + "px Arial";

	if (index == window.all.selected_item)
		window.all.ctx.fillStyle = "#0F0";
	else
		window.all.ctx.fillStyle = this.text_color_font;

	window.all.ctx.fillRect(xs, ys + this.icon_size, this.icon_size, this.text_size + 1);
	window.all.ctx.fillStyle = this.text_color;
	window.all.ctx.fillText(text, xs, ys + this.icon_size  + this.text_size);
	text = "x" + item.nbr;
	window.all.ctx.fillStyle = this.text_color;
	window.all.ctx.fillText(text, xs + this.icon_size - window.all.ctx.measureText(text).width, ys + this.icon_size  + this.text_size);
}

Scene.prototype._Draw_inv = function(user)
{
	var x, y;

	x = y = 0;

	for (var i = 0; i < user.items.length; ++i)
	{
		if (!user.items[i] || user.items[i].nbr <= 0)
			continue ;
		this._Draw_item(x, y, user.items[i], i);
		if (++x >= 4)
		{
			x = 0;
			if (++y >= 2)
				break ;
		}
	}
}

Scene.prototype._Init = function () {
	fack();
	console.log("init de la scene:", this.id);
}

Scene.prototype._Update = function () {

	window.all.ctx.fillStyle = this.bg_color;
	window.all.ctx.fillRect(0, 0, window.all.width, window.all.height);

	window.all.ctx.fillStyle = this.border_color;
	window.all.ctx.fillRect(0, window.all.height / 2 - this.border_size / 2, window.all.width, this.border_size);

	var x, y;

	x = y = 0;
	for (var i = 0; i < window.all.users.length; ++i)
	{
		this._Draw_user(x, y, window.all.users[i], i);
		if (i == window.all.selected_user)
			this._Draw_inv(window.all.users[i]);
		if (++x >= 4)
		{
			x = 0;
			if (++y >= 2)
				break ;
		}
	}
}

