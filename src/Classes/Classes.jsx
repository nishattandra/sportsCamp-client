// import React from 'react';

import { useEffect, useState } from "react";
import ClassCard from "../components/ClassCard";

const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data=> setClasses(data))
    },[])
    console.log(classes)
    return (
        <div className="pt-28 mx-5 grid grid-cols-3 gap-5">
            {
                classes.map(item => <ClassCard key={item._id} item={item}></ClassCard>)
            }
        </div>
    );
};

export default Classes;