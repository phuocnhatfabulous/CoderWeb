import TeachPractice from '@/components/Practices/TeachPractice';
import Practice from '@/components/Practices/Practice';
import Topbar from '@/components/Topbar/Topbar';
import DefaultLayout from '@/components/layout/DefaultLayout';
import { useSetUserRole } from '@/hooks/useSetUserRole';
import Link from 'next/link';
import React, { useEffect } from 'react';

const PracticePage = () => {
  const userRole = useSetUserRole();

  return (
    <DefaultLayout title={'Luyện tập | ITUTC2'}>
      {userRole === 'sinhvien' ? (
        <div className=" my-8 place-content-center space-y-6">
          <Practice />
        </div>

      ) : userRole === 'giangvien' ? (
        <div className="my-8 place-content-center space-y-6 px-36">
          <div className='flex flex-col space-y-2'>
            <TeachPractice />
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

export default PracticePage;
