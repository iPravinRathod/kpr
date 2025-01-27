/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";

const BlogDetails = () => {
	let location = useLocation();
	const { post } = location.state || {};
	return (
		<div>
			<h1>BlogDetails</h1>
			<h2>{post.title} </h2>
			<p>{post.body}</p>
		</div>
	);
};

export default BlogDetails;
