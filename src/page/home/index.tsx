import React, { useState } from 'react';
import { getUser, postUser } from '../../api';

const LogoImg = require('../../assets/img/benson.jpg');

const Home = () => {
	const [data, changeData] = useState('');
	const [data2, changeData2] = useState('');

	const getData = async () => {
		const res = await getUser();

		changeData(res?.username);
	};
	const postData = async () => {
		const res = await postUser({ 'userId': 3 });

		changeData2(res?.username);
	};

	return (
		<div>
			<img src={LogoImg} width="200" />
			<div>this is BRTS</div>
			<button onClick={() => getData()}>get Data</button>
			<button onClick={() => postData()}>Post Data</button>
			{data}
			{data2}
		</div>
	);
};

export default Home;
