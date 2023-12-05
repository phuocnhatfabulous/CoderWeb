import Image from 'next/image'
import React from 'react'
import Slider from './Slider'

const News = () => {
  return (
    <div className='flex xl:md:flex-row sm:flex-col bg-white-blue-50 gap-16 p-6'>
      <div className='w-1/2'>
        <a href="" className='h-full'>
          <div className=' w-full h-full relative p-6 flex flex-col gap-4'>
            <Image src="/news-1.jpg" alt='Ngày nhà giáo Việt Nam 20/11/2023 tại UTC2' width={500} height={500} className='object-cover shrink-0 w-full h-3/4 rounded-xl' />
            <span className=''> Trang trọng và đầy cảm xúc trong Chương   trình chào mừng ngày Nhà giáo Việt Nam 20/11 của UTC2</span>
          </div>
        </a>
      </div>
      <div className='flex '>
        <span className=''>Trang trọng và đầy cảm xúc trong Chương trình chào mừng ngày Nhà giáo Việt Nam 20/11 của UTC2</span>
        {/* <Slider newsPage={true} /> */}
      </div>
    </div>
  )
}

export default News