import { getDataType } from '../../utils';
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

const createFormCode = (conf: formConfig, childen: string) => {
	const cs = Object.entries(conf);
	let confString = '';

	for (let e of cs) {
		console.log('e :>> ', e, getDataType(e[1]));
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

	return `<Form ${confString}>${childen}</Form>`;
};

const createFormItemCode = (itemConf: IformItem) => {
	return 123;
};

const generatorCode = (conf: any) => {
	console.log('conf :>> ', reactElementToJSXString(conf));
	// if (Array.isArray(conf) && conf.length <= 0) {
	// 	return '配置文件错误';
	// }

	// return createFormCode(conf.formConfig, '');
};

export { generatorCode };
