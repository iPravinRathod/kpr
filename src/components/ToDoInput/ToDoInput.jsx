/* eslint-disable react/prop-types */
import { useState } from "react";

const ToDoInput = (props) => {
	const [inputText, setInputText] = useState("");

	const handleChange = (event) => {
		setInputText(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="enter todo item"
				value={inputText}
				onChange={handleChange}
			/>
			<button onClick={() => props.onAdd(inputText, setInputText)}>
				Add
			</button>
		</div>
	);
};

export default ToDoInput;
