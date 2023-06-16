import InstrctorCard from "../../../../components/InstrctorCard";
import { useLoaderData } from "react-router-dom";

const PopularInstructor = () => {
    const populars = useLoaderData()
    return (
        <>
            <h3 className='text-4xl font-bold text-center pt-16 my-16 dark:text-white'>Popular<span className='text-green-600'>Instructor</span></h3>
            <div className=" pb-28 grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    populars[1].map(instructor => <InstrctorCard key={instructor._id} instructor={instructor}></InstrctorCard>)
                }

            </div>
        </>
    );
};

export default PopularInstructor;