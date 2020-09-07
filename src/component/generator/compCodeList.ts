import { wirteProps } from './generatorCode';

export const ButtonForm = (props: any) => {
	const p = wirteProps(props);
	return `<Button ${p}>${props.text}</Button>`;
};

export const CascaderForm = (props: any) => {
	const p = wirteProps(props);
	return `<Cascader ${p}/>`;
};

export const CheckboxForm = (props: any) => {
	const p = wirteProps(props);
	return `<Checkbox.Group ${p}/>`;
};

export const DateCascaderFormForm = (props: any) => {
	const p = wirteProps(props);
	if (props.range) {
		return `<RangePicker ${p}/>`;
	} else {
		return `<DatePicker ${p} />`;
	}
};

export const InputForm = (props: any) => {
	const p = wirteProps(props);
	return `<Input ${p}/>`;
};

export const InputNumberForm = (props: any) => {
	const p = wirteProps(props);
	return `<InputNumber ${p}/>`;
};

export const RadioForm = (props: any) => {
	const p = wirteProps(props);
	return `<Radio.Group ${p}></Radio.Group>`;
};

export const RateForm = (props: any) => {
	const p = wirteProps(props);
	return `<Rate ${p}/>`;
};

export const SliderForm = (props: any) => {
	const p = wirteProps(props);
	return `<Slider ${p}/>`;
};

export const SwitchForm = (props: any) => {
	const p = wirteProps(props);
	return `<Switch ${p}/>`;
};

export const TimeCascaderFormForm = (props: any) => {
	const p = wirteProps(props);
	if (props.range) {
		return `<RangePicker ${p}/>`;
	} else {
		return `<TimePicker ${p} />`;
	}
};
