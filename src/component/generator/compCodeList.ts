import { wirteProps } from './generatorCode';
interface IOption {
	label: string;
	value: string;
	[name: string]: any;
}

export const ButtonForm = (props: any): string => {
	const p = wirteProps(props, ['text']);

	return `<Button ${p}>${props.text}</Button>`;
};

export const CascaderForm = (props: any): string => {
	const p = wirteProps(props);

	return `<Cascader ${p}/>`;
};

export const CheckboxForm = (props: any): string => {
	const p = wirteProps(props);

	return `<Checkbox.Group ${p}/>`;
};

export const DateCascaderFormForm = (props: any): string => {
	const p = wirteProps(props);

	if (props.range) {
		return `<RangePicker ${p}/>`;
	} else {
		return `<DatePicker ${p} />`;
	}
};

export const InputForm = (props: any): string => {
	const p = wirteProps(props);

	return `<Input ${p}/>`;
};

export const InputNumberForm = (props: any): string => {
	const p = wirteProps(props);

	return `<InputNumber ${p}/>`;
};

export const RadioForm = (props: any): string => {
	const p = wirteProps(props);

	return `<Radio.Group ${p}></Radio.Group>`;
};

export const RateForm = (props: any): string => {
	const p = wirteProps(props);

	return `<Rate ${p}/>`;
};

export const SliderForm = (props: any): string => {
	const p = wirteProps(props);

	return `<Slider ${p}/>`;
};

export const SwitchForm = (props: any): string => {
	const p = wirteProps(props);

	return `<Switch ${p}/>`;
};

export const TimeCascaderFormForm = (props: any): string => {
	const p = wirteProps(props);

	if (props.range) {
		return `<RangePicker ${p}/>`;
	} else {
		return `<TimePicker ${p} />`;
	}
};

export const SelectForm = (props: any): string => {
	let { options } = props,
		noOptionsPros = { ...props };

	const groupInList = props?.options?.some((_: IOption) => Array.isArray(_));

	const clearOption = (data: Array<IOption>) =>
		data?.filter(
			(_: IOption) => _.label !== undefined && _.value !== undefined
		);

	const filterOption = (input: string, option: IOption) => {
		if (option.options) {
			return false;
		}
		if (option.children) {
			return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
		}
		return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
	};

	const createOption = (data: IOption, i: number | string) => {
		const p = wirteProps(data);

		return `<Option key={${i}} ${p}>${data.label}</Option>`;
	};

	const createOptGroup = () => {
		return options.map((it: IOption | Array<IOption>, i: number) => {
			const isGroup = Array.isArray(it);

			if (isGroup && it.length > 1) {
				const optionsInless = clearOption(it as Array<IOption>);
				const groupInfo: Array<IOption> = it as Array<IOption>;

				let ops = optionsInless.map((ij: IOption, ii: number) =>
					createOption(ij, i + '_' + ii)
				);

				return `<OptGroup label='${groupInfo[0].groupName}' key={${i}}>${ops}</OptGroup>`;
			} else {
				return createOption(it as IOption, i);
			}
		});
	};

	if (groupInList) {
		delete noOptionsPros['options'];
	} else {
		options = clearOption(options);
	}

	if (groupInList) {
		const p = wirteProps(noOptionsPros);

		return `<Select ${p} filterOption={${filterOption}}>
			${createOptGroup().join(' ')}
		</Select>`;
	} else {
		const p = wirteProps(props);

		return `<Select ${p}  filterOption={${filterOption}}></Select>`;
	}
};
