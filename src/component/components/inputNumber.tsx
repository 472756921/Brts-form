import React from 'react';
import { InputNumber } from 'antd';

const InputNumberForm = (props: any) => {
	return <InputNumber {...props} style={{ width: '100%',...props?.style }} />;
};

export default InputNumberForm;
