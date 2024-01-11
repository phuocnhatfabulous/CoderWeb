import CourseDetail from '@/components/Course/CourseDetail'
import DefaultLayout from '@/components/layout/DefaultLayout'
import React from 'react'

const CourseDetailPage = () => {
  return (
    <DefaultLayout title={'Khóa học lập trình '}>
      <CourseDetail />
    </DefaultLayout>
  )
}

export default CourseDetailPage