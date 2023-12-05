import React from 'react';
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="group relative cursor-pointer">
      <Image src="/avatar.svg" alt="Avatar" width={30} height={30} className="rounded-full" />
      <div className="duration-300ease-in-out absolute top-10 left-2/4 z-40 mx-auto -translate-x-2/4 scale-0 rounded bg-dark-layer-1 p-2 text-brand-orange shadow-lg transition-all"></div>
    </div>
  );
};

export default Avatar;
