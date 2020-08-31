import React from 'react';
import { Form, Input } from 'antd';

const InputForm = (props: any) => {
	return (
		<Form.Item {...props}>
			<Input />
		</Form.Item>
	);
};

export default InputForm;
