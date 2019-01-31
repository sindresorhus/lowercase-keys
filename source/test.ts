import test, {Assertions} from 'ava';
import lowercaseKeys from './index';

test('main', (t: Assertions) => {
	t.true(lowercaseKeys({FOO: true}).foo);
	t.true(lowercaseKeys({FOO: true, bAr: true}).bar);
});
