import React from 'react';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

interface IOption {
	label: string;
	value: string;
	[name: string]: any;
}

const SelectForm = (props: any) => {
	const groupInList = props.options.some((_: IOption) => Array.isArray(_));

	let noOptionsPros = { ...props };

	delete noOptionsPros['options'];

	const options = props.options.filter(
		(_: IOption) => _.label !== undefined && _.value !== undefined
	);

	const filterOption = (input: string, option: IOption) =>
		option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;

	return groupInList ? (
		<Select {...noOptionsPros} filterOption={filterOption}></Select>
	) : (
		<Select {...props} options={options} filterOption={filterOption}></Select>
	);
};

export default SelectForm;
