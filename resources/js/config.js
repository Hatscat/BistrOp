"use strict"

function get_config () {

	var config = {
	
		is_dev_mode: window.location.href.indexOf('?') != -1,
		SCENES: {
			TRANSITION: {
				ID: 1,
				BG_COLOR: "#000"
			},
			BACK_HOME: {
				ID: 2,
				BG_COLOR: "#fff"
			},
			BACK_CONFIRM: {
				ID: 3,
				BG_COLOR: "#fff"
			},
			FRONT_HOME: {
				ID: 4,
				BG_COLOR: "#fff"
			},
			FRONT_CONFIRM: {
				ID: 5,
				BG_COLOR: "#fff"
			},
			SHARE: {
				ID: 6,
				BG_COLOR: "#eef"
			},
			GAMES: {
				ID: 7,
				BG_COLOR: "#fff"
			},
			DARTS_CONFIRM: {
				ID: 8,
				BG_COLOR: "#fff"
			},
			DARTS_GAME: {
				ID: 9,
				BG_COLOR: "#fff"
			},
			FINAL_CONFIRM: {
				ID: 10,
				BG_COLOR: "#fff"
			},
			INIT_TRANSACTION: {
				ID: 11,
				BG_COLOR: "#fff"
			},
			SPLIT: {
				ID: 11,
				BG_COLOR: "#fff"
			}
		},
		imgs_2_load: [
			{
				name: "avatars",
				path: "./img/avatars.png",
				cols_nb: 19,
				rows_nb: 5
			},
			{
				name: "items",
				path: "./img/items.png",
				cols_nb: 8,
				rows_nb: 8
			}
		],
		width: 320,
		height: 480,
		mouse: {
			x: 0,
			y: 0,
			is_down: false,
			can_click: false
		},
		old_time: 0,
		delta_time: 1,
		bill_total: 0,
		bill_avg: 0,
		loaded_data_nb: 0,
		scenes: [],
		imgs: {},
		sprites: {},
		users: [],
		selected_user: 0,
		selected_item: -1,


		t_data: {
			transaction: {
				currency: {
					code: 'EUR',
					numCode: 978,
					minorUnit: 2,
					minorUnitSeparator: ",",
					thousandSeparator: "",
					position: "CURRENCY_BEFORE_AMOUNT",
					symbol: "&amp;euro;"
				},
				value: 1,
				transactionType: "Payment"
			},
			mean: "CHIP_CARD"
		}
	};

	return config;
}

