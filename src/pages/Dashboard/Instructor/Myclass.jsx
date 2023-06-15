// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Myclass = () => {
    const {user, loading} = useContext(AuthContext)
    const [addedClasses, setAddedClasses] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000//instructor/addedclasses/${user?.email}`)
        .then(res => res.json())
        .then(data =>setAddedClasses(data))
    },[user, loading])
    console.log(addedClasses)
    return ( 
        <div className="px-5">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
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
                            addedClasses.map((item, index) =>

                                <tr key={item._id}>
                                    <th>
                                        {
                                            index + 1
                                        }
                                    </th>
                                    <td>
                                        <img className="w-8" src={item.classImage} alt="" />
                                    </td>
                                    <td>
                                        {
                                            item.className
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.instructorName
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.instructorEmail
                                        }
                                    </td>
                                    <td>$
                                        {
                                            item.price
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.students
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.seats
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.status
                                        }
                                    </td>
                                    <td>
                                        {
                                            (item.status == 'denied') && item.feedback
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