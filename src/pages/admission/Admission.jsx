import { Link } from "react-router-dom";
import useCollege from "../../hooks/useCollege";

const Admission = () => {
    const [colleges, loading] = useCollege()
    if (loading) {
        return <div className="flex justify-center md:mt-40"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className="md:w-9/12 mx-auto mb-10 md:pt-28">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="font-semibold text-lg text-[#3c3a4f]">
                            <th>College Name</th>
                            <th>Admission Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {colleges.map(college => <tr key={college._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={college.collegeImage} alt="college" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link>
                                            <button className="font-bold underline">{college.collegeName}</button>
                                        </Link>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {college.admissionDate}
                            </td>
                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;