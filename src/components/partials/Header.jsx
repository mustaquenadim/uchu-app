import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header text-center">
			<Link to="/" className="brand text-center">
				Mustaque's Blog
			</Link>
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link class="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/blogs">
									Blogs
								</Link>
							</li>
							<li
								class="nav-item"
								data-bs-toggle="tooltip"
								data-bs-placement="bottom"
								title="Only for Admin!"
							>
								<Link class="nav-link" to="dashboard/manageBlogs">
									Manage Blogs
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<hr className="w-75" />
		</div>
	);
};

export default Header;
