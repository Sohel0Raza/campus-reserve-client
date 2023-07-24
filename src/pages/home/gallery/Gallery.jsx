import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';
import img2 from "../../../assets/gallery/img2.png";
import img3 from "../../../assets/gallery/img3.png";
import img4 from "../../../assets/gallery/img4.png";
import img5 from "../../../assets/gallery/img5.png";
import img6 from "../../../assets/gallery/img6.png";
import img7 from "../../../assets/gallery/img7.png";
import img8 from "../../../assets/gallery/img8.png";



const Gallery = () => {
    return (
        <div className='text-center mt-10'>
            <h2 className="uppercase text-center text-3xl mb-10 md:mt-20 font-semibold"><span className="text-[#D62929]">Photo</span> <span className="">Gallery</span></h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img8} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;