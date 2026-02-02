export type OnConflictArgument<T> = {
	/**
	The lowercased key that conflicts.
	*/
	key: string;

	/**
	The new value that is being set.
	*/
	newValue: T;

	/**
	The existing value that was already set.
	*/
	existingValue: T;
};

export type Options<T> = {
	/**
	A function that is called when multiple keys in the input object map to the same lowercased key.

	The function receives the lowercased key, the new value, and the existing value, and should return the value to use.

	By default, the last value wins.

	@example
	```
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
	*/
	onConflict?: (argument: OnConflictArgument<T>) => T;
};

/**
Lowercase the keys of an object.

@returns A new object with the keys lowercased.

@example
```
import lowercaseKeys from 'lowercase-keys';

lowercaseKeys({FOO: true, bAr: false});
//=> {foo: true, bar: false}
```
*/
export default function lowercaseKeys<T>(object: Record<string, T>, options?: Options<T>): Record<string, T>;
