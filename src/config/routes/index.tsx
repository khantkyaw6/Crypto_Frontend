import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from '../../components/header/Navbar';
import Login from '../../components/authentication/Login';
import Signup from '../../components/authentication/Signup';

function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Navbar />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/signup',
			element: <Signup />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default Router;
