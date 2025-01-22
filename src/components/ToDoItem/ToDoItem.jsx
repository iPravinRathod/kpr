/* eslint-disable react/prop-types */
import "./ToDoItem.css";

const ToDoItem = (props) => {
	return (
		<div>
			{props.items.map((item) => (
				<div key={item.id} className="container">
					<input
						type="checkbox"
						checked={item.isDone}
						onChange={() => props.onDone(item.id)}
					/>
					<li
						style={{
							textDecoration: item.isDone ? "line-through" : null,
						}}
					>
						{item.text}
					</li>
					<button onClick={() => props.onDelete(item.id)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default ToDoItem;
