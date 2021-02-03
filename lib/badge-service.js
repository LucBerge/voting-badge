"use strict";
var badge = require('gh-badges');
var Promise = require("bluebird");

/**
 *
 * @param count
 * @returns {Promise}
 */
function createBadgeURL(count, style, label, color) {
	if (style == null) {
		style = "flat";
	}
	if (label == null) {
		label = "Vote++";
	}
	if (color == null) {
		color = "green";
	}
    return Promise.resolve("https://img.shields.io/badge/" + label + "-" + count + "-" + color + ".svg?style=" + style);
}

module.exports = createBadgeURL;