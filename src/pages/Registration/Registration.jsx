/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../src/assets/images/login/login.png'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        if (data.password != data.confirmpassword) {
            return alert("Password not matched")
        }
        const newUser = { name: data.name, email: data.email, photo: data.photoURL }
        console.log(newUser)
        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(result.user, data.name, data.photoURL)
                logOut()
                    .then(() => {
                        fetch('http://localhost:5000/registeredusers', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(result => {
                                if (result.insertedId) {
                                    reset();
                                    alert("Successfully registered")
                                    navigate('/login');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
            })
    };
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row mt-20 ">
                <div className=" w-1/2 mr-12">
                    <img className='bg-none border-none' src={img} alt="" />
                </div>
                <div className="card w-1/2 flex-shrink-0 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-green-600">Sign Up</h1>
                        <p className='text-red-600 text-center border border-green-400 rounded-lg font-semibold'></p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name")} name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("confirmpassword", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
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