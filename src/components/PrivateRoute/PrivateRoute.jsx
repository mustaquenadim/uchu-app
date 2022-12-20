import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
// import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
	// const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedInUser.email ? (
					children
				) : (
					<Navigate to={{ pathname: '/login', state: { from: location } }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
