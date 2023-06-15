// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Myclass = () => {
    const {user, loading} = useContext(AuthContext)
    const [addedClasses, setAddedClasses] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/instructor/addedclasses/${user?.email}`)
        .then(res => res.json())
        .then(data =>setAddedClasses(data))
    },[user, loading])
    return ( 
        <div className="px-5">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Banner</th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Contact</th>
                            <th>Price</th>
                            <th>Enrolled</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Admin Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedClasses.map((item) =>

                                <tr key={item._id}>
                                    <td>
                                        <img className="w-8" src={item.classphoto} alt="" />
                                    </td>
                                    <td>
                                        {
                                            item.classname
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.instructor
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.email
                                        }
                                    </td>
                                    <td>$
                                        {
                                            item.price
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.student
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.seat
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.condition
                                        }
                                    </td>
                                    <td>
                                        {
                                            (item.condition == 'denied') && item.feedback
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myclass;