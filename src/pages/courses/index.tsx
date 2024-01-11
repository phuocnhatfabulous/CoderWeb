import Course from '@/components/Course/Course';
import Topbar from '@/components/Topbar/Topbar';
import React from 'react';
import Slider from '@/components/Home/Slider';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Image from 'next/image';
import { useSetUserRole } from '@/hooks/useSetUserRole';
import TeachCourse from '@/components/Course/TeachCourse';
import Link from 'next/link';

const CoursePage = () => {
  const userRole = useSetUserRole();

  return (
    <DefaultLayout title={'Khóa học | ITUTC2'}>
      {userRole === 'sinhvien' ? (
        <div className="my-8 place-content-center space-y-6 px-36">
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
      ) : userRole === 'giangvien' ? (
        <div className="my-8 place-content-center space-y-6 px-36">
          <div className='flex flex-col space-y-2'>
            <TeachCourse />
          </div>
        </div>
      ) : (
        <div className='items-center justify-center w-full h-full flex'>
          <p className='text-center font-bold text-dark-blue text-xl shadow-md'>
            Bạn không có quyền truy cập trang này. Quay lại <Link href='/' className='underline underline-offset-1 text-brand-orange'>Trang chủ</Link>
          </p>
        </div>
      )}
    </DefaultLayout>
  );
};


export default CoursePage;
