'use strict';
var test = require('ava');
var lowercaseKeys = require('./');

test(function (t) {
	t.assert(lowercaseKeys({FOO: true}).foo === true);
	t.assert(lowercaseKeys({FOO: true, bAr: true}).bar === true);
	t.end();
});
