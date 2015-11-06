"use strict"

function get_config () {

	var config = {
	
		is_dev_mode: window.location.href.indexOf('?') != -1,
		width: 320,
		height: 480,
		imgs: {}
	};

	return config;
}

