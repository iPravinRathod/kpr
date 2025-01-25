import { useState } from "react";

function BlogPosts() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log("hey", name, value);
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("hey", formData);
	};

	return (
		<>
			<h1>BlogPosts</h1>
			<form onSubmit={handleSubmit}>

				<div>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Email:
						<input
							type="text"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Message:
						<input
							type="text"
							name="message"
							value={formData.message}
							onChange={handleChange}
						/>
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default BlogPosts;
