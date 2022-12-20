import React, { useContext } from 'react';
import './Login.scss';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	// const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	// const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const onSubmit = (data) => {
		axios
			.post(`${import.meta.env.VITE_API_URL}/login`, data)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};

	return (
		<div className="login d-flex justify-content-center align-items-center">
			<div className="p-4 bg-white login__main" style={{ width: '400px' }}>
				<h3 className="login__head text-center mb-4">Login</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group mb-3">
						<label htmlFor="email" className="mb-2">
							Email
						</label>
						<input
							type="email"
							className="form-control shadow-none"
							id="email"
							placeholder="Enter your email"
							{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						/>
						{errors.email && (
							<span className="text-danger">Please enter a valid email</span>
						)}
					</div>
					<div className="form-group mb-3">
						<label htmlFor="password" className="mb-2">
							Password
						</label>
						<input
							type="password"
							className="form-control shadow-none"
							id="password"
							placeholder="Enter your password"
							{...register('password', { required: true, minLength: 6 })}
						/>
						{errors.password && (
							<span className="text-danger">This field is required</span>
						)}
					</div>
					{/* <div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input shadow-none"
							id="rememberMe"
						/>
						<label className="form-check-label" htmlFor="rememberMe">
							Remember Me
						</label>
					</div> */}
					{/* <p>Forgot Password?</p> */}
					<button type="submit" className="btn btn-primary w-100 mb-3">
						Login
					</button>
					<p className="text-center">
						Don't have an account?{' '}
						<Link to="/signup" className="text-decoration-none">
							Create an account
						</Link>
					</p>
				</form>
				{/* <FireAuth /> */}
			</div>
		</div>
	);
};

export default Login;
