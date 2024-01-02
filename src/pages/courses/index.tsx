import Course from '@/components/Course/Course';
import Topbar from '@/components/Topbar/Topbar';
import React from 'react';
import Slider from '@/components/Home/Slider';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Image from 'next/image';

const CoursePage = () => {
  return (
    <DefaultLayout title={'Khóa học | ITUTC2'}>
      <div className=" my-8 place-content-center space-y-6 px-36">
        <div className='flex flex-col space-y-2'>
          <h2 className='h2-title text-deep-blue text-left'> Khóa học của tôi</h2>
          <Course />
          
        </div>
        <div className='items-center w-full flex flex-row justify-center'>
          <Image alt='' src="/atom-react.png" width={32} height={32} className='animate-spin ' />
        </div>
        <div className='flex flex-col space-y-4'>
          <h2 className='h2-title text-deep-blue text-left'> Khóa học của tôi</h2>
          <Course />
        </div>
        <div className='items-center w-full flex flex-row justify-center'>
          <Image alt='' src="/atom-react.png" width={32} height={32} className='animate-spin ' />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CoursePage;
