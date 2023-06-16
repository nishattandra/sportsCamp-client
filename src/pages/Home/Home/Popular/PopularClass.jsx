// import React from 'react';

import { useLoaderData } from "react-router-dom";
import ClassCard from "../../../../components/ClassCard";

const PopularClass = () => {
    const populars = useLoaderData()
    return (
        <div className="py-28 grid grid-cols-3 gap-5 px-5">
            {
                populars[0].map(item => <ClassCard key={item._id} item={item}></ClassCard>)
            }
        </div>
    );
};

export default PopularClass;