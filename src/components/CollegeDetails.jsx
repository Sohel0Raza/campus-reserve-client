import { useLoaderData, useParams } from "react-router-dom";

const CollegeDetails = () => {
    const allColleges = useLoaderData()
    const { id } = useParams()
    const [college] = allColleges.filter(college => college._id === id)
    const { collegeName, researchHistory, researchWorks, numberOfResearch, collegeImage, admissionDate, admissionProcess, events, eventsDetails, sports, sportsCategories } = college
    return (
        <div>
            <div className="shadow-2xl border-b-[2px] border-[#3e8ee4] rounded-lg">
                <div className="p-10">
                    <div className="md:flex">
                        <div className="md:my-auto">
                            <h1 className="text-2xl md:text-4xl font-bold text-center">{collegeName}</h1>
                            <p className="text-center my-2">{researchHistory}</p>
                        </div>
                        <img src={collegeImage} className="rounded-lg shadow-2xl mr-5 mx-auto" />
                    </div>
                    <div>
                        <div className="my-5">
                            <h5 className="font-bold text-green-500">Research</h5>
                            <p>Research{researchWorks}</p>
                            <p>NumberOfResearch: {numberOfResearch}</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-red-500">Admission</h5>
                            <p>Date: {admissionDate}</p>
                            <p>Process: {admissionProcess}</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-[#3e8ee4] mt-5">Event & Sports</h5>
                            <p className="mt-2">Events {events.map(event => <li key={event}>{event}</li>)}</p>
                            <p className="my-2">EventsDetails: {eventsDetails}</p>

                            <p className="mt-2">Sports {sports.map(sport => <li key={sport}>{sport}</li>)}</p>
                            <p className="my-2">SportsDetails: {sportsCategories}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;