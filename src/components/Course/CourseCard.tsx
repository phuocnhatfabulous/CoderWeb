import React, { useState } from 'react';
import CourseHeader from './CourseHeader';
import CourseFooter from './CourseFooter';
import { useGetCourses } from '@/hooks/useGetCourses';
import Link from 'next/link';

type CourseCardProps = {
  setLoadingCourses: React.Dispatch<React.SetStateAction<boolean>>;
};

const CourseCard: React.FC<CourseCardProps> = ({
  setLoadingCourses,
}) => {
  const courses = useGetCourses(setLoadingCourses)

  return (
    <>
      {courses.map(course => (

        <div key={course.id} className="mt-8 shadow-lg w-11/12 shadow-slate-400 rounded-xl">
          <Link href={`/courses/${course.id}`}>
            <CourseHeader thumbnail={course.thumbnail} />
            <CourseFooter title={course.title} viewCount={course.viewCount} time={course.time} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
