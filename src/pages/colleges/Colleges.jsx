import Card from "../../components/Card";
import SectionTitle from "../../components/SectionTitle ";
import useCollege from "../../hooks/useCollege";

const Colleges = () => {
    const [colleges, loading] = useCollege()
    if (loading) {
        return <div className="flex justify-center pt-28"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className="pt-24"> 
            <SectionTitle heading='All' subHeading='College' ></SectionTitle>
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