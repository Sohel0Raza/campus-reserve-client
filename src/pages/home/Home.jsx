import Gallery from "./gallery/Gallery";
import HomeBanner from "./homeBanner/HomeBanner";
import HomeCollege from "./homeCollege/HomeCollege";
import Testimonial from "./review/Testimonial";

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <HomeCollege/>
            <Gallery/>
            <Testimonial/>
        </div>
    );
};

export default Home;