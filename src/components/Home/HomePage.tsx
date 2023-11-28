import React from 'react'
import Topbar from '../Topbar/Topbar'
import Slider from './Slider'
import Course from '../Course/Course'

const HomePage = () => {
  return (
    <div className=' my-8 place-content-center space-y-6'>
        <Slider />
        <h2 className="text-white-blue-400">Chào mừng đến với <span className='text-xl m-1 font-bold'>ITUTC2 Coder</span></h2>
        <h2 className="text-brand-orange text-2xl font-bold">Tin tức & thông báo</h2>
        <h2 className="text-brand-orange text-2xl font-bold">Khóa học</h2>
        <Course />
        <h2 className="text-brand-orange text-2xl font-bold">Cuộc thi nổi bật</h2>
        <h2 className="text-brand-orange text-2xl font-bold">Sinh viên IT nói gì về Bộ môn IT UTC2</h2>
    </div>
  )
}

export default HomePage