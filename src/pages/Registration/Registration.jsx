/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/assets/images/login/login.png'

const Registration = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row mt-20">
                <div className=" w-1/2 mr-12">
                    <img className='bg-none border-none' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-green-600">Sign Up</h1>
                        <p className='text-red-600 text-center border border-green-400 rounded-lg font-semibold'></p>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    name='photo' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn bg-green-600 border-none text-white font-bold " />
                            </div>
                        </form>
                        <p className=' my-4 text-center'>Already Have an Account? <Link to='/login' className='text-green-600 font-bold'>Sign In</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;