import { lazy } from 'react';

const routes = [
	{
		'path': '/home',
		'component': lazy(() => import('../page/home'))
	},
	{
		'path': '/login',
		'component': lazy(() => import('../page/login'))
	},
	{
		'path': '/test',
		'component': lazy(() => import('../page/testCode'))
	}
];

export default routes;
