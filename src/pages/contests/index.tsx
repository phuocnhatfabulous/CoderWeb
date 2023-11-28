import Contest from '@/components/Contest/Contest';
import DefaultLayout from '@/components/layout/DefaultLayout';
import React from 'react';

const ContestPage = () => {
  return (
    <DefaultLayout title={'Cuộc thi | ITUTC2'}>
      <div className=" my-8 place-content-center space-y-6">
        <Contest />
      </div>
    </DefaultLayout>
  );
};

export default ContestPage;
