// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const Manageclass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/admin/manageclasses')
        return res.data;
    })
    const updateCondition = async(id, condition) => {try {
            const response = await axiosSecure.patch(`/admin/conditionupdate/${id}?condition=${condition}`);
            console.log(response)
            refetch()
          } catch (error) {
           console.log(error)
          }
    }
    // console.log(classes)
    return (
        <div className="overflow-x-auto mt-24">
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
                                    <button disabled={item.condition === 'approved' || item.condition === 'denied'} onClick={() => updateCondition(item._id, 'approved')}  className="btn btn-success btn-xs">Approve</button>
                                </th>
                                <th>
                                    <button disabled={item.condition === 'approved' || item.condition === 'denied'} onClick={() => updateCondition(item._id, 'denied')} className="btn btn-error btn-xs">Deny</button>
                                </th>
                                <th>
                                    <button className="btn btn-secondary btn-xs">Feedback</button>
                                </th>
                            </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default Manageclass;