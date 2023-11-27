import React from 'react';
import CourseDetail from './CourseHeader';

const CourseCard = () => {
  return (
    <div className="grid gap-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
      <CourseDetail />
    </div>
  );
};

export default CourseCard;
