import React from 'react';
import FeatureContest from '../Home/FeatureContest';

const Contest = () => {
  return (
    <div className='space-y-6'>
        <h2 className="h2-title">Cuộc thi nổi bật</h2>
        <FeatureContest isScroll={true} />
      </div>
  );
};

export default Contest;
