import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <h1 className="text-5xl font-bold">Register Now!</h1>
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co.com/nsZGCMmm/illustration-what-is-two-factor-authentication-2fa-and-how-to-set-it-up-securely-768x504.png" alt="" />

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <input type="password" className="input" placeholder="Retype Password" />
                            <button className="btn btn-neutral mt-4">Register Now</button>
                            <span>Already have account? <Link to="/login" className='text-blue-500'>Login</Link> Now!</span>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;