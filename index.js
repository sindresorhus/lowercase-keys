export default function lowercaseKeys(object, {onConflict} = {}) {
	if (typeof object !== 'object' || object === null) {
		throw new TypeError(`Expected an object, got ${object === null ? 'null' : typeof object}`);
	}

	const result = {};

	for (const [key, value] of Object.entries(object)) {
		const lowercasedKey = key.toLowerCase();
		const hasExistingKey = Object.hasOwn(result, lowercasedKey);
		const existingValue = hasExistingKey ? result[lowercasedKey] : undefined;

		const resolvedValue = onConflict && hasExistingKey
			? onConflict({key: lowercasedKey, newValue: value, existingValue})
			: value;

		Object.defineProperty(result, lowercasedKey, {
			value: resolvedValue,
			writable: true,
			enumerable: true,
			configurable: true,
		});
	}

	return result;
}
