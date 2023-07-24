import { Link } from "react-router-dom";

const Card = ({ college }) => {
    const { _id, collegeName, collegeImage, admissionDate, researchHistory } = college
    return (
        <div>
            <div className="card m-10 md:m-0 shadow-2xl shadow-[#85D2F2] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                <div className="h-[180px]">
                    <img className="h-full w-full rounded-lg" src={collegeImage} alt="collegeImage" />
                </div>
                <div className="card-body">
                    <h2 className="card-title justify-center">{collegeName}</h2>
                    <p>{researchHistory}</p>
                    <p className="text-[#D62929] font-semibold">Admission On: {admissionDate}</p>
                    <div className="card-actions">
                        <Link to={`/collegeDetails/${_id}`}> <button className="btn-primary">View</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;