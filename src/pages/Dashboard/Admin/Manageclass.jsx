// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useState } from "react";

const Manageclass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/admin/manageclasses')
        return res.data;
    })
    const updateCondition = async (id, condition) => {
        try {
            const response = await axiosSecure.patch(`/admin/conditionupdate/${id}?condition=${condition}`);
            console.log(response)
            refetch()
        } catch (error) {
            console.log(error)
        }
    }
    const [fieldValue, setFieldValue] = useState('');
    const [feedbackItemId, setFeedbackItemId] = useState('')
    const handleId = (id) =>{
        setFeedbackItemId(id)
    }
    const handleFeedback = (feedback) => {
        fetch(`https://assignment-12-server-sand-kappa.vercel.app/admin/feedback/${feedbackItemId}?feedback=${feedback}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    alert("Feedback Successful")
                }
            })
        setFieldValue('')
    }
    return (
        <div className="overflow-x-auto mt-24">
            <div>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button htmlFor="my-modal-3" className="btn btn-sm btn-circle bg-red-600 btn-ghost absolute left-2 top-2">✕</button>
                        <div className="flex flex-col p-5 gap-5">
                            <input className='bg-gray-100 px-5 pt-5 rounded'
                                type="text"
                                value={fieldValue}
                                onChange={(e) => setFieldValue(e.target.value)}
                             placeholder="Feedback"/>
                            <button className="bg-green-600 text-white font-semibold rounded pb-1" onClick={() => handleFeedback(fieldValue)}>Submit</button>
                        </div>
                    </form>
                </dialog>
            </div>
            <table className="table text-xs">
                {/* head */}
                <thead>
                    <tr >
                        <th className="text-xs">
                            Photo
                        </th>
                        <th className="text-xs">Title</th>
                        <th className="text-xs">Instructor</th>
                        <th className="text-xs">Email</th>
                        <th className="text-xs">Price</th>
                        <th className="text-xs">Student</th>
                        <th className="text-xs">Seat</th>
                        <th className="text-xs">Condition</th>
                        <th className="text-xs">Approve</th>
                        <th className="text-xs">Declined</th>
                        <th className="text-xs">Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map(item =>
                            <tr key={item._id}>
                                <th>
                                    <img className="w-12" src={item.classphoto} alt="" />
                                </th>
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
                                    {item.student}
                                </td>
                                <td>
                                    {item.seat}
                                </td>
                                <td>
                                    {item.condition}
                                </td>
                                <th>
                                    <button disabled={item.condition === 'approved' || item.condition === 'denied'} onClick={() => updateCondition(item._id, 'approved')} className="btn btn-success btn-xs">Approve</button>
                                </th>
                                <th>
                                    <button disabled={item.condition === 'approved' || item.condition === 'denied'} onClick={() => updateCondition(item._id, 'denied')} className="btn btn-error btn-xs">Deny</button>
                                </th>
                                <th>
                                    <button onClick={() => {window.my_modal_3.showModal(); handleId(item._id)}} className="btn btn-secondary btn-xs">Feedback</button>
                                </th>
                            </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default Manageclass;