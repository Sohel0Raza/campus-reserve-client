import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReview] = useState([])
    console.log(reviews)
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='mb-10'>
            <h2 className="uppercase text-center text-3xl mt-20 font-semibold"><span className="text-[#D62929]">College</span> <span className="">Review</span></h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {reviews.map(review => <SwiperSlide
                    key={review.name}>
                    <div className='mx-24 text-center'>
                        <div className='h-12 w-12 mx-auto'>
                            <img src={review.image} alt="" />
                        </div>
                        <h4 className='text-2xl font-medium p-2 text-[#2E7FE9]'>{review.name}</h4>

                        <h4 className='text-xl font-semibold pb-2'>{review.collegeName}</h4>
                        <p className='pb-2'>{review.reviewDetails}</p>
                        <div className='h-9 w-[180px] mx-auto'>
                            <Rating
                                value={review.rating}
                                readOnly
                            />
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Testimonial;