// import React from 'react';

import { useEffect, useState } from "react";
import ClassCard from "../components/ClassCard";

const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(()=>{
        fetch('https://assignment-12-server-sand-kappa.vercel.app/classes')
        .then(res => res.json())
        .then(data=> setClasses(data))
    },[])
    return (
        <div className="pt-28 mx-5 grid grid-cols-3 gap-5">
            {
                classes.map(item => <ClassCard key={item._id} item={item}></ClassCard>)
            }
        </div>
    );
};

export default Classes;