import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";

const Main = () => {
    return (
        <div className="md:w-10/12 mx-auto">
            <Header />
            <div className='md:min-h-[calc(100vh-190px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;