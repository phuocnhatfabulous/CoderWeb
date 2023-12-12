import Image from 'next/image';
import React from 'react';
import Slider from './Slider';

const News = () => {
  return (
    <div className='flex xl:md:flex-row sm:flex-col gap-16 p-6 shadow-lg shadow-slate-400 rounded-xl'>
      <div className='xl:lg:w-1/2 md:sm:w-full'>
        <a href="" className='h-full select-text'>
          <div className=' w-full h-full relative p-6 flex flex-col gap-4 select-text'>
            <Image src="/news-1.jpg" alt='Ngày nhà giáo Việt Nam 20/11/2023 tại UTC2' width={500} height={500} className='object-cover shrink-0 w-full h-3/4 rounded-xl' />
            <span className='select-text cursor-text'> Trang trọng và đầy cảm xúc trong Chương trình chào mừng ngày Nhà giáo Việt Nam 20/11 của UTC2</span>
          </div>
        </a>
      </div>
      <div className='xl:lg:w-1/2 md:sm:w-full items-center flex flex-row'>
        <Slider newsPage={true} blogPart={false} />
      </div>
    </div>
  )
}

export default News;
