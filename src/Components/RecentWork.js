import React from 'react'
import LandingPage from '@/Asserts/Images/landingPage.png'
import Image from 'next/image'

function RecentWork() {
    return (
        <section className='my-44 text-white w-full h-[80rem] xl:h-[40rem] bg-my_bg_image  '>
            <div className='mx-32 md:mx-16 '>
                <div className='-mx-28 flex flex-col w-[34rem] h-[6rem]'>
                    <h1 className='text-[4rem]'>My recent <span className='text-[#00ADB5]'>works</span>  </h1>
                    <div className='flex items-center space-x-6'>
                        <button className='px-5 py-2 rounded-lg bg-gray-700'>All</button>
                        <button className='px-5 py-2 rounded-lg bg-gray-700'>UI</button>
                        <button className='px-5 py-2 rounded-lg bg-gray-700'>UX</button>
                        <button className='px-5 py-2 rounded-lg bg-gray-700'>Web Design</button>
                    </div>


                </div>
                <div className='flex flex-col md:flex-row justify-center gap-6  mt-32'>
                    <div className='mt-12   w-[18rem] h-[12rem] backdrop-blur-sm  justify-center shadow-2xl '>
                        <div className='flex justify-center items-center border-gray-400 border-2'>
                            <Image src={LandingPage} alt='pic' className='p-4' />
                        </div>

                    </div>

                    <div className='mt-12   w-[18rem] h-[12rem] backdrop-blur-sm  justify-center shadow-2xl '>
                        <div className='flex justify-center items-center border-gray-400 border-2'>
                            <Image src={LandingPage} alt='pic' className='p-4' />
                        </div>

                    </div>

                    <div className='mt-12   w-[18rem] h-[12rem] backdrop-blur-sm  justify-center shadow-2xl '>
                        <div className='flex justify-center items-center border-gray-400 border-2'>
                            <Image src={LandingPage} alt='pic' className='p-4' />
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default RecentWork