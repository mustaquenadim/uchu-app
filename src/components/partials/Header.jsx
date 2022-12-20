import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="brand text-center">
					Uchu
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/blogs">
								Blogs
							</Link>
						</li>
						<li
							className="nav-item"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							title="Only for Admin!"
						>
							<Link className="nav-link" to="dashboard/manage-articles">
								Manage Blogs
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
