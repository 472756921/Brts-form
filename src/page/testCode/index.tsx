import React from 'react';
import {
	Form,
	Select,
	Button,
	Input,
	InputNumber,
	Radio,
	Checkbox,
	Rate,
	Upload,
	DatePicker,
	TimePicker,
	Switch,
	Slider,
	Cascader
} from 'antd';

const { OptGroup, Option } = Select;

const TestCP = (props: any) => {
	return (
		<div>
			<Form name="test" labelCol={{ 'span': 4 }} wrapperCol={{ 'span': 6 }}>
				<Form.Item
					name="input"
					label="input"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="inputNumber"
					label="inputNumber"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item
					name="select"
					label="select"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Select
						options={[
							{ 'label': 'aaa', 'value': 1 },
							{ 'label': 'bbb', 'value': 2 }
						]}
						filterOption={function filterOption(input: string, option: any) {
							if (option.options) {
								return false;
							}

							if (option.children) {
								return (
									option.children.toLowerCase().indexOf(input.toLowerCase()) >=
									0
								);
							}

							return (
								option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
							);
						}}
					></Select>
				</Form.Item>
				{/* <Form.Item noStyle shouldUpdate={}>
					{({ getFieldValue }) => {
						return (
							<Form.Item
								name="select_none"
								label="select_none"
								rules={[
									{ 'required': true, 'message': 'Please input your username!' }
								]}
								show={[{ 'item': 'select', 'value': 1 }]}
							>
								<Select
									filterOption={function filterOption(input, option) {
										if (option.options) {
											return false;
										}

										if (option.children) {
											return (
												option.children
													.toLowerCase()
													.indexOf(input.toLowerCase()) >= 0
											);
										}

										return (
											option.label.toLowerCase().indexOf(input.toLowerCase()) >=
											0
										);
									}}
								></Select>
							</Form.Item>
						);
					}}
				</Form.Item> */}
				<Form.Item
					name="select_multiple"
					label="select_multiple"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Select
						mode="multiple"
						options={[
							{ 'label': 'b', 'value': 1, 'disabled': true },
							{ 'label': 'bbb', 'value': 2 },
							{ 'label2': 'bbb', 'value': 3 }
						]}
						// filterOption={function filterOption(input, option) {
						// 	if (option.options) {
						// 		return false;
						// 	}

						// 	if (option.children) {
						// 		return (
						// 			option.children.toLowerCase().indexOf(input.toLowerCase()) >=
						// 			0
						// 		);
						// 	}

						// 	return (
						// 		option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
						// 	);
						// }}
					></Select>
				</Form.Item>
				<Form.Item
					name="select_multiple_group"
					label="select_multiple_group"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Select
						mode="multiple"
						// filterOption={function filterOption(input, option) {
						// 	if (option.options) {
						// 		return false;
						// 	}

						// 	if (option.children) {
						// 		return (
						// 			option.children.toLowerCase().indexOf(input.toLowerCase()) >=
						// 			0
						// 		);
						// 	}

						// 	return (
						// 		option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
						// 	);
						// }}
					>
						<OptGroup label="groupName" key={0}>
							<Option key={0_0} label="aaa" value="aaa">
								aaa
							</Option>
							,
							<Option key={0_1} label="eee" value="eee">
								eee
							</Option>
						</OptGroup>{' '}
						<Option key={1} label="bbb" value="bbb">
							bbb
						</Option>{' '}
						<Option key={2} label="ccc" value="ccc">
							ccc
						</Option>
					</Select>
				</Form.Item>
				<Form.Item
					name="radio"
					label="radio"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Radio.Group
						options={[
							{ 'label': 'aaa', 'value': 1, 'disabled': true },
							{ 'label': 'bbb', 'value': 2 },
							{ 'label': 'ccc', 'value': 3 }
						]}
					></Radio.Group>
				</Form.Item>
				<Form.Item
					name="checkbox"
					label="checkbox"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Checkbox.Group
						options={[
							{ 'label': 'aaa', 'value': 1, 'disabled': true },
							{ 'label': 'bbb', 'value': 2 },
							{ 'label': 'ccc', 'value': 3 }
						]}
					/>
				</Form.Item>
				<Form.Item
					name="rate"
					label="rate"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Rate />
				</Form.Item>
				<Form.Item
					name="switch"
					label="switch"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Switch />
				</Form.Item>
				<Form.Item
					name="slider"
					label="slider"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Slider />
				</Form.Item>
				<Form.Item
					name="cascader"
					label="cascader"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Cascader
						options={[
							{
								'value': 'zhejiang',
								'label': 'Zhejiang',
								'children': [
									{
										'value': 'hangzhou',
										'label': 'Hangzhou',
										'children': [{ 'value': 'xihu', 'label': 'West Lake' }]
									}
								]
							},
							{
								'value': 'jiangsu',
								'label': 'Jiangsu',
								'children': [
									{
										'value': 'nanjing',
										'label': 'Nanjing',
										'children': [
											{ 'value': 'zhonghuamen', 'label': 'Zhong Hua Men' }
										]
									}
								]
							}
						]}
					/>
				</Form.Item>
				<Form.Item
					name="datePicker"
					label="datePicker"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<DatePicker />
				</Form.Item>
				<Form.Item
					name="timePicker"
					label="timePicker"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<TimePicker />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						提交
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default TestCP;
