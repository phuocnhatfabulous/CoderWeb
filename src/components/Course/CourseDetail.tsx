import Image from 'next/image'
import React from 'react'

const CourseDetail = () => {
  return (
    <div className='w-full h-full flex justify-center mt-6'>
      <div className='bg-white-blue-30 w-3/4 h-72 items-center rounded-lg shadow-xl flex flex-row p-4 justify-around'>
        <div className='w-3/4 space-y-3 flex flex-col pl-4'>
          <h1 className='text-3xl font-bold text-start text-dark-blue'>Khóa học</h1>
          <p className='description text-brand-orange font-semibold'>Khóa học lập trình cho người mới</p>
          <p className='description'> Giảng viên:  <span className='text-brand-orange'> Th.S Trần Thị Dung </span></p>
          <div className='flex space-x-2 items-center'>
            <Image src={'/alarm-clock.png'} alt='' width={20} height={20} />
            <p>Thời lượng: <span className='text-red-pastel-500'>4 giờ 45 phút</span></p>
          </div>
          <div className=' flex space-x-6 items-end mt-2'>
            <button className='bg-deep-blue rounded-lg p-2 text-white px-3'> Tham gia </button>
            <button className=' flex bg-brand-orange rounded-lg p-2 text-white px-3 space-x-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
              </svg>

              <span >Lưu</span>
            </button>
          </div>
        </div>
        <div className='w-1/4 pr-4'>
          <Image src='/course-1.png' alt='' width={500} height={400} className='rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default CourseDetail