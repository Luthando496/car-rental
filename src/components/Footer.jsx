import React from 'react'
import { MdPhoneEnabled } from "react-icons/md";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className='w-full container'>
        <div className="w-full px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start py-20">
            <div className="col-span-1 w-full">
                <h1 className="text-3xl"><span className="font-semibold">Car</span> Rental</h1>
                <p className="mt-10 text-gray-400 font-semibold">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                
                <div className="flex gap-3 items-center mt-10">
                    <MdPhoneEnabled size={30} className='text-amber-500' />
                    <p className="text-gray-900  font-medium">+234 803 234 5678</p>
                </div>
                <div className="flex gap-3 items-center mt-2">
                    <CiMail size={30} className='text-amber-500'  />
                    <p className="text-gray-900  font-medium">luthandodidiza197@gmail.com</p>
                </div>
            </div>
            {/* Locations */}
            <div className="col-span-1 w-full mt-8 md:mt-0">
                <h1 className="text-3xl font-bold">COMPANY</h1>

                <ul className="flex flex-col gap-4 mt-8">
                    <li className="">
                        <span className="capitalize font-semibold hover:text-amber-600 hover:font-bold duration-1000 cursor-pointer">Cape Town</span>
                    </li>
                    <li className="">
                        <span className="capitalize font-semibold hover:text-amber-600 hover:font-bold duration-1000 cursor-pointer">Durban</span>
                    </li>
                    <li className="">
                        <span className="capitalize font-semibold hover:text-amber-600 hover:font-bold duration-1000 cursor-pointer">California</span>
                    </li>
                    <li className="">
                        <span className="capitalize font-semibold hover:text-amber-600 hover:font-bold duration-1000 cursor-pointer">San francisco</span>
                    </li>
                    <li className="">
                        <span className="capitalize font-semibold hover:text-amber-600 hover:font-bold duration-1000 cursor-pointer">London</span>
                    </li>
                </ul>
            </div>
                {/* Working hours */}
            <div className="col-span-1 w-full space-y-4 mt-8 lg:mt-0">
                <h1 className="text-3xl font-bold uppercase ">Working Hours</h1>

                <p className="text-gray-700 font-semibold">Mon - Fri: 9:00AM - 9:00PM</p>
                <p className="text-gray-700 font-semibold">Sat: 9:00AM - 19:00PM</p>
                <p className="text-gray-700 font-semibold">Sun: Closed</p>
            </div>
            {/*  */}
            <div className="col-span-1 w-full space-y-4 mt-8 lg:mt-0">
                <h1 className="text-3xl font-bold uppercase ">Subscription</h1>

                <p className="text-gray-800 font-medium">Subscribe your Email address for latest<br /> news & updates.</p>
                
                <div className="w-full flex flex-col gap-8">
                    <input type="text" className="w-full py-5 px-10 bg-gray-100 focus:outline-none" placeholder='Enter Email Address' />
                    <button className="w-full py-5 px-4 bg-yellow-400 font-semibold text-white uppercase tracking-[2px]">Submit</button>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer