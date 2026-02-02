# lowercase-keys

> Lowercase the keys of an object

Check out [`map-obj`](https://github.com/sindresorhus/map-obj) if you need support for deep iteration.

## Install

```sh
npm install lowercase-keys
```

## Usage

```js
import lowercaseKeys from 'lowercase-keys';

lowercaseKeys({FOO: true, bAr: false});
//=> {foo: true, bar: false}
```

## API

### lowercaseKeys(object, options?)

Returns a new object with the keys lowercased.

#### options

Type: `object`

##### onConflict

Type: `Function`

A function that is called when multiple keys in the input object map to the same lowercased key.

The function receives the lowercased key, the new value, and the existing value, and should return the value to use.

By default, the last value wins.

```js
import lowercaseKeys from 'lowercase-keys';

// Throw on conflict
lowercaseKeys({Key: 'value1', key: 'value2'}, {
	onConflict({key}) {
		throw new Error(`Duplicate key: ${key}`);
	}
});

// Keep the first value
lowercaseKeys({Key: 'value1', key: 'value2'}, {
	onConflict: ({existingValue}) => existingValue,
});
//=> {key: 'value1'}
```
