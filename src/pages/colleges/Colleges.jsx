import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Colleges = () => {
    const [allCollege, setAllCollege] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setAllCollege(data))
    }, [])
    return (
        <div>
            <h2 className="uppercase text-center text-3xl mb-10 md:my-20 font-semibold"><span className="text-[#D62929]">All</span> <span className="">College</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {allCollege.map(college => <Card
                    key={college.collegeName}
                    college={college}
                ></Card>)}
            </div>
        </div>
    );
};

export default Colleges;