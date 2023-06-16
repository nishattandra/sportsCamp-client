import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";

const ClassCard = ({ item }) => {
    const [axiosSecure] = useAxiosSecure();
    const { _id, classname, classphoto, instructor, email, price, seat, student } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleSelect = () => {

        if (user && user.email) {
            const selectedclass = { classid: _id, classphoto, classname, instructor, email, price, seat, student, useremail: user.email, status: 'booked' }
            axiosSecure.post('/student/selectclasses', selectedclass)
                .then(data => {
                    if (data.data.insertedId) {
                        alert('Selected')
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Login first to select class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-80 bg-base-100 shadow-xl dark:text-white dark:bg-gray-500">
            <figure><img src={classphoto} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{classname}</h2>
                <p>Instructor: {instructor}</p>
                <p>Email: {email}</p>
                <p>Available Seats: {seat}</p>
                <p>Students: {student}</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleSelect} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;