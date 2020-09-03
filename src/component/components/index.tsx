import React from 'react';
import { Form } from 'antd';
import Input from './input';
import InputNumber from './inputNumber';
import Select from './select';
import Button from './button';
import Radio from './radio';
import Checkbox from './checkbox';
import Rate from './rate';
import Switch from './switch';
import Slider from './slider';
import Cascader from './cascader';
import DatePicker from './datePicker';
import TimePicker from './timePicker';

const componentMap: any = {
	input: Input,
	select: Select,
	button: Button,
	radio: Radio,
	inputNumber: InputNumber,
	checkbox: Checkbox,
	rate: Rate,
	switch: Switch,
	slider: Slider,
	cascader: Cascader,
	datePicker: DatePicker,
	timePicker: TimePicker
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
