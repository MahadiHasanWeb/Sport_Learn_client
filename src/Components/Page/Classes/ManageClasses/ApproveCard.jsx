

const ApproveCard = ({ data }) => {
    const { ClassImage, availableSeats, className, instructorName, price } = data;


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={ClassImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><span className="font-semibold">Instructor Name:</span> {instructorName}</p>
                <p><span className="font-semibold">Available Seats:</span> {availableSeats}</p>
                <p><span className="font-semibold">Price:</span> ${price}</p>
                <div className="card-actions">
                    <button className="button button-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ApproveCard;