import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

type Course = {
  isHomePage?: boolean
}

const Course = () => {
  const [loadingCourses, setLoadingCourses] = useState(true);

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
      {loadingCourses && (
        <div className="mx-auto w-full max-w-[1200px] shadow-slate-400 animate-pulse">
          {[...Array(10)].map((_, idx) => (
            <div key={idx} className="mt-8 shadow-lg w-11/12 shadow-slate-400 rounded-xl bg-white-blue-200">
            </div>
          ))}

        </div>
      )}
      {/* {!loadingCourses && ( */}
      {/* <div> */}

      <CourseCard setLoadingCourses={setLoadingCourses} />
      {/* <CourseCard setLoadingCourses={setLoadingCourses} />
      <CourseCard setLoadingCourses={setLoadingCourses} />
      <CourseCard setLoadingCourses={setLoadingCourses} />
      <CourseCard setLoadingCourses={setLoadingCourses} /> */}
      {/* </div> */}
      {/* )} */}
    </div>
  );
};

export default Course;
