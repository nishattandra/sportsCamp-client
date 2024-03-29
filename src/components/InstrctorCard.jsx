import useTitle from "../hook/useTitle";

const InstrctorCard = ({ instructor }) => {
    // console.log(instructor)
    const { name, email,photo } = instructor;
    useTitle('Instructors')
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto dark:text-white dark:bg-gray-500">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default InstrctorCard;