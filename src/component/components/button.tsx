import React from 'react';
import { Button } from 'antd';

const ButtonForm = (props: any) => {
	return <Button {...props}>{props.text}</Button>;
};

export default ButtonForm;
