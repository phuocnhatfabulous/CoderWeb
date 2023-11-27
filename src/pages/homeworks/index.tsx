import HomeWork from '@/components/HomeWork/HomeWork'
import Topbar from '@/components/Topbar/Topbar'
import React from 'react'

const index = () => {
    return (
        <div className='bg-white-blue min-h-screen mt-14'>
            <Topbar />
            <div className="pt-5 bg-white-blue">
                <HomeWork />
            </div>
        </div>
    )
}

export default index