import Image from 'next/image'
import React from 'react'

const News = () => {
  return (
    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 relative bg-white-blue-50 h-6'>
      <div className=''>
        <Image src="/news-1.jpg" alt='Ngày nhà giáo Việt Nam 20/11/2023 tại UTC2' fill className='object-contain rounded-xl'/>
        <span> Trang trọng và đầy cảm xúc trong Chương trình chào mừng ngày Nhà giáo Việt Nam 20/11 của UTC2</span>
      </div>
      <div>
        <span className=''>Trang trọng và đầy cảm xúc trong Chương trình chào mừng ngày Nhà giáo Việt Nam 20/11 của UTC2</span>
      </div>
    </div>
  )
}

export default News