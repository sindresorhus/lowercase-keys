import test from 'ava';
import lowercaseKeys from '.';

test('main', t => {
	t.true(lowercaseKeys({FOO: true}).foo);
	t.true(lowercaseKeys({FOO: true, bAr: true}).bar);
	t.deepEqual(lowercaseKeys({FOO: true, bAr: {bAz: true}}), {foo: true, bar: {bAz: true}});
	t.deepEqual(lowercaseKeys({FOO: true, bAr: {bAz: true}}, {deep: true}), {foo: true, bar: {baz: true}});
});
