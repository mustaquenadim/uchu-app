import React from 'react';

const BlogCard = ({ blog }) => {
	return (
		<>
			<Link to={`/blog/${blog._id}`}>
				<div className="col">
					<div class="card h-100 border-0">
						<img src={blog?.imageURL} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">{blog.title}</h5>
							<p class="card-text">{blog.description}</p>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default BlogCard;
