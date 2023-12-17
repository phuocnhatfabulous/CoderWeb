import { featureContests } from '@/mockFeatureContest/featureContest'
import Image from 'next/image'
import React from 'react'

type FeatureContestProps = {
  isScroll?: boolean
}

const FeatureContest = ({isScroll}) => {
  if (featureContests.length >= 4) {
    isScroll = true
  }
  return (
    <>
        < div className=' shadow-lg shadow-slate-400 rounded-xl'>
          {featureContests.map(featureContest => (
            <div key={featureContest.id} className='space-y-2 px-6 py-3'>
              <div className='flex xl:md:flex-row sm:flex-col gap-16 p-6'>
                <div className='xl:lg:w-3/4 md:sm:w-full'>
                  <span className='contest-title flex space-x-2 text-brand-orange'>
                    <p className='font-bold'>CUỘC THI: </p>
                    <p className='font-medium'> {featureContest?.name} </p>
                  </span>
                  <span className='contest-description text-base text-dark-blue'>
                    {/* {featureContest.descriptions.map(des => (
                  <p key={des}></p>
                ))} */}
                    <p> {featureContest?.descriptions} </p>

                  </span>
                </div>
                <div className='xl:lg:w-1/4 md:sm:w-full items-center flex flex-row'>
                  <Image src={featureContest.image} alt='' width={500} height={500} className='w-full h-fit rounded-xl' />
                </div>
              </div>
              <div className='border border-slate-300 px-6'></div>
            </div>
          ))}
        </div >

    </>
  )
}

export default FeatureContest