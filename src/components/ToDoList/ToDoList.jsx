import { useState } from "react";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoItem from "../ToDoItem/ToDoItem";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
	const [items, setItems] = useState([]);

	const handleAdd = (inputText, setInputText) => {
		if (inputText) {
			setItems((prevItems) => [
				...prevItems,
				{ id: uuidv4(), text: inputText, isDone: false },
			]);
			setInputText("");
		}
	};
	const handleDone = (id) => {
		console.log("done", id);

		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, isDone: true } : item
			)
		);
	};

	const handleDelete = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	return (
		<div>
			<h1>ToDo List</h1>
			<ToDoInput onAdd={handleAdd} />
			<ToDoItem
				items={items}
				onDelete={handleDelete}
				onDone={handleDone}
			/>
		</div>
	);
};

export default ToDoList;
