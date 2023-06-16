import InstrctorCard from "../../../../components/InstrctorCard";
import { useLoaderData } from "react-router-dom";

const PopularInstructor = () => {
    const populars = useLoaderData()
    return (
        <div className="py-28 grid grid-cols-3 gap-5">
            {
                populars[1].map(instructor => <InstrctorCard key={instructor._id} instructor={instructor}></InstrctorCard>)
            }

        </div>
    );
};

export default PopularInstructor;