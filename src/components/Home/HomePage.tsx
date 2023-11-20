import React from 'react'
import Topbar from '../Topbar/Topbar'
import Slider from './Slider'
import Course from '../Course/Course'

const HomePage = () => {
  return (
    <div className=' my-8 mx-36 place-content-center space-y-6'>
        <Slider />
        <h2 className="text-white-blue-400">Chào mừng đến với ITUTC2 Coder</h2>
        <h2 className="text-white-blue-400 text-2xl">ITUTC2 Coder</h2>
        <Course />
    </div>
  )
}

export default HomePage