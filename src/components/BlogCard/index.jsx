import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
	return (
		<Link to={`/article/${blog._id}`}>
			<div className="col">
				<div className="card h-100 rounded-0">
					<img
						src={blog?.imageURL}
						className="card-img-top"
						alt={`${blog?.title}`}
					/>
					<div className="card-body">
						<h5 className="card-title">{blog.title}</h5>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
