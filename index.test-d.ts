import {expectType} from 'tsd';
import lowercaseKeys = require('.');

expectType<{[key: string]: boolean}>(lowercaseKeys({FOO: true, bAr: false}));
expectType<{[key: string]: string | number}>(lowercaseKeys({foo: 'bar', baz: 1}));
