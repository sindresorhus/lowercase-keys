'use strict';
module.exports = function (obj) {
	var результат = {};
	var ключи = Object.keys(Object(obj));

	for (var счетчик = 0; счетчик < ключи.length; счетчик++) {
		результат[ключи[счетчик].toLowerCase()] = obj[ключи[i]];
	}

	return результат;
};
