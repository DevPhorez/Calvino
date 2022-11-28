import CountUp from "react-countup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";


import "swiper/css";
import "swiper/css/pagination";

import './WhyUs.css'


function WhyUs () {
    return (
        <section style={ { marginTop: '8rem' } }>
            <div className="container text-lg-start text-center">
                <div className="row border-bottom p-1 pb-4 mb-4">
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                        <p className="text-primary">WHY CHOOSE US</p>
                        <h2 className='fw-bold mb-3' style={ { lineHeight: 1.4 } }>We are an SEO company that specializes in developing</h2>
                    </div>
	                
                    <div className="col-lg-6 d-none d-lg-flex justify-content-end align-items-center">
                        <button className="linear-button pointer position-relative">
                            Explore More
                            <div></div>
                        </button>
                    </div>
                </div>
	            <div className="row px-2 mb-3">
		            <div className="col-xl-5 col-lg-7 col-12">
			            <div className="row" style={ { marginTop: '2.5rem' } }>
				            <div className="col-xl-5 col-lg-5 col-6">
					            <div className="counter">
						            <CountUp className='text-primary h1 fw-bold display-4' enableScrollSpy={true} end={450} duration={3} />
						            <span className='text-primary h1 fw-bold display-5'>+</span>
					            </div>
					            <div className="counter-text">
						            <p style={ { fontSize: 14 } }>Successfully <br/> completed projects</p>
					            </div>
				            </div>
				            <div className="col-xl-5 col-lg-5 col-6">
					            <div className="counter">
						            <CountUp className='text-primary h1 fw-bold display-4' enableScrollSpy={true} end={860} duration={3} />
					            </div>
					            <div className="counter-text">
						            <p style={ { fontSize: 14 } }>Highly specialised employees</p>
					            </div>
				            </div>
			            </div>
		            </div>
		            <div className="col-xl-7 col-lg-5 col-12">
						<div className="about-right">
							<p>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
							<p>- Shonda Leer, Chief of Staff at Franclin Technologies</p>
						</div>
		            </div>
	            </div>
				<div className="slider d-none d-md-block">
					<Swiper
						slidesPerView={5}
						spaceBetween={70}
						slidesPerGroup={1}
						loop={true}
						loopFillGroupWithBlank={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className="mySwiper"
					>
						<SwiperSlide>
							<img src="/Images/brand1.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand2.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand3.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand4.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand1.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand2.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand3.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand4.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand1.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand2.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand3.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand4.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand1.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand2.png.webp" alt="inspire" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/Images/brand3.png.webp" alt="inspire" />
						</SwiperSlide>
					</Swiper>
				</div>
            </div>
        </section>
    )
}

export default WhyUs