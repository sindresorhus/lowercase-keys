'use strict';
module.exports = function lowercaseKeys(object) {
	if (object === null) {
		return null;
	}

	const result = {};

	for (const [key, value] of Object.entries(object)) {
		if (Array.isArray(value)) {
			result[key.toLowerCase()] = [];
			for (const v of value) {
				result[key.toLowerCase()].push(lowercaseKeys(v));
			}
		} else {
			result[key.toLowerCase()] = (typeof value === 'object') ? lowercaseKeys(value) : value;
		}
	}

	return result;
};
