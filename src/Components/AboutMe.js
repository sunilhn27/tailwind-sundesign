import React from 'react'
import About from '@/Asserts/Images/About.png'
import AboutBg from '@/Asserts/Images/AboutBg.png' 
import AboutVector from '@/Asserts/Images/AboutVector.png'
import Image from 'next/image'


function AboutMe() {
    return (
        <section className='my-12 mx-12'>
            <div className='flex flex-col-reverse md:flex-row justify-evenly '>

                <div className='flex flex-col pt-5'>

                    <div className='w-[21rem] h-[6rem] mt-12 md:mt-0'>
                        <h1 className='text-white text-[4.5rem] '>About <span className='text-[#00ADB5]'>Me</span> </h1>
                    </div>
                    <div className='text-gray-400 w-[25rem] h-[12rem]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more</p>
                    </div>
                    <div className='relative top-9 -right-32'>
                        <Image src={AboutVector}/>
                    </div>
                </div>

                <div className='flex relative'>
                    <Image className="relative" src={AboutBg} />
                    <Image className="absolute w-[16rem] md:w-[26rem] top-32 left-11   md:right-1 md:top-56 md:left-32" src={About} />


                </div>


            </div>
        </section>
    )
}

export default AboutMe