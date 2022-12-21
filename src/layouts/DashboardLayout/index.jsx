import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
	return (
		<>
			<Header />
			<main className="row g-4">
				<Sidebar />
				<div className="col-md-9">
					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default DashboardLayout;
