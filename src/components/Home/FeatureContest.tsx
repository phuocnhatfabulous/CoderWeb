import Image from 'next/image'
import React from 'react'

const FeatureContest = () => {
  return (
    <div className='flex xl:md:flex-row sm:flex-col gap-16 p-6 shadow-lg shadow-slate-400 rounded-xl'>
      <div className='xl:lg:w-3/4 md:sm:w-full'>
        <span className='contest-title flex space-x-2 text-brand-orange'>
          <p className='font-bold'>CUỘC THI: </p>
          <p className='font-medium'> Code War 2023 </p>
        </span>
        <span className='contest-description text-base text-dark-blue'>
          <p>🎯 Là sân chơi để sinh viên thể hiện năng lực về lập trình, tạo môi trường thực hành để sinh viên rèn luyện trở thành những chuyên gia công nghệ, những lập trình viên có chất lượng. </p>
          <p>🎯 Dành cho sinh viên Việt Nam đang học tập tại các trường đại học, cao đẳng và học viện trên toàn quốc. Đăng ký dự thi theo đội gồm tối đa 03 thành viên (có thể là sinh viên ở cùng trường hoặc ở các trường khác nhau).</p>
        </span>
      </div>
      <div className='xl:lg:w-1/4 md:sm:w-full items-center flex flex-row'>
        <Image src="https://utc2.edu.vn/images/041220230724_theqL.jpg" alt='' width={500} height={500} className='w-full h-full rounded-xl' />
      </div>
    </div>
  )
}

export default FeatureContest