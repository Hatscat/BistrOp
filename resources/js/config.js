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
				BG_COLOR: "#eee"
			},
			BACK_CONFIRM: {
				ID: 3,
				BG_COLOR: "#afc"
			},
			FRONT_HOME: {
				ID: 4,
				BG_COLOR: "#cff"
			},
			FRONT_CONFIRM: {
				ID: 5,
				BG_COLOR: "#fcc"
			},
			SHARE: {
				ID: 6,
				BG_COLOR: "#acf"
			},
			GAMES: {
				ID: 7,
				BG_COLOR: "#caf"
			},
			DARTS_CONFIRM: {
				ID: 8,
				BG_COLOR: "#fca"
			},
			DARTS_GAME: {
				ID: 9,
				BG_COLOR: "#111"
			},
			FINAL_CONFIRM: {
				ID: 10,
				BG_COLOR: "#fca"
			},
			INIT_TRANSACTION: {
				ID: 11,
				BG_COLOR: "#cfc"
			},
			SPLIT: {
				ID: 12,
				BG_COLOR: "#ffc"
			},
			AVERAGE: {
				ID: 13,
				BG_COLOR: "#faf"
			},
			ACCUEIL: {
				ID: 14,
				BG_COLOR: "#380"
			}
		},
		games: [
		{
			name: "Darts",
			icon: "flechette",
			scene_id: 8,
			bg_color: "#171",
			min_player: 2,
			max_player: -1,
		},
		{
			name: "Cards",
			icon: "cartes",
			scene_id: 2,
			bg_color: "#711",
			min_player: 2,
			max_player: -1,
		}
		],
		imgs_2_load: [
			{
				name: "avatars",
				path: "./img/avatars.png",
				cols_nb: 19,
				rows_nb: 5
			},
			{
				name: "banniere",
				path: "./img/banniere.png",
				cols_nb: 1,
				rows_nb: 1
			},
			{
				name: "items",
				path: "./img/items.png",
				cols_nb: 8,
				rows_nb: 8
			},
			{
				name: "back_mid",
				path: "./img/button/back_mid.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "confirm_mid",
				path: "./img/button/confirm_mid.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "confirm_tier",
				path: "./img/button/confirm_tier.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "fleche_droite",
				path: "./img/button/fleche_droite.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "fleche_gauche",
				path: "./img/button/fleche_gauche.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "game_mid",
				path: "./img/button/game_mid.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "game_tier",
				path: "./img/button/game_tier.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "moins",
				path: "./img/button/moins.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "plus",
				path: "./img/button/plus.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "split_mid",
				path: "./img/button/split_mid.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "split_tier",
				path: "./img/button/split_tier.png",
				cols_nb: 3,
				rows_nb: 1
			},
			{
				name: "flechette",
				path: "./img/flechette.png",
				cols_nb: 1,
				rows_nb: 1
			},
			{
				name: "cartes",
				path: "./img/cartes.png",
				cols_nb: 1,
				rows_nb: 1
			},
			{
				name: "dart",
				path: "./img/dart.png",
				cols_nb: 1,
				rows_nb: 1
			},
			{
				name: "table",
				path: "./img/table.png",
				cols_nb: 1,
				rows_nb: 1
			},
			{
				name: "plus_moins",
				path: "./img/plus_moins.png",
				cols_nb: 1,
				rows_nb: 1
			},
			{
				name: "logo",
				path: "./img/logo.png",
				cols_nb: 1,
				rows_nb: 1
			},
			{
				name: "target",
				path: "./img/cible.png",
				cols_nb: 1,
				rows_nb: 1
			}


		],
		width: 320,
		height: 480,
		//width_out: 128,
		//height_out: 256,
		mouse: {
			x: 0,
			y: 0,
			is_down: false,
			can_click: false
		},
		//can_input: true,
		old_time: 0,
		delta_time: 1,
		bill_total: 0,
		bill_avg: 0,
		loaded_data_nb: 0,
		scenes: [],
		imgs: {},
		sprites: {},
		users: [],
		previous_scene: 0,
		selected_user: 0,
		selected_game: 0,
		selected_item: -1,
		transition_cols_nb: 0,
		transition_cells_nb: 0,
		transition_remaining_cells: 0,
		transition_cells_index: [],
		transition_cell_i: 0,
		transition_cells_drawn: undefined,
		transition_buffer_part_size: 32,
		half_PI: Math.PI * 0.5,


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

