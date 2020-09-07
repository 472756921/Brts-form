import { getDataType } from '../../../utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

interface IformConfigData {
	formConfig: formConfig;
	formItems: IformItem[];
	[name: string]: any;
}
interface formConfig {
	labelCol: { span: number };
	wrapperCol: { span: number };
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

const componentMap = [
	'input',
	'select',
	'button',
	'radio',
	'inputNumber',
	'checkbox',
	'rate',
	'switch',
	'slider',
	'cascader',
	'datePicker',
	'timePicker'
];

const wirteProps = (props: any) => {
	const cs = Object.entries(props);
	let confString = '';

	for (let e of cs) {
		let temp = '';

		if (getDataType(e[1]) === 'String') {
			temp = `${e[0]}='${e[1]}' `;
		}
		if (getDataType(e[1]) === 'Object') {
			temp = `${e[0]}={${JSON.stringify(e[1])}} `;
		}
		if (getDataType(e[1]) === 'Function') {
			temp = `${e[0]}={} `;
		}
		confString += temp;
	}
	return confString;
};

const createChildenItem = (data: any) => {};

const createFormItemCode = (itemConf: any) => {
	if (componentMap.findIndex((_) => _ === itemConf.type) < 0) {
		return null;
	}
	let returnTempData = '';
	const isShowQueryComp = itemConf?.show && itemConf?.show?.length > 0;
	const tempData = `
		<Form.Item {...props.formItemConfig}>
			<Component {...props.componentConfig} />
		</Form.Item>`;

	const tempData2 = `
		<Form.Item noStyle shouldUpdate={shouldUpdate}>
			{({ getFieldValue }) => {
				return showItem ? (
					<Form.Item {...props.formItemConfig}>
						<Component {...props.componentConfig} />
					</Form.Item>
				) : null;
			}}
		</Form.Item>`;

	if (isShowQueryComp) {
		returnTempData = tempData2;
	} else {
		returnTempData = tempData;
	}

	return returnTempData;
};

const createFormCode = (conf: formConfig, childen: string) => {
	let confString = wirteProps(conf);
	return `<Form ${confString}>${childen}</Form>`;
};

const generatorCode = (conf: any) => {
	if (Array.isArray(conf) && conf.length <= 0) {
		return '配置文件错误';
	}
	const form = createFormCode(conf?.formConfig, '');
	const formItem = '';
	createFormItemCode('');
	// conf?.formItems?.map((it: IformItem) => {
	// 	createFormItemCode(it);
	// });

	return form;
};

export { generatorCode };
export { wirteProps };
