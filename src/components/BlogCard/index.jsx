import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
	return (
		<Link to={`/article/${blog._id}`}>
			<div className="col">
				<div className="card h-100 border-0">
					<img src={blog?.imageURL} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{blog.title}</h5>
						<p className="card-text">{blog.description}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
