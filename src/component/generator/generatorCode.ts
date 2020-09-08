import { getDataType } from '../../../utils';
import {
	ButtonForm,
	CascaderForm,
	CheckboxForm,
	DateCascaderFormForm,
	InputForm,
	InputNumberForm,
	RadioForm,
	RateForm,
	SliderForm,
	SwitchForm,
	TimeCascaderFormForm,
	SelectForm
} from './compCodeList';

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
interface IOption {
	label: string;
	value: string;
	[name: string]: any;
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
const componentMapOfComp: any = {
	input: InputForm,
	select: SelectForm,
	button: ButtonForm,
	radio: RadioForm,
	inputNumber: InputNumberForm,
	checkbox: CheckboxForm,
	rate: RateForm,
	switch: SwitchForm,
	slider: SliderForm,
	cascader: CascaderForm,
	datePicker: DateCascaderFormForm,
	timePicker: TimeCascaderFormForm
};

const wirteProps = (props: any, notshowList?: Array<string>) => {
	const cs = Object.entries(props);
	let confString = '';

	for (let e of cs) {
		if (notshowList?.includes(e[0])) {
			continue;
		}
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
		if (getDataType(e[1]) === 'Array') {
			temp = `${e[0]}={${JSON.stringify(e[1])}} `;
		}
		confString += temp;
	}
	return confString;
};

const createChildenItem = (data: any, type: string) => {
	const itemFunc = componentMapOfComp[type];

	return itemFunc(data);
};

const createFormItemCode = (itemConf: IformItem) => {
	if (componentMap.findIndex((_) => _ === itemConf?.formItemConfig?.type) < 0) {
		return null;
	}
	let returnTempData = '';
	const isShowQueryComp =
		itemConf?.formItemConfig?.show &&
		itemConf?.formItemConfig?.show?.length > 0;
	const p1 = wirteProps(itemConf?.formItemConfig, ['type']);
	const tempData = `
        <Form.Item ${p1}>
            ${createChildenItem(
							itemConf?.componentConfig,
							itemConf?.formItemConfig?.type
						)}
		</Form.Item>`;

	const tempData2 = `
		<Form.Item noStyle shouldUpdate={}>
			{({ getFieldValue }) => {
				return (
					<Form.Item ${p1}>
						${createChildenItem(itemConf?.componentConfig, itemConf?.formItemConfig?.type)}
					</Form.Item>
				);
			}}
		</Form.Item>`;

	if (isShowQueryComp) {
		returnTempData = tempData2;
	} else {
		returnTempData = tempData;
	}

	return returnTempData;
};

const createFormItemList = (formItems: Array<IformItem>) => {
	if (!Array.isArray(formItems)) {
		return '';
	}
	let codeList = '';

	formItems.map((it: IformItem) => {
		const t = createFormItemCode(it);

		codeList += t;
	});
	return codeList;
};

const createFormCode = (conf: formConfig, childen: string) => {
	let confString = wirteProps(conf);

	return `<Form ${confString}>${childen}</Form>`;
};

const generatorCode = (conf: any) => {
	if (Array.isArray(conf) && conf.length <= 0) {
		return '配置文件错误';
	}
	const formItem = createFormItemList(conf?.formItems);
	const form = createFormCode(conf?.formConfig, formItem);

	return form;
};

export { generatorCode };
export { wirteProps };
