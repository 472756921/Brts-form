import { lazy } from 'react';

const routes = [
	{
		'path': '/',
		'component': lazy(() => import('../page/home'))
	},
	{
		'path': '/login',
		'component': lazy(() => import('../page/login'))
	}
];

export default routes;
