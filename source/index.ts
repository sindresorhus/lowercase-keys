interface IHash {
	[key: string]: unknown;
}

const lowercaseKeys = (input: object): IHash => {
	const ret = {};

	Object.keys(input).forEach((key: string) => {
		ret[key.toLowerCase()] = input[key];
	});

	return ret;
};

export default lowercaseKeys;

// For CommonJS default export support
module.exports = lowercaseKeys;
module.exports.default = lowercaseKeys;
