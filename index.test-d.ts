import {expectType} from 'tsd-check';
import lowercaseKeys from '.';

expectType<object>(lowercaseKeys({Test:true}));
