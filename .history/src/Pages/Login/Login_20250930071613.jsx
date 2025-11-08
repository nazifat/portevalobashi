import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-base-200 py-5'>
            <div className="text-center lg:text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="hero bg-base-200">

                <div className="hero-content">

                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <span>Don't have an account? <Link to="/register" className='text-blue-400'>Register</Link> Now!</span>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;