import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Class = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="items-center justify-center flex w-full">
        <Image src="/comingsoon.png" alt="Logo" width={500} height={100} />
      </div>
      <div className="heading">Coming Soon</div>
      <div className="description">We are working hard to bring you an amazing website.</div>
      <div className="timer">{countdown > 0 ? `Launching in ${countdown} seconds` : 'Launching soon!'}</div>
    </div>
  );
};

export default Class;
