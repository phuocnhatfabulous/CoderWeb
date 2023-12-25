import React, { useEffect } from 'react';
import CourseCard from './CourseCard';

type Course = {
  isHomePage?: boolean
}

const Course = () => {
  const checkFeatureCourse = () => {

  }
  // if (isHomePage == true) {
  //   return (
  //     <>

  //     </>
  //   )
  // }


  return (
    <div className="grid relative gap-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default Course;
