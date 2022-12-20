import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './BlogsGrid.css';

const BlogsGrid = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/article`)
			.then((res) => setBlogs(res?.data))
			.catch((err) => console.log(err));
	});

	return (
		<div>
			<h1>Blogs</h1>
			{blogs.map((blog) => (
				<h1>{blog?.title}</h1>
			))}
		</div>
	);
};

export default BlogsGrid;
