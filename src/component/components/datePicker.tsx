import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;



const CascaderFormForm = (props: any) => {
	if(props.range){

		return <RangePicker {...props} style={{ width: '100%', ...props?.style }} />;
	} else {

		return <DatePicker {...props} style={{ width: '100%', ...props?.style }} />;
	}

};

export default CascaderFormForm;
