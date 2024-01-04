import React from 'react'
import { FaPhone } from "react-icons/fa";



const BackgroundContact = () => {
  return (
    <>
        <section className="w-full bg-number py-20 px-4 md:px-10 lg:px-36">
            <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-evenly">
                <h3 className="text-3xl md:text-4xl font-bold text-white">Book a car by getting in touch with us</h3>
                <div className="flex gap-2 items-center">
                    <FaPhone className='text-white text-4xl' />
                    <h2 className="text-2xl md:text-3xl font-semibold text-yellow-500">(+27)76 705 7533</h2>
                </div>
            </div>

        </section>
    </>
  )
}

export default BackgroundContact