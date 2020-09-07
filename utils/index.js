export const stringifyQuery = (data) => {
	let params = '';

	for (let key in data) {
		params += `${key}=${data.key}&`;
	}
	return params;
};

export const getDataType = (data) => {
	return toString.call(data).slice(8, -1);
};
