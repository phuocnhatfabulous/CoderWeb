import Course from '@/components/Course/Course';
import Topbar from '@/components/Topbar/Topbar';
import React from 'react';
import Slider from '@/components/Home/Slider';
import DefaultLayout from '@/components/layout/DefaultLayout';

const CoursePage = () => {
  return (
    <DefaultLayout title={'Khóa học | ITUTC2'}>
      <div className=" my-8 place-content-center space-y-6 px-36">
        <div className='flex flex-col space-y-4'>
          <h2> Khóa học của tôi</h2>
          <Course />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CoursePage;
