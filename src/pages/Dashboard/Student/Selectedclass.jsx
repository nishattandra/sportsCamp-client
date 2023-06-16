// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Selectedclass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: bookedclasses = [] } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`https://assignment-12-server-sand-kappa.vercel.app/student/selectedclasses?email=${user?.email}`)
            return res.data;
        },
    })
    const handleDelete = item => {
                fetch(`https://assignment-12-server-sand-kappa.vercel.app/student/selectclass/${item._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            alert('Successfully Deleted')
                        }
                    })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Cover
                        </th>
                        <th>
                            Title
                        </th>
                        <th>Instructor</th>
                        <th>Email</th>
                        <th>Student</th>
                        <th>Available seat</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookedclasses.map(item =>
                            <tr key={item._id}>
                                <td>
                                    <img className="w-12" src={item.classphoto} alt="" />
                                </td>
                                <td>
                                    {item.classname}
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.student}
                                </td>
                                <td>
                                    {item.seat}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>

                                    <Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-outline btn-success btn-xs">Pay</button></Link>
                                    <button onClick={() => handleDelete(item)} className="btn btn-outline btn-error btn-xs">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Selectedclass;