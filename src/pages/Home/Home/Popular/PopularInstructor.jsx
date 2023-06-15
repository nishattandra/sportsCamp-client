import { useEffect, useState } from "react";
import InstrctorCard from "../../../../components/InstrctorCard";

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data =>setInstructors(data))
    },[])
    return (
        <div className="py-28 grid grid-cols-2 gap-5">
            {
                instructors.map(instructor => <InstrctorCard key={instructor._id} instructor={instructor}></InstrctorCard>)
            }

        </div>
    );
};

export default PopularInstructor;