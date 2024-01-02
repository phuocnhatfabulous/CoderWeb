import React from 'react'
import Slider from './Slider'

const Blogs = () => {
  return (
    <div className='items-center flex flex-col'>
      <Slider newsPage={false} blogPart={true} />
    </div>
  )
}

export default Blogs