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
import { news } from "../../mockNews/news";
import Link from "next/link";

type SilderProps = {
  newsPage?: boolean
  blogPart?: boolean
}

export default function Slider({ newsPage, blogPart }) {

  return (
    <>
      {
        newsPage ?
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}

            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
              scale: 0.9
            }}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            loopAdditionalSlides={1}
            pagination={
              { clickable: true }
            }
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="swiper-news relative rounded-xl sm:w-full"
          >
            {
              news.map((n) => {
                const getShortenedName = () => {
                  if (n?.title.length <= 135) {
                    return n?.title;
                  } else {
                    return `${n?.title.substring(0, 135)} ...`;
                  }
                }
                return (
                  <SwiperSlide className="relative" key={n.id}>
                    <Link className="backdrop-blur-sm" href={n.link}>
                      <Image alt={n.title} src={n.thumbnail} width={500} height={500} className="w-full h-full rounded-xl" />
                      <div className="absolute bottom-2 bg-slate-500/30 z-50 p-2 flex items-center drop-shadow-xl m-2 rounded-xl backdrop-blur-sm hover:underline-offset-1 hover:underline text-white-blue">
                        <span className="text-white-blue sm:text-sm hover:underline-offset-1 hover:underline"> {getShortenedName()} </span>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          :
          blogPart ?
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              className="swiper-dash p-2 select-none w-2/3 rounded-xl"
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
            </Swiper >
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
              className="swiper-dash p-2 select-none w-2/3 rounded-xl"
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
