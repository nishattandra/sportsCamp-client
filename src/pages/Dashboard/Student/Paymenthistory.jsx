// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Paymenthistory = () => {
    const {user, loading} = useContext(AuthContext)
    const [payments, setPayments] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/student/payments?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>setPayments(data))
    },[user, loading])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>Instructor</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Transction ID</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments?.map(item =>
                            <tr key={item._id}>
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
                                    {item.price}
                                </td>
                                <td>
                                    {item.transactionId}
                                </td>
                                <td>{
                                    item.date
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Paymenthistory;