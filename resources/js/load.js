"use strict"


function load_data (cb) {

	var json_req = new XMLHttpRequest();

	json_req.open('GET', './data.json', true);
	json_req.withCredentials = true;

	json_req.onload = function () {

		try {
			window.all.bill = JSON.parse(json_req.response);
		} catch (e) {
			console.error("failed to open the data json");
		}

		for (var i = window.all.imgs.length; i--;) {

			window.all.imgs[i] = load_image(window.all.imgs_2_load[i].url, cb);
		}
	};

	json_req.send(null);
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
