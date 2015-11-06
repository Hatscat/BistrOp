"use strict"

function getConfig () {

	var config = {
	
		is_dev_mode: window.location.href.indexOf('?') != -1,
		width: 320,
		height: 480,
		imgs: {}
	};

	config.imgs = {};

	return config;
}

