import React from 'react';
import { Form } from 'antd';

import Input from './input';
import Select from './select';
import Button from './button';

const componentMap: any = {
	input: Input,
	select: Select,
	button: Button
};

const Index = (props: any) => {
	const Component = componentMap[props.formItemConfig.type];

	return Component ? (
		<Form.Item {...props.formItemConfig}>
			<Component {...props.componentConfig} />
		</Form.Item>
	) : null;
};

export default Index;
