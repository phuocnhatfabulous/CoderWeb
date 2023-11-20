import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="p-2"
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
        </>
    );
}
