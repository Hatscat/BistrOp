"use strict"

function lerp (from, to, t) {
	return from + (t < 0 ? 0 : t > 1 ? 1 : t) * (to - from);
}

function sign (n) {
	return n < 0 ? -1 : 1;
}

function is_point_inside_box (P, x, y, w, h) {
	return P.x >= x && P.x <= x + w && P.y >= y && P.y <= y + h;
}

function is_point_inside_circle (P, x, y, r) {
	return (P.x - x) * (P.x - x) + (P.y - y) * (P.y - y) < r * r;
}

function does_circles_collides (x0, y0, r0, x1, y1, r1) {
	return (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0) < (r1 - r0) * (r1 - r0);
}

function dist_2d_sqrt (a, b) {
	return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
}

function is_point_left_of_line_AB (Px, Py, Ax, Ay, Bx, By) {
	return (Bx - Ax) * (Py - Ay) - (By - Ay) * (Px - Ax) > 0;
}

function wait (container, prop_name_to_test, prop_value, time, next) {

	if (container[prop_name_to_test] == prop_value) {
		next();
	} else {
		window.setTimeout(function(){wait(container, prop_name_to_test, prop_value, time, next)}, time);
	}
}

function loop_index (index, length) {
	return (length + (index % length)) % length;
}

function sum () {
	var sum = 0;
	for (var i = arguments.length; i--;) {
		sum += arguments[i];
	}
	return sum;
}

function average () {
	return sum.apply(null, arguments) / arguments.length;
}

