export const stringifyQuery = (data) => {
	let params = '';

	for (let key in data) {
		params += `${key}=${data.key}&`;
	}
	return params;
};
