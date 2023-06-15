const InstrctorCard = ({ instructor }) => {
    // console.log(instructor)
    const { name, email,photo } = instructor;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">NAme: {name}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default InstrctorCard;