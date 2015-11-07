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
		width: 320,
		height: 480,
		old_time: 0,
		delta_time: 1,
		scenes: {},
		imgs: {}
	};

	return config;
}

