import React from 'react'
import LandingPage from '@/Asserts/Images/landingPage.png'
import Image from 'next/image'

function RecentWork() {
    return (
        <section className='my-44 text-white w-full h-[40rem] bg-my_bg_image '>
            <div className='mx-16'>
                <div className='flex flex-col w-[34rem] h-[6rem]'>
                    <h1 className='text-[4rem]'>My recent <span className='text-[#00ADB5]'>works</span>  </h1>
                    <div className='flex items-center space-x-6'>
                        <button className='px-4 py-2 rounded-lg bg-gray-700'>All</button>
                        <button className='px-4 py-2 rounded-lg bg-gray-700'>UI</button>
                        <button className='px-4 py-2 rounded-lg bg-gray-700'>UX</button>
                        <button className='px-4 py-2 rounded-lg bg-gray-700'>Web Design</button>
                    </div>


                </div>
{/* 
                <div className='mt-12  border-2 border-red-500 w-[18rem] h-[18rem] bg-black opacity-40'>
                    <Image src={LandingPage} alt='pic' className='p-4' />
                    
                </div> */}
            </div>

        </section>
    )
}

export default RecentWork