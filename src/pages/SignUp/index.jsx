import React, { useContext } from 'react';
import './Register.css';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../Login/firebase.config';
// import FireAuth from './FireAuth';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };
	if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
	const onSubmit = (data) => {
		console.log(data);
		const { name, email, password } = data;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				console.log(response.user);
				updateUserName(name);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	const updateUserName = (name) => {
		const user = firebase.auth().currentUser;
		user
			.updateProfile({ displayName: name })
			.then(() => {
				console.log('Username Updated Successfully.');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="register d-flex justify-content-center align-items-center">
			<div className="register__main bg-white p-4" style={{ width: '450px' }}>
				<h3 className="register__head text-center mb-4">Create an Account</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group mb-3">
						<input
							type="text"
							className="form-control border-0 shadow-none"
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
							className="form-control border-0 shadow-none"
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
							className="form-control border-0 shadow-none"
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
							className="form-control border-0 shadow-none"
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
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</form>
				{/* <FireAuth /> */}
			</div>
		</div>
	);
};

export default SignUp;
