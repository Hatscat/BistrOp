"use strict"


function fack()
{
	window.all.users.push({ avatar: 0, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 4, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 1, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 5, bill_2_pay: 0, active: true, items: [], can_click: true});
	window.all.users.push({ avatar: 7, bill_2_pay: 0, active: true, items: [], can_click: true});

	window.all.users[0].items = window.fake_data.Tb42;
}

function sum_inv_price(items)
{

	var count = 0;

	for (var i in items)
	{
		count += items[i].unit_price * items[i].amount;
	}
	return (count.toFixed(2));
}

function get_next_item()
{
	for (var i = window.all.selected_item + 1; i < window.all.users[window.all.selected_user].items.length; ++i)
	{
		if (window.all.users[window.all.selected_user].items && window.all.users[window.all.selected_user].items[i].amount > 0)
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

	sc.zone_users_add_x = 0;
	sc.zone_users_add_y = -25;
	sc.zone_items_add_x = 0;
	sc.zone_items_add_y = -10;

	sc.border_color = "#666";
	sc.border_top_size = 20;
	sc.border_top_ys = 0;
	sc.border_mid_size = 40;
	sc.border_mid_ys = window.all.height / 2 - 30;
	sc.border_down_size =  40;
	sc.border_down_ys = window.all.height - sc.border_down_size;

	sc.text_size = 12;
	sc.text_color = "#000";
	sc.text_color_font = "#F00";

	sc.text_mid_size = 30;
	sc.end_nop = "#F00";
	sc.end_yep = "#0F0";
	sc.end_ratio = 0.8;


	sc.split_nop = "#A00";
	sc.split_yep = "#e2e529";

	sc.icon_size = 64; // DEPEND



	sc.draw_user = function(x, y, user, index)
	{
		var xs, ys;
		var text;

		xs = (window.all.width / 4 - sc.icon_size) / 2;
		ys = window.all.height / 2 + sc.border_mid_size / 2 + (window.all.height / 4 - sc.icon_size) / 2;
		xs += x * (window.all.width / 4);
		ys += y * (window.all.width / 4 + 10);
		xs += sc.zone_users_add_x;
		ys += sc.zone_users_add_y;



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
						user.items[window.all.selected_item].amount = 1;
					}
					else
						++user.items[window.all.selected_item].amount;
					--(window.all.users[window.all.selected_user].items[window.all.selected_item].amount);
					if (window.all.users[window.all.selected_user].items[window.all.selected_item].amount <= 0)
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
		xs += sc.zone_items_add_x;
		ys += sc.zone_items_add_y;


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

		var img_name = "items_" + (item.col + item.row * 8);

		window.all.ctx.drawImage(window.all.imgs["items"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, xs, ys, window.all.sprites[img_name].w, window.all.sprites[img_name].h);

		/**** TODO FEATURES: degrader ****/
		text = item.unit_price + "E";

		window.all.ctx.font = "bold " + sc.text_size + "px Arial";

		if (index == window.all.selected_item)
			window.all.ctx.fillStyle = "#0F0";
		else
			window.all.ctx.fillStyle = sc.text_color_font;

		window.all.ctx.fillRect(xs, ys + sc.icon_size, sc.icon_size, sc.text_size + 1);
		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.fillText(text, xs, ys + sc.icon_size  + sc.text_size);
		text = "x" + item.amount;
		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.fillText(text, xs + sc.icon_size - window.all.ctx.measureText(text).width, ys + sc.icon_size  + sc.text_size);
	}

	sc.draw_inv = function(user)
	{
		var x, y;

		x = y = 0;

		for (var i = 0; i < user.items.length; ++i)
		{
			if (!user.items[i] || user.items[i].amount <= 0)
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

		/**** BORDER ****/
		window.all.ctx.fillStyle = sc.border_color;
		window.all.ctx.fillRect(0, sc.border_top_ys, window.all.width, sc.border_top_size);
		window.all.ctx.fillRect(0, sc.border_mid_ys, window.all.width, sc.border_mid_size);
		window.all.ctx.fillRect(0, sc.border_down_ys, window.all.width, sc.border_down_size);
		window.all.ctx.fillRect(0, 0, 4, window.all.height);
		window.all.ctx.fillRect(window.all.width - 4, 0, 4, window.all.height);

		/**** TERMINER ****/
		var text = "confirm";
		var cx = window.all.width /2;
		var cy = sc.border_down_ys;

		if (window.all.users[0].bill_2_pay == 0)
		{
			window.all.ctx.fillStyle = sc.end_yep;
			if (window.all.mouse.is_down && is_point_inside_box(window.all.mouse, cx, cy, window.all.width / 2, sc.border_down_size))
				console.log("CONFIRM");
		}
		else
			window.all.ctx.fillStyle = sc.end_nop;
		window.all.ctx.fillRect(cx, cy, window.all.width /2, sc.border_down_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, cx + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, cy + sc.border_down_size / 2 + sc.text_mid_size / 2 - 5);

		/**** SPLIT ****/
		text = "Split";
		cx = 0;
		cy = sc.border_down_ys;

		if (window.all.selected_item != -1)
		{
			window.all.ctx.fillStyle = sc.split_yep;
			if (window.all.mouse.is_down && is_point_inside_box(window.all.mouse, cx, cy, window.all.width / 2, sc.border_down_size))
				console.log("CONFIRM");
		}
		else
			window.all.ctx.fillStyle = sc.split_nop;
		window.all.ctx.fillRect(cx, cy, window.all.width /2, sc.border_down_size);

		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, cx + window.all.width / 4 - window.all.ctx.measureText(text).width / 2, cy + sc.border_down_size / 2 + sc.text_mid_size / 2 - 5);

		/**** INFO ****/
		if (window.all.selected_item != -1)
		{
			var item_selected = window.all.users[window.all.selected_user].items[window.all.selected_item];
			var text_left = item_selected.name;
			var text_right = item_selected.unit_price + "E x" + item_selected.amount;

			window.all.ctx.fillStyle = sc.text_color;
			window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
			window.all.ctx.fillText(text_left, 0, sc.border_mid_ys + sc.border_mid_size / 2 + sc.text_mid_size / 2 - 5);
			window.all.ctx.fillText(text_right, window.all.width - window.all.ctx.measureText(text_right).width, sc.border_mid_ys + sc.border_mid_size / 2 + sc.text_mid_size / 2 - 5);
		}
		/**** SCROLL ****/
/*		text = "<";
		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, 10, sc.border_mid_ys + sc.border_mid_size / 2 + sc.text_mid_size / 2 - 5);

		text = ">";
		window.all.ctx.fillStyle = sc.text_color;
		window.all.ctx.font = "bold " + sc.text_mid_size + "px Arial";
		window.all.ctx.fillText(text, window.all.width - window.all.ctx.measureText(text).width / 2 - 15, sc.border_mid_ys + sc.border_mid_size / 2 + sc.text_mid_size / 2 - 5);
		*/
		/**** DRAW ****/
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


