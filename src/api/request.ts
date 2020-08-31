import { stringifyQuery } from '../../utils';
import { ReqOptions } from './lib/index';

const request = async (options: ReqOptions) => {
	let url = options?.url;
	const init: ReqOptions = {
		'headers': {
			'Authorization': '',
			...options.config?.headers
		}
	};

	if (options.method === 'GET') {
		if (options.data) {
			url += stringifyQuery(options.data);
		}
	} else {
		init.method = options.method;
		init.headers['Content-Type'] = 'application/json';
		if (options.data) {
			init.body = JSON.stringify(options.data);
		}
	}
	const response = await fetch(url, init);

	if (response.status === 200) {
		return await response.json();
	}
	throw response;
};

export function get(url: string, data = {}, config = {}): Promise<any> {
	return request({ url, data, config, 'method': 'GET' });
}

export function post(url: string, data = {}, config = {}): Promise<any> {
	return request({ url, data, config, 'method': 'POST' });
}

export function put(url: string, data = {}, config = {}): Promise<any> {
	return request({ url, data, config, 'method': 'PUT' });
}

export function patch(url: string, data = {}, config = {}): Promise<any> {
	return request({ url, data, config, 'method': 'PATCH' });
}

export function del(url: string, data = {}, config = {}): Promise<any> {
	return request({ url, data, config, 'method': 'DELETE' });
}
