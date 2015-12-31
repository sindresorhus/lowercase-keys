import test from 'ava';
import m from './';

test(t => {
	t.true(m({FOO: true}).foo);
	t.true(m({FOO: true, bAr: true}).bar);
});
