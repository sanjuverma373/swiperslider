import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react'

const Swipslider = () => {
        return (
                <div>
                        <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                loop={true} >
                                <SwiperSlide className=' bg-slate-600 w-20 h-40 flex items-center justify-center'>Slide 1</SwiperSlide>
                                <SwiperSlide className=' bg-slate-400 w-20 h-40 flex items-center justify-center'>Slide 2</SwiperSlide>
                                <SwiperSlide className=' bg-red-500 w-20 h-40 flex items-center justify-center'>Slide 3</SwiperSlide>
                                <SwiperSlide className=' bg-amber-300 w-20 h-40 flex items-center justify-center'>Slide 4</SwiperSlide>
                                <SwiperSlide className=' bg-slate-600 w-20 h-40 flex items-center justify-center'>Slide 1</SwiperSlide>
                                <SwiperSlide className=' bg-slate-400 w-20 h-40 flex items-center justify-center'>Slide 2</SwiperSlide>
                                <SwiperSlide className=' bg-red-500 w-20 h-40 flex items-center justify-center'>Slide 3</SwiperSlide>
                                <SwiperSlide className=' bg-amber-300 w-20 h-40 flex items-center justify-center'>Slide 4</SwiperSlide>
                                ...
                        </Swiper>
                </div>
        )
}

export default Swipslider
