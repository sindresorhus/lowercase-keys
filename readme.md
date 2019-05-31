# lowercase-keys [![Build Status](https://travis-ci.org/sindresorhus/lowercase-keys.svg?branch=master)](https://travis-ci.org/sindresorhus/lowercase-keys)

> Lowercase the keys of an object


## Install

```
$ npm install lowercase-keys
```


## Usage

```js
const lowercaseKeys = require('lowercase-keys');

lowercaseKeys({FOO: true, bAr: false});
//=> {foo: true, bar: false}
```


## API

### lowercaseKeys(object)

Returns a new object with the keys lowercased.


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-lowercase-keys?utm_source=npm-lowercase-keys&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
