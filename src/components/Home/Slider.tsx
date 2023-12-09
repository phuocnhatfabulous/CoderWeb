import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { news } from "../../../mockNews/news";

type SilderProps = {
  newsPage?: boolean
}

export default function Slider({ newsPage }) {
  return (
    <>
      {newsPage ?
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

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopAdditionalSlides={4}
          pagination={
            { clickable: true }
          }
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper-news relative"
        >
          {
            news.map((n, id) => {
              <SwiperSlide className="static" key={id}>
                <Image alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" width={500} height={500} className="w-full h-full" />
                <div className="static">
                  <span></span>
                </div>
              </SwiperSlide>
            })
          }
          <SwiperSlide className="static">
            <Image alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" width={500} height={500} className="w-full h-full" />
            <div className="static">
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" width={500} height={500} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" width={500} height={500} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" width={500} height={500} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" width={500} height={500} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" width={500} height={500} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" width={500} height={500} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" width={500} height={500} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" width={500} height={500} className="w-full h-full" />
          </SwiperSlide>
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
          className="swiper-dash p-2 select-none w-2/3"
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
