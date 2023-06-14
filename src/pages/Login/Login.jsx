/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../../src/assets/images/login/login.png'

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 mt-20 w-1/2" >
                    <img className='bg-none border-none' alt="" src={img} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:mt-20">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-green-600">Sign In</h1>
                        {/* for error msg */}
                        <p className='text-red-600 text-center border border-green-400 rounded-lg font-semibold'></p>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text"
                                    name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className="btn bg-green-600 border-none text-white font-bold" />
                            </div>
                        </form>
                        <p className=' my-4 text-center'>New to Kids Zone? <Link to='/registration' className='text-green-600 font-bold'>Sign Up</Link> </p>
                        <hr />
                        <p className='text-center font-extrabold'>OR</p>
                        <button className="btn btn-outline btn-block border-green-500">Sign in with Google<FaGoogle className='ml-2 text-green-800'></FaGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;