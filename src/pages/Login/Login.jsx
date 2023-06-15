/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../src/assets/images/login/login.png'
import { AuthContext } from '../../Providers/AuthProviders';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { signIn,  googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [errormsg, setErrormsg] = useState('');
    const { register, handleSubmit } = useForm();
    const [visible, setVisble] = useState(false);
    const handleVisiblity = () => {
        setVisble(visible ? false : true);
    };
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setErrormsg(error.message)
            })
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/registeredusers', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
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
                        <p className='text-center font-semibold'>{errormsg}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required  {...register("email")} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex'>
                                    <input type={visible ? "text" : "password"} required  {...register("password")} placeholder="password" className="input input-bordered" />
                                    <p onClick={handleVisiblity}>{visible ? "Hide" : "Show"}</p>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className="btn bg-green-600 border-none text-white font-bold" />
                            </div>
                        </form>
                        <p className=' my-4 text-center'>New to Kids Zone? <Link to='/registration' className='text-green-600 font-bold'>Sign Up</Link> </p>
                        <hr />
                        <p className='text-center font-extrabold'>OR</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-block border-green-500">Sign in with Google<FaGoogle className='ml-2 text-green-800'></FaGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;