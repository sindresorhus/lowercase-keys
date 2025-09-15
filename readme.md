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

### lowercaseKeys(object)

Returns a new object with the keys lowercased.
