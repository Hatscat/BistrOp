"use strict"


function fack()
{
	window.all.users.push({ avatar: 0, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 4, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 1, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 5, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 7, bill_2_pay: 0, active: true, items: [], can_click: true});

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

function init_share_sc () {


	window.all.scenes[window.all.SCENES.SHARE.ID] = new Scene(window.all.SCENES.SHARE.ID, window.all.SCENES.SHARE.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.SHARE.ID]; // ref

	sc.foo = "bar"; // prop


	sc.border_color = "#666";
	sc.border_top_size = 20;
	sc.border_top_ys = 0;
	sc.border_mid_size = 40;
	sc.border_mid_ys = window.all.height / 2 - 10;
	sc.border_down_size =  20;
	sc.border_down_ys = window.all.height - sc.border_down_size;

	sc.text_size = 12;
	sc.text_color = "#000";
	sc.text_color_font = "#F00";

	sc.icon_size = 64; // DEPEND



	sc.draw_user = function(x, y, user, index)
	{
		var xs, ys;
		var text;

		xs = (window.all.width / 4 - sc.icon_size) / 2;
		ys = window.all.height / 2 + sc.border_mid_size / 2 + (window.all.height / 4 - sc.icon_size) / 2;
		xs += x * (window.all.width / 4);
		ys += y * (window.all.width / 4 + 10);



		user.bill_2_pay = sum_inv_price(user.items);

		if (window.all.mouse.is_down && is_point_inside_box(window.all.mouse, xs, ys, sc.icon_size, sc.icon_size))
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



		var img_name = "avatars_" + user.avatar;

		window.all.ctx.drawImage(window.all.imgs["avatars"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, xs, ys, sc.icon_size, sc.icon_size);

	text = user.bill_2_pay + "E";
	if (index == window.all.selected_user)
		window.all.ctx.fillStyle = "#0F0";
	else
		window.all.ctx.fillStyle = sc.text_color_font;


	window.all.ctx.fillRect(xs, ys + sc.icon_size, sc.icon_size, sc.text_size + 1);
	window.all.ctx.fillStyle = sc.text_color;
	window.all.ctx.font = "bold " + sc.text_size + "px Arial";
	window.all.ctx.fillText(text, xs + sc.icon_size - window.all.ctx.measureText(text).width, ys + sc.icon_size  + sc.text_size);
}

sc.draw_item = function(x, y, item, index)
{
	var xs, ys;
	var text;
	xs = (window.all.width / 4 - sc.icon_size) / 2;
	ys = (window.all.height / 4 - sc.icon_size) / 2;
	xs += x * (window.all.width / 4);
	ys += y * (window.all.width / 4 + 10) + 10;


	if (window.all.mouse.is_down && is_point_inside_box(window.all.mouse, xs, ys, sc.icon_size, sc.icon_size))
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

		var img_name = "items_" + item.icon;

		window.all.ctx.drawImage(window.all.imgs["items"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, xs, ys, window.all.sprites[img_name].w, window.all.sprites[img_name].h);

	/**** TODO FEATURES: degrader ****/
	text = item.price + "E";

	window.all.ctx.font = "bold " + sc.text_size + "px Arial";

	if (index == window.all.selected_item)
		window.all.ctx.fillStyle = "#0F0";
	else
		window.all.ctx.fillStyle = sc.text_color_font;

	window.all.ctx.fillRect(xs, ys + sc.icon_size, sc.icon_size, sc.text_size + 1);
	window.all.ctx.fillStyle = sc.text_color;
	window.all.ctx.fillText(text, xs, ys + sc.icon_size  + sc.text_size);
	text = "x" + item.nbr;
	window.all.ctx.fillStyle = sc.text_color;
	window.all.ctx.fillText(text, xs + sc.icon_size - window.all.ctx.measureText(text).width, ys + sc.icon_size  + sc.text_size);
}

sc.draw_inv = function(user)
{
	var x, y;

	x = y = 0;

	for (var i = 0; i < user.items.length; ++i)
	{
		if (!user.items[i] || user.items[i].nbr <= 0)
			continue ;
		sc.draw_item(x, y, user.items[i], i);
		if (++x >= 4)
		{
			x = 0;
			if (++y >= 2)
				break ;
		}
	}
}


sc.init = function () {
		sc._Init(); // init de la classe mere
		fack();
	}
	sc.update = function () {
		sc._Update(); // init de la classe mere	

		window.all.ctx.fillStyle = sc.border_color;
		window.all.ctx.fillRect(0, sc.border_top_ys, window.all.width, sc.border_top_size);
		window.all.ctx.fillRect(0, sc.border_mid_ys, window.all.width, sc.border_mid_size);
		window.all.ctx.fillRect(0, sc.border_down_ys, window.all.width, sc.border_down_size);
		window.all.ctx.fillRect(0, 0, 4, window.all.height);
		window.all.ctx.fillRect(window.all.width - 4, 0, 4, window.all.height);

		var x, y;

		x = y = 0;
		for (var i = 0; i < window.all.users.length; ++i)
		{
			sc.draw_user(x, y, window.all.users[i], i);
			if (i == window.all.selected_user)
				sc.draw_inv(window.all.users[i]);
			if (++x >= 4)
			{
				x = 0;
				if (++y >= 2)
					break ;
			}
		}
	}
}


