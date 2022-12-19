import './App.scss';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Blog from './pages/Blog';

// layouts
const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));

// pages
const Home = lazy(() => import('./pages/Home'));
const BlogsGrid = lazy(() => import('./pages/BlogsGrid'));
const ManageBlogs = lazy(() => import('./pages/ManageBlogs'));
const WriteBlog = lazy(() => import('./pages/WriteBlog'));
const NoMatch = lazy(() => import('./pages/404'));

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<Suspense fallback={<>loading...</>}>
					<DefaultLayout />
				</Suspense>
			),
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: 'articles',
					element: <BlogsGrid />,
				},
				{
					path: 'article/:id',
					element: <Blog />,
				},
				{
					path: '/login',
					element: <Home />,
				},
			],
		},
		{
			path: 'dashboard',
			element: (
				<Suspense fallback={<>loading...</>}>
					<DashboardLayout />
				</Suspense>
			),
			children: [
				{
					path: 'manage-articles',
					element: <ManageBlogs />,
				},
				{
					path: 'write-article',
					element: <WriteBlog />,
				},
			],
		},
		{
			path: '*',
			element: <NoMatch />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
