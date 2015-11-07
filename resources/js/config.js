"use strict"

function get_config () {

	var config = {
	
		is_dev_mode: window.location.href.indexOf('?') != -1,
		SCENES: {
			TRANSITION: {
				ID: 1,
				BG_COLOR: "#000"
			},
			SHARE: {
				ID: 2,
				BG_COLOR: "#28F"
			}
		},
		imgs_2_load: [
			{
				name: "avatars",
				path: "../img/avatars.png",
				cols_nb: 4,
				rows_nb: 3
			}
		],
		width: 320,
		height: 480,
		old_time: 0,
		delta_time: 1,
		bill_total: 0,
		bill_avg: 0,

		scenes: {},
		sprites: {},
		users: []
	};

	return config;
}

