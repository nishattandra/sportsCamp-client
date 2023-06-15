// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const Manageuser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: registeredusers = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/admin/registeredusers')
        return res.data;
    })
    const updateType = async(id, type) => {try {
            const response = await axiosSecure.patch(`/admin/typeupdate/${id}?type=${type}`);
            console.log(response)
            refetch()
          } catch (error) {
           console.log(error)
          }
    }

    return (
        <div className="overflow-x-auto mt-24">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registeredusers.map(user =>
                            <tr key={user._id}>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td>
                                    <h1>{user.name}</h1>
                                </td>
                                <td>
                                <h1>{user.email}</h1>
                                </td>
                                <td>
                                <h1>{user.type?user.type:'student'}</h1>
                                </td>
                                <td>
                                <button disabled={user.type === 'admin'} onClick={() => updateType(user._id, 'admin')} className="btn btn-error">Make Admin</button>
                                </td>
                                <td>
                                <button disabled={user.type === 'instructor'} onClick={() => updateType(user._id, 'instructor')} className="btn btn-success">Make Instructor</button>
                                </td>
                            </tr>)
                    }


                </tbody>

            </table>
        </div>
    );
};

export default Manageuser;