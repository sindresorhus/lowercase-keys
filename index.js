'use strict';
module.exports = object => {
	const ret = {};

	for (const [key, value] of Object.entries(object)) {
		ret[key.toLowerCase()] = value;
	}

	return ret;
};
