'use strict';
const mapObj = require('map-obj');

module.exports = (object, options) => {
	return mapObj(object, (key, value) => [key.toLowerCase(), value], options);
};
