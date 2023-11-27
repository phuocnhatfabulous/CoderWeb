import React from 'react';
import Image from 'next/image';

const CourseDetail = () => {
  return (
    <div
      onClick={() => {}}
      className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                p-20
                m-5
                hover:text-neutral-800
                transition
                cursor-pointer
                bg-white-blue
                rounded-xl
                hover:bg-opacity-70
            `}
    >
      <div className="hover:inline-flex font-medium text-sm  ">
        <Image src="/1.png" alt="" width={100} height={100} className='hover:translate-y-4  hover:bg-opacity-70' />
      </div>
    </div>
  );
};

export default CourseDetail;
