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

const preffCom: any = {
	select: 'const { Option, OptGroup } = Select;',
	datePicker: 'const { RangePicker: RangePickerAsDate } = DatePicker;',
	timePicker: 'const { RangePicker: RangePickerAsTime } = TimePicker;'
};

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

		if (getDataType(e[1]) === 'String' || getDataType(e[1]) === 'Number') {
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
	const p1 = wirteProps(itemConf?.formItemConfig, ['type', 'show']);

	const createShouldUpdateFN = () => {
		const pr = itemConf?.formItemConfig?.show?.map(
			(it: any) => `p.${it.item} !== c.${it.item}`
		);

		const showp = itemConf?.formItemConfig?.show?.map(
			(it: any) =>
				`getFieldValue('${it.item}') === ${
					typeof it.value === 'number' ? it.value : "'" + it.value + "'"
				}`
		);

		return [pr.join('||'), showp.join('&&')];
	};

	if (isShowQueryComp) {
		returnTempData = `
		<Form.Item noStyle shouldUpdate={(p: any, c: any)=>${createShouldUpdateFN()[0]}}>
			{({ getFieldValue }) => {
				return ${createShouldUpdateFN()[1]} ? (
					<Form.Item ${p1}>
						${createChildenItem(itemConf?.componentConfig, itemConf?.formItemConfig?.type)}
					</Form.Item>
				):null;
			}}
		</Form.Item>`;
	} else {
		returnTempData = `
        <Form.Item ${p1}>
            ${createChildenItem(
							itemConf?.componentConfig,
							itemConf?.formItemConfig?.type
						)}
		</Form.Item>`;
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

const createFormCode = (conf: formConfig, childen: string, prefix: string) => {
	let confString = wirteProps(conf);

	return `${prefix}
        <Form ${confString}>
            ${childen}
        </Form>`;
};

const checkAlias = (listData: Array<IformItem>) => {
	let preff = '',
		comp = '',
		typeList: string[] = [];

	listData?.map((it) => {
		typeList.push(it?.formItemConfig?.type);
	});

	const CP = Array.from(new Set(typeList));

	CP.map((it: string) => {
		if (preffCom[it]) {
			preff += preffCom[it];
		}
		comp += it + ',';
	});

	return `import {${comp}} from 'antd';${preff}`;
};

const generatorCode = (conf: any) => {
	if (Array.isArray(conf) && conf.length <= 0) {
		return '配置文件错误';
	}
	const formItem = createFormItemList(conf?.formItems);
	const form = createFormCode(conf?.formConfig, formItem, '');
	const preff = checkAlias(conf?.formItems);

	return preff + form;
};

export { generatorCode };
export { wirteProps };
