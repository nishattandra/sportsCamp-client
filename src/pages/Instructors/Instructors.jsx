// import React from 'react';

import { useEffect, useState } from "react";
import InstrctorCard from "../../components/InstrctorCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(()=>{
        fetch('https://assignment-12-server-sand-kappa.vercel.app/instructors')
        .then(res => res.json())
        .then(data =>setInstructors(data))
    },[])
    return (
        <div className="py-28 grid grid-cols-3 gap-5">
            {
                instructors.map(instructor => <InstrctorCard key={instructor._id} instructor={instructor}></InstrctorCard>)
            }

        </div>
    );
};

export default Instructors;