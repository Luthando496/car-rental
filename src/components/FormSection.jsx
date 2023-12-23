import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FormSection = () => {
  return (
    <section className='w-full my-3 px-3 md:px-6 lg:px-10 z-10 relative'>
        <form  className="w-full p-6 shadow-lg">
            <h3 className="text-xl font-bold">Book a car</h3>

            <div className="grid grid-cols-3 gap-x-4 mt-10 items-center gap-y-10">

            <article className="w-full col-span-1">
                <div className="flex items-center gap-6">
                <FaCarSide size={30} className='' /> <p className="font-semibold text-lg relative text-star">Select Your Car Type</p>
                </div>
               <select name="" id="" className='w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]'>
                 <option value="">Select Car Type</option>
                 <option className='font-semibold text-lg' value="">Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
               </select>
            </article>

            {/*  */}

            <article className="w-full col-span-1">
                <div className="flex items-center gap-6">
                <FaLocationDot rSide size={30} className='' /> <p className="font-semibold text-lg relative text-star">Pick Up</p>
                </div>
               <select name="" id="" className='w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]'>
                 <option value="">Select Car Type</option>
                 <option className='font-semibold text-lg' value="">Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
               </select>
            </article>

            {/*  */}

            <article className="w-full col-span-1">
                <div className="flex items-center gap-6">
                <FaLocationDot size={30} className='' /> <p className="font-semibold text-lg relative text-star">Drop off</p>
                </div>
               <select name="" id="" className='w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]'>
                 <option value="">Select</option>
                 <option className='font-semibold text-lg' value="">Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
               </select>
            </article>

            {/*  */}
            <article className="w-full col-span-1">
                <div className="flex items-center gap-6">
                <FaLocationDot size={30} className='' /> <p className="font-semibold text-lg relative text-star">Drop off</p>
                </div>
               <select name="" id="" className='w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]'>
                 <option value="">Select</option>
                 <option className='font-semibold text-lg' value="">Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
               </select>
            </article>

            {/*  */}

            <article className="w-full col-span-1">
                <div className="flex items-center gap-6">
                <FaLocationDot size={30} className='' /> <p className="font-semibold text-lg relative text-star">Drop off</p>
                </div>
               <select name="" id="" className='w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]'>
                 <option value="">Select</option>
                 <option className='font-semibold text-lg' value="">Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Car</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Truck</option>
                 <option value="" className='text-lg font-semibold text-gray-600'>Van</option>
               </select>
            </article>

            {/*  */}
            <button className="self-end  text-white bg-yellow-500 py-4 px-4 hover:shadow-2xl duration-700 text-lg font-semibold tracking-[2px]">
                Search
            </button>

            </div>

        </form>
        
      
    </section>
  )
}

export default FormSection
