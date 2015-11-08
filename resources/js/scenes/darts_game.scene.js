"use strict"

function init_darts_game_sc () {


	window.all.scenes[window.all.SCENES.DARTS_GAME.ID] = new Scene(window.all.SCENES.DARTS_GAME.ID, window.all.SCENES.DARTS_GAME.BG_COLOR);

	var sc = window.all.scenes[window.all.SCENES.DARTS_GAME.ID]; // ref

	// --------------
	
	sc.can_click = false;

	sc.dart = {
		r: window.all.imgs["dart"].width >> 1, // 32
		start_x: window.all.width >> 1,
		timer_max: 5
	};
	sc.dart.start_y = window.all.height - sc.dart.r;

	sc.target = {
		x: window.all.width >> 1,
		r: window.all.imgs["target"].width >> 1//window.all.width * 0.45
	};
	sc.target.y = sc.target.r;

	sc.vector = {
		w: 4,
		angle_max: Math.PI * 0.5,
		angle_speed: 0.0022,
		len_min: window.all.height >> 3,
		len_max: window.all.height - (window.all.height - sc.dart.start_y) - (window.all.height * 0.3 ),
		len_speed: 0.0033
	}

	// --------------

	sc.init = function () {
		
		sc._Init(); // init de la classe mere	

		sc.reset();
	}

	sc.reset = function () {

		sc.round_nb = 0;
		sc.rounds_nb_max = 0;

		sc.players = [];

		for (var i = 1; i < window.all.users.length; ++i) {
			if (window.all.users[i].active) {
				++sc.rounds_nb_max;
				sc.players[sc.players.length] = window.all.users[i];
			}
		}
		console.log(sc.players)
		sc.scores = [];
		sc.high_score = 0;
		sc.looser = null;

		window.all.ctx.textAlign = "center";
		window.all.ctx.textBaseline = "middle";

		sc.init_round();
	}

	sc.init_round = function () {

		sc.dart.x = sc.dart.start_x;
		sc.dart.y = sc.dart.start_y;
		sc.dart.end_x = sc.dart.start_x;
		sc.dart.end_y = sc.dart.start_y;
		sc.dart.timer = 0;
		
		sc.vector.angle = 0;
		sc.vector.len = window.all.height >> 1;
		
		sc.step = 0;
	}

	sc.update = function () {
		
		sc._Update(); // init de la classe mere	

		if (!sc.can_click && !window.all.mouse.is_down) {
			sc.can_click = true;
		}

		switch (sc.step) {
			case 0:
			break;
			case 1:	// choix de l'angle
				sc.vector.angle = Math.sin(window.all.old_time * sc.vector.angle_speed) * sc.vector.angle_max;
			break;
			case 2: // choix de la length
				sc.vector.len = (sc.vector.len_max - sc.vector.len_min) + Math.sin(window.all.old_time * sc.vector.len_speed) * (sc.vector.len_max - sc.vector.len_min * 2);

				if (sc.can_click && window.all.mouse.is_down == true) {
					sc.dart.end_x = sc.dart.start_x + Math.cos(sc.vector.angle - window.all.half_PI) * sc.vector.len;
					sc.dart.end_y = sc.dart.start_y - Math.sin(sc.vector.angle + window.all.half_PI) * sc.vector.len + sc.dart.r;
				}
			break;
			case 3: // animation
				var k = sc.dart.timer / sc.dart.timer_max;

				sc.dart.x = lerp(sc.dart.start_x, sc.dart.end_x, k);
				sc.dart.y = lerp(sc.dart.start_y, sc.dart.end_y, k);
				sc.dart.timer += window.all.delta_time;

			break;
			case 4: // score
				//window.all.ctx.textAlign = "center";
				//window.all.ctx.textBaseline = "middle";

				var d = Math.sqrt(dist_2d_sqrt(sc.target, { x: sc.dart.x, y: sc.dart.y + sc.dart.r }));
				var diff = d / Math.sqrt(dist_2d_sqrt(sc.target, { x: sc.dart.start_x, y: sc.dart.start_y }));

				sc.scores[sc.round_nb] = 10 - (diff * 10 | 0);
				
				if (sc.high_score < sc.scores[sc.round_nb]) {
					sc.high_score = sc.scores[sc.round_nb];
				}
			break;
			default: // reset
				//+ reset ctx
				++sc.round_nb;
				sc.init_round();

				if (sc.round_nb == sc.rounds_nb_max) {
					var min = 99;
					var looser = 0;
					for (var i = sc.players.length; i--;) {
						if (min >= sc.players[i]) {
							min = sc.players[i];
							looser = i;
						}
					}
					window.all.selected_users = looser;
					window.all.ctx.textAlign = "start";
					window.all.ctx.textBaseline = "alphabetic";
					scenes_transition(window.all.SCENES.DARTS_GAME.ID, window.all.SCENES.SHARE.ID);
				}
			break
		}

		if (sc.can_click && window.all.mouse.is_down == true) {
			sc.can_click = false;
			++sc.step;
		}

		//window.all.ctx.fillStyle = "#7f0";
		//window.all.ctx.fillRect(sc.target.x - sc.target.r, sc.target.y - sc.target.r, sc.target.r * 2, sc.target.r * 2);

		window.all.ctx.drawImage(window.all.imgs["target"], sc.target.x - sc.target.r, sc.target.y - sc.target.r); 

		//window.all.ctx.fillStyle = "#f70";
		//window.all.ctx.fillRect(sc.dart.x - sc.dart.r, sc.dart.y - sc.dart.r, sc.dart.r * 2, sc.dart.r * 2);

		window.all.ctx.save();

		window.all.ctx.translate(sc.dart.start_x, sc.dart.start_y);
		window.all.ctx.rotate(sc.vector.angle);

		window.all.ctx.fillStyle = sc.step == 3 ? "#0f0" : "#f00";
		window.all.ctx.fillRect(-sc.vector.w * 0.5, -sc.vector.len, sc.vector.w, sc.vector.len);

		window.all.ctx.restore();
				
		window.all.ctx.drawImage(window.all.imgs["dart"], sc.dart.x - sc.dart.r, sc.dart.y - sc.dart.r); 


		if (sc.scores[sc.round_nb]) {
			window.all.ctx.fillStyle = "#e00";
			window.all.ctx.font = "48px Impact";
			window.all.ctx.fillText(sc.scores[sc.round_nb], window.all.width >> 1, window.all.height * 0.75);
			window.all.ctx.fillStyle = "#a00";
			window.all.ctx.font = "32px Impact";
			window.all.ctx.fillText("Highscore: " + sc.high_score, window.all.width >> 1, window.all.height * 0.85);
		}

		if (sc.players.length && sc.step == 0 && sc.round_nb < sc.rounds_nb_max) {
			
			window.all.ctx.fillStyle = "#000";
			window.all.ctx.globalAlpha = 0.333;
			window.all.ctx.fillRect(0, 0, window.all.width, window.all.height);
			window.all.ctx.globalAlpha = 1;

			var img_name = "avatars_" + sc.players[sc.round_nb].avatar;
			var w = window.all.sprites[img_name].w * 2;
			var h = window.all.sprites[img_name].h * 2;
			var x = window.all.width * 0.5 - w * 0.5;
			var y = window.all.height * 0.5 - h * 0.5;

			window.all.ctx.drawImage(window.all.imgs["avatars"], window.all.sprites[img_name].x, window.all.sprites[img_name].y, window.all.sprites[img_name].w, window.all.sprites[img_name].h, x, y, w, h);
		}
	}
}


