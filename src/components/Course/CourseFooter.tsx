import React from 'react';
import Image from 'next/image';

const CourseDetail = () => {
  return (
    <div
      onClick={() => { }}
      className={`
                flex
                cursor-pointer
                flex-row
                items-center
                justify-between
                gap-2
                rounded-b-xl
                bg-white-blue
                p-3
                transition
                hover:bg-opacity-70
                hover:text-neutral-800
                
            `}
    >
      <div className="text-sm font-normal space-y-1 items-center">
        <span className='text-brand-orange font-medium'>HTML CSS JS cơ bản</span>
        <div className='flex space-x-1 items-center text-dark-blue'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          <span className='view-count'>249</span>

        </div>
      </div>
      <div className="text-sm font-medium flex space-x-1 items-center text-dark-blue">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className='time'>3h50&apos;</span>
      </div>
    </div>
  );
};

export default CourseDetail;
