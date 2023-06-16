// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Enrolledclass = () => {
    const {user, loading} = useContext(AuthContext)
    const [enrolllasses, setEnrollclasses] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/student/enrollclasses?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>setEnrollclasses(data))
    },[user, loading])
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
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolllasses.map(item =>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Enrolledclass;