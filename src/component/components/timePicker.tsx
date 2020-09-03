import React from 'react';
import { TimePicker } from 'antd';

const { RangePicker } = TimePicker;

const CascaderFormForm = (props: any) => {
	if (props.range) {
		return (
			<RangePicker {...props} style={{ width: '100%', ...props?.style }} />
		);
	} else {
		return <TimePicker {...props} style={{ width: '100%', ...props?.style }} />;
	}
};

export default CascaderFormForm;
