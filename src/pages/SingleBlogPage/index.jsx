import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogPage = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState();

	useEffect(() => {
		if (id) {
			axios
				.get(`${import.meta.env.VITE_API_URL}/article/${id}`)
				.then((res) => setBlog(res?.data))
				.catch((err) => console.log(err));
		}
	}, [id]);

	return (
		<div className="blog container">
			<div className="card border-0 mb-3">
				<img src={blog?.imageURL} className="card-img-top" alt="..." />
				<div className="card-body">
					<h1 className="mt-5">{blog?.title}</h1>
					<p className="card-text mb-5">
						<small className="text-muted">{blog?.dateTime}</small>
					</p>
					<p className="card-text">{blog?.description}</p>
				</div>
			</div>
		</div>
	);
};

export default SingleBlogPage;
