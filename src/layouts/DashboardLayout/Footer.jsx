import React from 'react';

const Footer = () => {
	return (
		<footer class="navbar bg-light">
			<div class="container-fluid">
				<span class="">
					{new Date().getFullYear()} &copy; Made with ❤️ by Mehdi Morshed
					Chowdhury
				</span>
			</div>
		</footer>
	);
};

export default Footer;
