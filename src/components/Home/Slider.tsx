import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectCards } from "swiper/modules";
import Image from "next/image";

type SilderProps = {
    newsPage ?: boolean
}

export default function Slider({newsPage}) {
    return (
        <> 
        {newsPage ? 
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      :
            <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="p-2 select-none w-2/3"
            >
                <SwiperSlide>
                    <Image
                        src="/banner-1.png"
                        alt="banner1"
                        width={990}
                        height={200}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/banner-1.png"
                        alt="banner1"
                        width={990}
                        height={200}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/banner-1.png"
                        alt="banner1"
                        width={990}
                        height={200}
                    />
                </SwiperSlide>
            </Swiper>
}
        </>
    );
}
