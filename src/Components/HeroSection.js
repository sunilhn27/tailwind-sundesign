import Image from 'next/image'
import React from 'react'
import Hero from '@/Asserts/Images/Hero.png'
import HeroBg from '@/Asserts/Images/HeroBg.png'

function HeroSection() {
    return (
        <section className='text-white  min-w-min h-[44rem]   mx-12'>
            <div className='flex flex-col-reverse md:flex-row justify-evenly pt-12'>

                <div className='flex flex-col mt-12'>

                    <div className='text-3xl md:text-[6rem] w-[20rem] md:w-[38rem] md:h-[14rem] md:leading-[5.5rem]'>
                        <h1 className='font-extrabold ' >CREATIVE UI <span className='text-[#00ADB5]'>DESIGNER</span></h1>
                    </div>

                    <div className='flex space-x-4 mt-8 md:mt-0'>
                        <button className='rounded-full px-8 py-3 bg-[#00ADB5]'>Hire Me</button>
                        <button className='rounded-full px-12 py-3 bg-[#393E46BF]'>Download CV</button>
                    </div>
                </div >

                <div className='relative mb-12 md:mb-0'>
                    <Image alt="pic" src={HeroBg} className='relative' />
                    <Image alt="pic" src={Hero} className='absolute top-12 md:top-44 -left-7 w-[25rem] h-[29rem]' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection