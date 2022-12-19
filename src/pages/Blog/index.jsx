import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
	const { _id } = useParams();
	const [blog, setBlog] = useState();
	useEffect(() => {
		fetch('https://morning-inlet-65384.herokuapp.com/blogs')
			.then((response) => response.json())
			.then((data) => {
				const blogData = data.filter((blog) => _id == blog._id);
				setBlog(blogData[0]);
			});
	}, [_id]);

	return (
		<div className="blog container">
			<div class="card border-0 mb-3">
				<img src={blog?.imageURL} class="card-img-top" alt="..." />
				<div class="card-body">
					<h1 className="mt-5">{blog?.title}</h1>
					<p class="card-text mb-5">
						<small class="text-muted">{blog?.dateTime}</small>
					</p>
					<p class="card-text">{blog?.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
