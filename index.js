export default function lowercaseKeys(object) {
	const objCopy = {};
	const objList = Object.entries(object);
	for (let index = 0; index < objList.length; index++) {
		objCopy[objList[index][0].toLowerCase()] = objList[index][1];
	}
	return objCopy;
}