"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { usePathname } from "next/navigation"

function NavBar() {
    const path = usePathname();


    useEffect(() => {
        console.log(path)
    }, [])

    const AnimatedLinks = ({ href, text }) => {
        return (
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link className={`${path ? "hover:text-cyan-600" : ""}`} href={href}>{text}</Link>
            </motion.div>
        )
    }

    const AnimatedButton = ({ text }) => {
        return (
            <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}><button className='bg-[#00ADB5] px-4 py-2 rounded-lg'>{text}</button>
            </motion.button>)
    }

    return (
        <section className='mt-12 md:mt-0'>
            <div className='text-white'>

                <nav className='flex md:h-[7rem] justify-between items-center  md:mx-36'>
                    <div className='hidden md:flex'>
                        <Link className='text-2xl font-semibold' href={"/"}>SunDesign</Link>
                    </div>

                    <div className='flex space-x-1 md:space-x-6 lg:space-x-9'>
                        <AnimatedLinks href={"/home"} text={"Home"} />
                        <AnimatedLinks href={"/aboutme"} text={"About Me"} />
                        <AnimatedLinks href={"/contact"} text={"Contact"} />
                    </div>

                </nav>


            </div>
        </section>
    )
}

export default NavBar