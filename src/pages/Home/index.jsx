import React, { useEffect, useState } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard';
import Banner from '../../components/Home/Banner';

const Home = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch('https://morning-inlet-65384.herokuapp.com/blogs')
			.then((res) => res.json())
			.then((data) => {
				setBlogs(data);
			});
	});

	return (
		<div className="home">
			{/* <Banner /> */}
			<div className="container">
				<div className="blogs my-5">
					<h2 className="section__head text-center my-5">All Blogs</h2>
					<div class="row row-cols-1 row-cols-md-3 g-4">
						{blogs.map((blog) => (
							<BlogCard key={blog?._id} blog={blog} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
