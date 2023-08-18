import Card from "../../../components/Card";
import SectionTitle from "../../../components/SectionTitle ";
import useCollege from "../../../hooks/useCollege";

const HomeCollege = () => {
    const [colleges, loading] = useCollege()
    if (loading) {
        return <div className="flex justify-center md:mt-40"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className="md:mb-20">
            <SectionTitle heading='Suggest' subHeading='College' />
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
                {colleges.slice(0, 3).map(college => <Card
                    key={college._id}
                    college={college}
                ></Card>)}
            </div>
        </div>
    );
};

export default HomeCollege;