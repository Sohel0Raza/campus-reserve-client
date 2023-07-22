import { useEffect, useState } from "react";
import Card from "../../../components/Card";

const HomeCollege = () => {
    const [allCollege, setAllCollege] = useState([])
    useEffect(()=>{
        fetch('colleges.json')
        .then(res=> res.json())
        .then(data=> setAllCollege(data))
    },[])
    return (
        <div>
            <h2 className="uppercase text-center text-3xl mb-10 md:mb-20 font-semibold"><span className="text-[#D62929]">Suggest</span> <span className="">College</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {allCollege.slice(0,3).map(college => <Card 
                key={college.collegeName}
                college={college}
                ></Card>)}
            </div>
        </div>
    );
};

export default HomeCollege;