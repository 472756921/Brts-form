import React from 'react';
import { Row, Col } from 'antd';

const RowStyle = {
	'background': '#aaa'
};

const UseRow = () => {
	return (
		<Row style={RowStyle}>
			<Col span={24}>24</Col>
		</Row>
	);
};

export default UseRow;
