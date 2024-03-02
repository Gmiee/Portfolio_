import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiLocationArrow1 } from "react-icons/ci";

import 'swiper/css';
import 'swiper/css/pagination';
import '../app/styles.css'

import { Mousewheel, Pagination } from 'swiper/modules';

const Carousel = () => {

    return (
        <>
            <div className='flex gap-4'>
                <Swiper
                    direction={'horizontal'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/06.jpg" alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/04.jpg" alt="img2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/05.jpg" alt="img3" />
                    </SwiperSlide>

                </Swiper>

                <div className="txt flex flex-wrap p-2 items-center">
                    We are currently conducting a humble initiative to provide meals for those in need.
                    <button className='bg-surface rounded-lg text-bp px-4 py-2 hover:bg-white dark:bg-black dark:text-white dark:hover:bg-blk flex justify-center gap-1 capitalize my-3'>
                        <a href='https://annapurnaa.in/' target='_blank'>
                            Join us now
                        </a>
                        <CiLocationArrow1 style={{ fontSize: '1.3rem' }} />
                    </button>

                </div>
            </div>
        </>
    )
}

export default Carousel;    
