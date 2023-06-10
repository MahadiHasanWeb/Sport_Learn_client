import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import img from '../../../assets/ban1.jpg'
import img2 from '../../../assets/ban2.jpg'


const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="hero h-[45vh] md:min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/1ZVfxf1/pexels-pavel-danilyuk-6295871e-1.jpg)` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h2 className='md:text-5xl text-xl font-bold tracking-wide leading-loose text-white '>Experience Excellence in Sports Education with <span className="text-blue-500">Sport Learn</span></h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero h-[45vh] md:min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h2 className='md:text-5xl text-xl font-bold tracking-wide leading-loose text-white '>Take Your Sporting Journey to New Heights with <span className="text-blue-500">Sport Learn</span></h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero h-[45vh] md:min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h2 className='md:text-5xl text-xl font-bold tracking-wide leading-loose text-white'>Embark on a Transformational Sporting Journey with <span className="text-blue-500">Sport Learn</span></h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;