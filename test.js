import test from 'ava';
import lowercaseKeys from './index.js';

test('main', t => {
	t.true(lowercaseKeys({FOO: true}).foo);
	t.true(lowercaseKeys({FOO: true, bAr: true}).bar);
});

test('prototype pollution - __proto__ is handled safely', t => {
	const input = Object.fromEntries([['__proto__', {polluted: true}]]);
	const result = lowercaseKeys(input);
	const prototypeDescriptor = Object.getOwnPropertyDescriptor(result, '__proto__');

	t.true(Object.hasOwn(result, '__proto__'));
	t.deepEqual(prototypeDescriptor?.value, {polluted: true});
	t.is(result.polluted, undefined);
	t.is(Object.getPrototypeOf(result), Object.prototype);
});

test('prototype pollution - constructor and prototype are handled safely', t => {
	const result = lowercaseKeys({
		constructor: {polluted: true},
		prototype: {polluted: true},
	});

	t.true(Object.hasOwn(result, 'constructor'));
	t.true(Object.hasOwn(result, 'prototype'));
	t.deepEqual(result.constructor, {polluted: true});
	t.deepEqual(result.prototype, {polluted: true});
	t.is(Object.getPrototypeOf(result), Object.prototype);
});

test('duplicate keys - default behavior overwrites with last value', t => {
	t.deepEqual(lowercaseKeys({Key: 'value1', key: 'value2'}), {key: 'value2'});
});

test('onConflict - keep existing value', t => {
	const result = lowercaseKeys({Key: 'value1', key: 'value2'}, {
		onConflict: ({existingValue}) => existingValue,
	});
	t.deepEqual(result, {key: 'value1'});
});

test('onConflict - throw on conflict', t => {
	t.throws(() => {
		lowercaseKeys({Key: 'value1', key: 'value2'}, {
			onConflict({key}) {
				throw new Error(`Duplicate key: ${key}`);
			},
		});
	}, {message: 'Duplicate key: key'});
});

test('onConflict - merge values', t => {
	const result = lowercaseKeys({Key: 'value1', key: 'value2'}, {
		onConflict: ({existingValue, newValue}) => [existingValue, newValue],
	});
	t.deepEqual(result, {key: ['value1', 'value2']});
});

test('onConflict - not called when no conflicts', t => {
	const result = lowercaseKeys({FOO: true, bAr: false}, {
		onConflict() {
			t.fail('should not be called');
		},
	});
	t.deepEqual(result, {foo: true, bar: false});
});

test('onConflict - receives correct key', t => {
	t.plan(1);
	lowercaseKeys({FOO: 1, Foo: 2}, {
		onConflict({key}) {
			t.is(key, 'foo');
			return 0;
		},
	});
});
