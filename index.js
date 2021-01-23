'use strict';
module.exports = object => {
	return Object.fromEntries(Object.entries(object).map(([k, v]) => [k.toLowerCase(), v]));
};
