import {expectType} from 'tsd';
import lowercaseKeys from './index.js';

expectType<Record<string, boolean>>(lowercaseKeys({FOO: true, bAr: false})); // eslint-disable-line @typescript-eslint/naming-convention
expectType<Record<string, string | number>>(lowercaseKeys({foo: 'bar', baz: 1}));
