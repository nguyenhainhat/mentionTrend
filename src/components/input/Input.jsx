/* eslint-disable linebreak-style */
import React from "react";

// eslint-disable-next-line semi
import "./input.scss"

// eslint-disable-next-line arrow-body-style
const Input = props => {
	return (
		<input
			className={props.className}
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange ? e => props.onChange(e) : null}
		/>
	);
};

export default Input;
