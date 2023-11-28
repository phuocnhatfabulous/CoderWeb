import React from 'react';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Ranking from '@/components/Ranking/Ranking';

const RankPage = () => {
  return (
    <DefaultLayout title={'Xếp hạng | ITUTC2'}>
      <div className=" my-8 place-content-center space-y-6">
        <Ranking />
      </div>
    </DefaultLayout>
  );
};

export default RankPage;
