import React from 'react';
import './Banner.scss';

const Banner = () => {
	return (
		<div class="banner">
			<img
				src="https://www.teahub.io/photos/full/6-69284_2560x1440-wallpaper-two-jack-lake-sunset.jpg"
				alt="Snow"
				style={{ width: '100%' }}
			/>
			<div className="centered">
				<h2>Hello,</h2>
				<h1>I'm Nadim.</h1>
				<h3>Welcome to my blog.</h3>
			</div>
		</div>
	);
};

export default Banner;
