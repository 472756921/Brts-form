import React, { useState } from 'react';

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
	const isShowQueryComp =
		(props?.formItemConfig?.show && props?.formItemConfig?.show?.length > 0) ||
		false;
	const [showItem, changeShowItem] = useState(false);

	const Component = componentMap[props.formItemConfig.type];

	const shouldUpdate = (p: any, c: any) => {
		const res = props?.formItemConfig?.show?.every(
			(it: any) => c[it.item] === it.value
		);

		changeShowItem(res);
		return res;
	};

	return Component ? (
		isShowQueryComp ? (
			<Form.Item noStyle shouldUpdate={shouldUpdate}>
				{({ getFieldValue }) => {
					return showItem ? (
						<Form.Item {...props.formItemConfig}>
							<Component {...props.componentConfig} />
						</Form.Item>
					) : null;
				}}
			</Form.Item>
		) : (
			<Form.Item {...props.formItemConfig}>
				<Component {...props.componentConfig} />
			</Form.Item>
		)
	) : null;
};

export default Index;
