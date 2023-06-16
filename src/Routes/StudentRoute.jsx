import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useStudent from "../hook/useStudent";
import { Navigate, useLocation } from "react-router-dom";

const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;