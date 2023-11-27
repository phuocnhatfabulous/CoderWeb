import Practice from '@/components/Practices/Practice';
import Topbar from '@/components/Topbar/Topbar';
import React from 'react';

const PracticePage = () => {
  return (
    <div className="min-h-screen bg-dark-layer-2 ">
      <div className="flex">
        <Topbar />
      </div>
      <Practice />
    </div>
  );
};

export default PracticePage;
