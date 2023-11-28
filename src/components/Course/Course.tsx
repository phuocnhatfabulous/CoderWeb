import React, { useEffect } from 'react';
import CourseCard from './CourseCard';

const Course = () => {
  useEffect(() => {
    document.title = 'Khóa học | ITUTC2';
  }, []);
  return (
    <div className="space-y-4">
      <CourseCard />
    </div>
  );
};

export default Course;
