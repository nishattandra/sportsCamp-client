import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useInstructor from "../hook/useInstructor";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;