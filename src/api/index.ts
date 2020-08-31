import { get, post } from './request';
import { User } from './lib/index';

export function getUser(): Promise<any> {
	return get('/api/user');
}
export function postUser(user: User): Promise<any> {
	return post('/api/user/info', user);
}
