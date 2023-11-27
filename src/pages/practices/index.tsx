import Practice from '@/components/Practices/Practice';
import Topbar from '@/components/Topbar/Topbar';
import DefaultLayout from '@/components/layout/DefaultLayout';
import React from 'react';

const PracticePage = () => {
  return (
    <DefaultLayout title={'Luyện tập | ITUTC2'}>
      <div className=" my-8 place-content-center space-y-6">
        <Practice />
      </div>
    </DefaultLayout>
  );
};

export default PracticePage;
