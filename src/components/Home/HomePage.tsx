import React from 'react'
import Slider from './Slider'
import Course from '../Course/Course'
import News from './News'
import Blogs from './Blogs'
import FeatureContest from './FeatureContest'

const HomePage = () => {
  return (
    <div className=' my-8 place-items-center space-y-8'>
      <Slider newsPage={false} blogPart={false}/>
      <h2 className="text-brand-orange">Chào mừng đến với <span className='text-xl m-1 font-bold'>ITUTC2 Coder</span></h2>
      <div className='space-y-6'>
        <h2 className="h2-title">Tin tức & thông báo</h2>
        <News />
        <div className='text-viewmore flex space-x-1 w-full justify-center'>
          <span className='underline underline-offset-4'>Xem thêm</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" animate-bounce w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className='space-y-6'>
        <h2 className="h2-title">Khóa học</h2>
        <Course />
        <div className='text-viewmore flex space-x-1 w-full justify-center'>
          <span className='underline underline-offset-4'>Xem thêm</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" animate-bounce w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className='space-y-6'>
        <h2 className="h2-title">Cuộc thi nổi bật</h2>
        <FeatureContest />
      </div>
      <div className='space-y-6'>
        <h2 className="h2-title">Sinh viên IT nói gì về Bộ môn IT UTC2</h2>
        <Blogs />
      </div>
    </div>
  )
}

export default HomePage