import { useState } from "react";

const List = () => {
	const [input, setInput] = useState("");
	const [items, setItems] = useState([]);

	const handleChange = (event) => {
		setInput(event.target.value);
	};
	const handleAdd = () => {
		if (input) {
			const newItem = {
				id: items.length + 1,
				text: input,
			};
			setItems((prevItems) => [...prevItems, newItem]);
			setInput("");
		}
	};

	const handleDelete = () => {
		console.log("delete");

		if (input) {
			const newItem = {
				id: items.length + 1,
				text: input,
			};
			setItems((prevItems) => [...prevItems, newItem]);
			setInput("");
		}
	};
	return (
		<>
			<h1>List</h1>
			<div>
				<input
					type="text"
					name="item"
					placeholder="add item"
					value={input}
					onChange={handleChange}
				/>
				<button onClick={handleAdd}>Add</button>
			</div>
			<div>
				{items && (
					<ul>
						{items.map((item) => (
							<div key={item.id}>
								<li>{item.text}</li>
								<button onClick={handleDelete}>Delete</button>
							</div>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default List;
