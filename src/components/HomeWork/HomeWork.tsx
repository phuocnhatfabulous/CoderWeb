import React, { useEffect } from 'react';

const HomeWork = () => {
  useEffect(() => {
    document.title = 'Bài tập | ITUTC2';
  }, []);
  return <div>HomeWork</div>;
};

export default HomeWork;
