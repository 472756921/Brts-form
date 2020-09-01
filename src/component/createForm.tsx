import React from 'react';
import { Form, Select, Button } from 'antd';
import IndexForm from './components/index';
import SelectForm from './components/select';

const { Option } = Select;

interface IformConfigData {
	formConfig: {
		labelCol: { span: number };
		wrapperCol: { span: number };
		[name: string]: any;
	};
	formItems: IformItem[];
	[name: string]: any;
}

interface IformItem {
	formItemConfig: {
		type: string;
		name?: string;
		label?: string;
		rules?: any;
		[name: string]: any;
	};
	componentConfig?: any;
}

const config = {
	formConfig: {
		name: 'test',
		labelCol: { span: 4 },
		wrapperCol: { span: 6 },
		onFinish: (values: any) => {
			console.log('values  :>> ', values);
		}
	},
	formItems: [
		{
			formItemConfig: {
				type: 'input',
				name: 'input',
				label: 'input',
				initialValue: '123',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'inputNumber',
				name: 'inputNumber',
				label: 'inputNumber',
				initialValue: '123',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'select',
				name: 'select',
				label: 'select',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				options: [{ label: 'aaa', value: 1 }]
			}
		},
		{
			formItemConfig: {
				type: 'select',
				name: 'select_none',
				label: 'select_none',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'select',
				name: 'select_multiple',
				label: 'select_multiple',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				mode: 'multiple',
				options: [
					{ label: 'b', value: 1, disabled: true },
					{ label: 'bbb', value: 2 },
					{ label2: 'bbb', value: 3 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'select',
				name: 'select_multiple_group',
				label: 'select_multiple_group',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				mode: 'multiple',
				options: [
					[
						{ groupName: 'groupName' },
						{ label: 'aaa', value: 1, disabled: true },
						{ label: 'eee', value: 4 }
					],
					{ label: 'bbb', value: 2, disabled: true },
					{ label: 'ccc', value: 3 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'radio',
				name: 'radio',
				label: 'radio',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				options: [
					{ label: 'aaa', value: 1, disabled: true },
					{ label: 'bbb', value: 2 },
					{ label: 'ccc', value: 3 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'checkbox',
				name: 'checkbox',
				label: 'checkbox',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				options: [
					{ label: 'aaa', value: 1, disabled: true },
					{ label: 'bbb', value: 2 },
					{ label: 'ccc', value: 3 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'rate',
				name: 'rate',
				label: 'rate',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'switch',
				name: 'switch',
				label: 'switch',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'slider',
				name: 'slider',
				label: 'slider',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'button'
			},
			componentConfig: {
				type: 'primary',
				htmlType: 'submit',
				text: '提交'
			}
		}
	]
};

const createForm = () => {
	const createFather = (data: IformConfigData) => {
		const itmes = data.formItems.map((it: IformItem, i: number) => (
			<IndexForm key={`${data.formConfig.name}_${i}`} {...it} />
		));

		return <Form {...data.formConfig}>{itmes}</Form>;
	};

	return (
		<div>
			{createFather(config)}
			<br /> ----- <br />
			<Form
				onFinish={(v) => {
					console.log('v :>> ', v);
				}}
			>
				<Form.Item
					label="sss"
					name="asdf"
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<Select mode="multiple">
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
					</Select>
				</Form.Item>
				<Form.Item label="sss" name="asdf" required>
					<Button htmlType="submit">123</Button>
				</Form.Item>
				<Form.Item
					label="sss"
					name="asd2f"
					required
					rules={[
						{ 'required': true, 'message': 'Please input your username!' }
					]}
				>
					<SelectForm options={[{ label: 'aaa', value: 1 }]} />
				</Form.Item>
			</Form>
		</div>
	);
};

export default createForm;
