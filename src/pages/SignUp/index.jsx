import React, { useContext } from 'react';
import './SignUp.scss';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
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
			.post(`${import.meta.env.VITE_API_URL}/register`, data)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};

	return (
		<div className="register d-flex justify-content-center align-items-center">
			<div className="register__main bg-white p-4" style={{ width: '450px' }}>
				<h3 className="register__head text-center mb-4">Create an Account</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group mb-3">
						<input
							type="text"
							className="form-control shadow-none"
							id="name"
							placeholder="Name"
							{...register('name', { required: true })}
						/>
						{errors.name && (
							<span className="text-danger">This field is required</span>
						)}
					</div>
					<div className="form-group mb-3">
						<input
							type="email"
							className="form-control shadow-none"
							id="email"
							placeholder="Email"
							{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						/>
						{errors.email && (
							<span className="text-danger">Please enter a valid email</span>
						)}
					</div>
					<div className="form-group mb-3">
						<input
							type="password"
							className="form-control shadow-none"
							id="password"
							placeholder="Password"
							{...register('password', { required: true, minLength: 6 })}
						/>
						{errors.password && (
							<span className="text-danger">This field is required</span>
						)}
					</div>
					<div className="form-group mb-3">
						<input
							type="password"
							className="form-control shadow-none"
							id="confirmPassword"
							placeholder="Confirm Password"
							{...register('confirmPassword', {
								required: true,
								minLength: 6,
								validate: (value) => value === watch('password'),
							})}
						/>
						{errors.confirmPassword && (
							<span className="text-danger">Password didn't match</span>
						)}
					</div>
					<button type="submit" className="btn btn-primary w-100 mb-3">
						Create an account
					</button>
					<p className="text-center">
						Already have an account?{' '}
						<Link to="/login" className="text-decoration-none">
							Login
						</Link>
					</p>
				</form>
				{/* <FireAuth /> */}
			</div>
		</div>
	);
};

export default SignUp;
