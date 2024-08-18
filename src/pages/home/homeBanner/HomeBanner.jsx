import Lottie from "lottie-react";
import animationData from "../../../../public/animation_lkdvh45x.json";
import { HiArrowNarrowRight } from "react-icons/hi";
const HomeBanner = () => {
  return (
    <div>
      <div className="md:flex justify-center items-center mx-auto mb-5 md:pt-10">
        <div className="md:py-5 md:w-1/2 pt-20 md-pt-0">
          <h2 className="text-2xl md:text-4xl font-bold leading-7 italic md:leading-10 p-5">
            <span className="text-[#2E7FE9]">Unlock Your</span> <br />
            <span className="text-[#151A4F]"> Academic Journey </span>
          </h2>
          <p className="text-gray-600 px-5">
            This is best for your go-to platform for discovering, applying, and securing your dream college. Our user-friendly interface allows you to explore a wide array of colleges, each with detailed information on admission dates, events, sports, research history, and more.
          </p>
          <button className="btn-outlined flex justify-center items-center">
            Read More
            <HiArrowNarrowRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 ">
          <Lottie className="w-full md:pb-10" animationData={animationData} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner