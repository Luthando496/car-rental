import React from 'react'
import mainImage from '../assets/images/main.70cd75042bdf42515d92.png'
import carCross from '../assets/images/car-cross.png'
import cash from '../assets/images/cash.png'
import money from '../assets/images/money-hidden.png'
import { IoIosArrowForward } from "react-icons/io";



const ChooseUs = () => {
  return (
    <section className='w-full'>
        <div className="w-full px-10">
            <img src={mainImage} alt="main-image" className="w-full" />
        </div>
        <div className="py-20 px-14 grid grid-cols-1 mx-auto lg:grid-cols-2 gap-14 items-start">

        <article className="col-span-1 w-full space-y-9 text-center lg:text-left">
            <h4 className="text-2xl font-semibold uppercase">Why Choose us</h4>
            <h1 className="text-5xl font-bold ">Best valued deals you<br /> will ever find</h1>
            <p className="text-gray-600 font-semibold">Discover the best deals you'll ever find with our unbeatable offers.<br /> We're dedicated to providing you with the best value for your money,<br /> so you can enjoy top-quality services and products without<br /> breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
            <div className="w-full flex justify-center lg:block">
            <button className="px-5 py-2 text-white font-semibold text-xl bg-yellow-500 flex items-center gap-4 shadow-lg hover:shadow-2xl hover:shadow-stone-500 duration-700">Find Details <IoIosArrowForward className='' size={40} /></button>
            </div>
        </article>

        {/*  */}

        <article className="w-full col-span-1 flex flex-col gap-8">
            {/*  */}
            <div className="w-full flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                <img src={carCross} alt="main-image" className="w-32" />
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold">Cross Country Drive</h1>
                    <p className="text-gray-600">Take your driving experience to the next level<br /> with our top-notch vehicles for your cross-country adventures.</p>
                </div>
            </div>
            {/*  */}
            <div className="w-full flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                <img src={cash} alt="main-image" className="w-32" />
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold capitalize">All Inclusive Pricing</h1>
                    <p className="text-gray-600">Get everything you need in one convenient, transparent<br /> price with our all-inclusive pricing policy</p>
                </div>
            </div>
            {/*  */}
            <div className="w-full flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                <img src={money} alt="main-image" className="w-32" />
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold capitalize">No Hidden Charges</h1>
                    <p className="text-gray-600">Enjoy peace of mind with our no hidden<br /> charges policy. We believe in transparent and<br /> honest pricing.</p>
                </div>
            </div>


        </article>

        </div>
    </section>
  )
}

export default ChooseUs