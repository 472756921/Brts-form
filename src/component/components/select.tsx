import React from 'react';
import { Select } from 'antd';
const { Option, OptGroup } = Select;
interface IOption {
	label: string;
	value: string;
	[name: string]: any;
}

const SelectForm = (props: any) => {
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
		return (
			<Option key={i} {...data}>
				{data.label}
			</Option>
		);
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

				return (
					<OptGroup label={groupInfo[0].groupName} key={i}>
						{ops}
					</OptGroup>
				);
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

	return groupInList ? (
		<Select {...noOptionsPros} filterOption={filterOption}>
			{createOptGroup()}
		</Select>
	) : (
		<Select {...props} options={options} filterOption={filterOption}></Select>
	);
};

export default SelectForm;
