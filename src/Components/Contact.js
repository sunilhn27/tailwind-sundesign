import Image from 'next/image'
import React from 'react'
import ContactImg from '@/Asserts/Images/Contact.png'
import SendImg from '@/Asserts/Images/Send.png'

function Contact() {
    return (
        <section className='my-32 text-white'>
            <div className='flex flex-col md:flex-row justify-evenly items-center mx-auto'>



                <div className='flex flex-col'>
                    <div className=''>
                        <h1 className='text-[3.5rem] mb-12 md:-mt-8 md:text-[4.5rem] md:w-[37rem] md:h-[10rem] 2xl:w-[37rem] 2xl:h-[10rem] 2xl:text-[5.1rem]'>Got a project in <span className='text-[#00ADB5] font-bold'>mind? </span></h1>
                        <div className=' mx-32' >
                            <Image src={ContactImg} alt='pic' className='' />
                        </div>
                    </div>
                </div>

                <div className='mt-12 md:-mt-12 flex flex-col mx-2'>
                    <form className='space-y-3'>
                        <div className='flex space-x-3  '>
                            <div className='flex flex-col'>
                                <label className='mb-2'>Your Name</label>
                                <input className='px-2 rounded-lg md:w-[17.5rem] py-2 bg-[#393E4680]' placeholder='Name' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-2'>Your Email</label>
                                <input className='px-2 rounded-lg md:w-[17.5rem]  py-2 bg-[#393E4680]' placeholder='Email' />
                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-col '>
                                <label className='mb-2'>Your Message</label>
                                <input className='rounded-lg px-2 bg-[#393E4680] md:w-[36rem] h-[16rem] ' placeholder='Message ' />
                            </div>

                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <button className='bg-[#00ADB5] text-white flex items-center justify-center px-4 py-2 rounded-lg'>
                                    Send Message
                                    <span className='ml-2'>
                                        <Image  src={SendImg} className='w-[1.45rem] h-[1.5rem]' />
                                    </span>
                                </button>
                            </div>
                        </div>



                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact