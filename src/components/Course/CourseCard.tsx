import React from 'react';
import CourseHeader from './CourseHeader';
import CourseFooter from './CourseFooter';

const CourseCard = () => {
  return (
    <div className="mt-8 shadow-lg w-11/12 shadow-slate-400 rounded-xl">
      <CourseHeader />
      <CourseFooter />
    </div>
  );
};

export default CourseCard;
