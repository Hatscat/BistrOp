"use strict"


function load_data (cb) {

	for (var i = window.all.imgs_2_load.length; i--;) {

		window.all.imgs[window.all.imgs_2_load[i].name] = load_image(window.all.imgs_2_load[i].path, cb);
	}
}

function load_image (src, cb) {

	var img = new Image();

	img.src = src;
	img.onload = function () { loaded_content(cb) };

	return img;
}

function loaded_content (cb) {
	
	console.log('loading: ', window.all.loaded_data_nb + ' / ' + window.all.imgs_2_load.length);

	if (++window.all.loaded_data_nb >= window.all.imgs_2_load.length) {

		console.log('load complete: ', window.all.loaded_data_nb + ' / ' + window.all.imgs_2_load.length);

		cb();
	}
}
