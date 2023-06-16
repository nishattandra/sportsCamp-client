// import React from 'react';

import { useLoaderData } from "react-router-dom";
import ClassCard from "../../../../components/ClassCard";

const PopularClass = () => {
    const populars = useLoaderData()
    return (
        <div>
            <h3 className='text-4xl font-bold text-center my-16 pt-16 dark:text-white'>Popular<span className='text-green-600'>Classes</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    populars[0].map(item => <ClassCard key={item._id} item={item}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;