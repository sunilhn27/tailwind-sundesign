import Image from 'next/image'
import React from 'react'
import ContactImg from '@/Asserts/Images/Contact.png'

function Contact() {
    return (
        <section className='my-32 text-white'>
            <div className='flex flex-col md:flex-row justify-evenly items-center mx-auto'>



                <div className='flex flex-col'>
                    <div className=''>
                        <h1 className='text-7xl w-[37rem] h-[10rem]'>Got a project in <span className='text-[#00ADB5] font-bold'>mind? </span></h1>
                        <div className='border-2 border-emerald-500 mx-32' >
                            <Image src={ContactImg} alt='pic' className=''/>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col  mx-2'>
                    <form className='space-y-3'>
                        <div className='flex space-x-3  '>
                            <div className='flex flex-col'>
                                <label className='mb-2'>Your Name</label>
                                <input className='px-2 rounded-lg w-[17.5rem] py-2 bg-[#393E4680]' placeholder='Name' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-2'>Your Email</label>
                                <input className='px-2 rounded-lg w-[17.5rem]  py-2 bg-[#393E4680]' placeholder='Email' />
                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-col '>
                                <label className='mb-2'>Your Message</label>
                                <input className='rounded-lg px-2 bg-[#393E4680] w-[36rem] h-[16rem] ' placeholder='Message ' />
                            </div>


                        </div>


                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact