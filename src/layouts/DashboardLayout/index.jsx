import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
	return (
		<>
			<Header />
			<main className="d-flex">
				<Sidebar />
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default DashboardLayout;
