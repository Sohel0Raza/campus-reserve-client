import Card from "../../components/Card";
import useCollege from "../../hooks/useCollege";

const Colleges = () => {
    const [colleges, loading] = useCollege()
    if (loading) {
        return <div className="flex justify-center md:mt-40"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div>
            <h2 className="uppercase text-center text-3xl mb-10 md:mb-20 md:pt-28 font-semibold"><span className="text-[#D62929]">All</span> <span className="">College</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {colleges.map(college => <Card
                    key={college.collegeName}
                    college={college}
                ></Card>)}
            </div>
        </div>
    );
};

export default Colleges;