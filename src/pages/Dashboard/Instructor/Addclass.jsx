// import React from 'react';

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Addclass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.student = 0;
        data.condition = "pending";
        data.price = parseFloat(data.price);
        data.seat = parseFloat(data.seat);
        axiosSecure.post('/instructor/addclasses', data)
            .then(data => {
                if (data.data.insertedId) {
                    alert('Data added')
                    reset()
                }
            })
    };
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row mt-20">
                <div className="card w-96 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-green-600">Add Class</h1>
                        <p className='text-red-600 text-center border border-green-400 rounded-lg font-semibold'></p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text"  {...register("classname")} name="classname" placeholder="Class Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Photo</span>
                                </label>
                                <input type="text"  {...register("classphoto")} name="classphoto" placeholder="Class Photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input value={user.displayName} type="text"  {...register("instructor")} name="instructor" placeholder="instructor" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input value={user.email}  type="text"  {...register("email")} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available seats</span>
                                </label>
                                <input type="text"  {...register("seat")} name="seat" placeholder="seat" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text"  {...register("price")} name="price" placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Add Class" className="btn bg-green-600 border-none text-white font-bold " />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addclass;