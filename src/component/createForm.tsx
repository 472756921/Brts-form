import React from 'react';
import { Form, Input, Button } from 'antd';

const formLayout = {
	'labelCol': {
		'span': 4
	},
	'wrapperCol': {
		'span': 16
	}
};

const config = {
	formConfig: {
		layout: { labelCol: { span: 4 }, wrapperCol: { span: 6 } }
	},
	formItem: [
		{
			type: 'input',
			name: 'test',
			label: 'test',
			rules: [{ 'required': true, 'message': 'Please input your username!' }]
		}
	]
};

const createForm = () => {
	const createInput = (data: any) => {
		return (
			<Form.Item label={data.label} name={data.name} rules={data.rules}>
				<Input />
			</Form.Item>
		);
	};

	const fnList = {
		input: createInput
	};

	const createItem = (data: any) => {
		return data?.map((it: any, i: number) => {
			const fn = fnList[it.type];

			return fn(it);
		});
	};

	const createFather = (data: any) => {
		const itmes = createItem(data.formItem);

		return <Form {...data.formLayout}>{itmes}</Form>;
	};

	return (
		<div>
			<Form {...formLayout}>
				<Form.Item
					label="test"
					name="username"
					rules={[
						{
							'required': true,
							'message': 'Please input your username!'
						}
					]}
				>
					<Input />
				</Form.Item>
				<InputForm label="test"
					name="username"
					rules={[
						{
							'required': true,
							'message': 'Please input your username!'
						}
					]}/>
			</Form>
			{createFather(config)}
		</div>
	);
};

export default createForm;
