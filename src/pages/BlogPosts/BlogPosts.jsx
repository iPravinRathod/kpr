import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function BlogPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		setPosts(data);
	};

	return (
		<div>
			<h1>BlogPosts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/blogs/${post.id}`} state={{ post }}>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default BlogPosts;
