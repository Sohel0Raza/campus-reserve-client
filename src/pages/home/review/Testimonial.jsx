import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useReview from '../../../hooks/useReview';
import SectionTitle from '../../../components/SectionTitle ';

const Testimonial = () => {
    const [reviews, loading] = useReview()
    if (loading) {
        return <div className="flex justify-center md:mt-40"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className='mb-10'>
            <SectionTitle heading='College' subHeading='Review' />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => <SwiperSlide
                    key={review._id}>
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