import React from 'react';
import Image from 'next/image';

const CourseDetail = () => {
  return (
    <div
      onClick={() => { }}
      className="flex flex-col items-center justify-center relative gap-2 p-20 hover:text-neutral-800 transition cursor-pointer bg-white-blue-50 rounded-xl hover:bg-opacity-70">
      <div className="hover:inline-flex font-medium text-sm">
        <Image src="/1.png" alt='' fill className='object-cover rounded-xl'/>
      </div>
    </div>
  );
};

export default CourseDetail;
