import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CourseHeaderProps = {
  thumbnail: string
};

const CourseHeader: React.FC<CourseHeaderProps> = ({
  thumbnail
}) => {

  return (
    <div className="flex flex-col items-center justify-center relative gap-2 p-20 hover:text-neutral-800 transition cursor-pointer bg-white-blue-50 rounded-t-xl hover:bg-opacity-70">
      <div className="hover:inline-flex font-medium text-sm">
        <Image src={thumbnail} alt='' fill className='object-cover rounded-t-xl' />
      </div>
    </div >
  );
};

export default CourseHeader;
