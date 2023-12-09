import React from 'react';
import CourseHeader from './CourseHeader';
import CourseFooter from './CourseFooter';

const CourseCard = () => {
  return (
    <div className="mt-8 w-11/12 cursor-pointer rounded-xl shadow-lg shadow-slate-400">
      <CourseHeader />
      <CourseFooter />
    </div>
  );
};

export default CourseCard;
