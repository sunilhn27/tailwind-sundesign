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

              

            </div>
        </section>
    )
}

export default Contact