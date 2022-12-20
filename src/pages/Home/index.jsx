import React, { useEffect, useState } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard';
import Banner from '../../components/Home/Banner';
import axios from 'axios';

const Home = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/article`)
			.then((res) => setArticles(res?.data))
			.catch((err) => console.log(err));
	});

	return (
		<div className="home">
			{/* <Banner /> */}
			<div className="container">
				<div className="blogs my-5">
					<h2 className="section__head text-center my-5">All Blogs</h2>
					<div className="row row-cols-1 row-cols-md-3 g-4">
						{articles.map((blog) => (
							<BlogCard key={blog?._id} blog={blog} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
