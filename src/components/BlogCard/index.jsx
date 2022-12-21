import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
	return (
		<div className="col">
			<div className="card h-100 rounded-0">
				<img
					src={blog?.imageURL}
					className="card-img-top"
					alt={`${blog?.title}`}
				/>
				<div className="card-body">
					<Link to={`/article/${blog._id}`}>
						<h5 className="card-title">{blog.title}</h5>
					</Link>
					<p className="card-text">
						<small className="text-muted">
							{new Date(blog?.dateTime).toLocaleDateString()}
						</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
