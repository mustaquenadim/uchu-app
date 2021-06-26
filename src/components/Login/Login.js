import React, { useContext } from 'react';
import './Login.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';

const Login = () => {
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
        const { email, password } = data;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response.user);
                setLoggedInUser(response.user);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const storeAuthToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(function (idToken) {
                console.log(idToken);
            })
            .catch(function (error) {
                // Handle error
            });
    };

    return (
        <div className='login d-flex justify-content-center align-items-center'>
            <div className='p-4 bg-white login__main' style={{ width: '450px' }}>
                <h3 className='login__head text-center mb-4'>Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group mb-3'>
                        <input type='email' className='form-control border-0 shadow-none' id='email' placeholder='Enter your email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && <span className='text-danger'>Please enter a valid email</span>}
                    </div>
                    <div className='form-group mb-3'>
                        <input type='password' className='form-control border-0 shadow-none' id='password' placeholder='Enter your password' {...register('password', { required: true, minLength: 6 })} />
                        {errors.password && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='form-group form-check'>
                        <input type='checkbox' className='form-check-input shadow-none' id='rememberMe' />
                        <label className='form-check-label' htmlFor='rememberMe'>
                            Remember Me
                        </label>
                    </div>
                    <p>Forgot Password?</p>
                    <button type='submit' className='btn btn-primary w-100 mb-3'>
                        Login
                    </button>
                    <p className='text-center'>
                        Don't have an account? <Link to='/register'>Create an account</Link>
                    </p>
                </form>
                {/* <FireAuth /> */}
            </div>
        </div>
    );
};

export default Login;
