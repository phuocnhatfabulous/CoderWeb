import Class from '@/components/Class'
import DefaultLayout from '@/components/layout/DefaultLayout'
import React from 'react'

const Classes = () => {
  return (
    <DefaultLayout title={'Nhóm lớp | IT UTC2'}>
      <div className=" my-8 place-content-center space-y-6">
        <Class />
      </div>
    </DefaultLayout>
  )
}

export default Classes