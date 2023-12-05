import HomeWork from '@/components/HomeWork/HomeWork';
import Topbar from '@/components/Topbar/Topbar';
import DefaultLayout from '@/components/layout/DefaultLayout';
import React from 'react';

const HomeworkPage = () => {
  return (
    <DefaultLayout title={'Bài tập | ITUTC2'}>
      <div className=" my-8 place-content-center space-y-6">
        <HomeWork />
      </div>
    </DefaultLayout>
  );
};

export default HomeworkPage;
