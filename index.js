export default function lowercaseKeys(object) {
	const objectCopy = {};
	const objectList = Object.entries(object);
	for (const key of objectList) {
		objectCopy[key[0].toLowerCase()] = key[1];
	}

	return objectCopy;
}
