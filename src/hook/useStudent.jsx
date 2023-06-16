// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/users/checkstudent/${user?.email}`);
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;