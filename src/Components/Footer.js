import React from 'react'
import { AiOutlineHome, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { FiPhoneCall, FiFacebook, FiTwitter } from 'react-icons/fi';

function Footer() {
    return (
        <section className='text-white flex justify-center items-center'>

            <footer className='flex-col  '>
                <div className='flex space-x-6 '>
                    <div className='flex space-x-3 items-center  md:h-[2.9rem] ' >
                        <AiOutlineHome className='w-[1.5rem] h-[1.5rem]' />
                        <label>Home</label>
                    </div>
                    <div className='flex space-x-3 items-center  md:h-[2.9rem]' >
                        <MdPersonOutline className='w-[1.5rem] h-[1.5rem]' />
                        <label>About me</label>
                    </div>
                    <div className='flex space-x-3 items-center  md:h-[2.9rem]' >
                        <FiPhoneCall className='w-[1.3rem] h-[1.5rem]' />
                        <label>Contact</label>
                    </div>
                </div>

                <div className='flex justify-center mt-12 space-x-3 mb-12'>
                    <div className='border-2 rounded-full p-2 bg-[#393E4680]'>
                        <AiOutlineInstagram className='w-[2.3rem] h-[2.5rem]' />
                    </div>
                    <div className='border-2 rounded-full p-2 bg-[#393E4680]'>
                        <FiFacebook className='w-[2.3rem] h-[2.5rem]' />
                    </div>
                    <div className='border-2 rounded-full p-2 bg-[#393E4680]'>
                        <FiTwitter className='w-[2.3rem] h-[2.5rem]' />
                    </div>
                    <div className='border-2 rounded-full p-2 bg-[#393E4680]'>
                        <AiOutlineYoutube className='w-[2.3rem] h-[2.5rem]' />
                    </div>
                </div>

            </footer>
        </section >
    )
}

export default Footer