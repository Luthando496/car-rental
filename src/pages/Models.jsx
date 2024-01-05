import React from 'react'
import CustomHeader from '../components/CustomHeader'
import BackgroundContact from '../components/BackgroundContact'
import Footer from '../components/Footer'
import { IoIosStarOutline, IoMdCar } from "react-icons/io";
import { IoCarOutline } from "react-icons/io5";



const cars = [
    {
        name:"Lamborghini",
        type:"Diesel",
        price:"89",
        transmission:"automatic",
        image:"../images/pexels-jay-pizzle-3752194.jpg"
    },
    {
        name:"LaFerrari",
        type:"Petrol",
        price:"134",
        transmission:"automatic",
        image:"../images/joshua-koblin-eqW1MPinEV4-unsplash.jpg"
    },
    {
        name:"BMW M4",
        type:"Diesel",
        price:"98",
        transmission:"Both",
        image:"../images/josh-berquist-_4sWbzH5fp8-unsplash.jpg"
    },
    {
        name:"BMW M4",
        type:"Diesel",
        price:"986",
        transmission:"Manual",
        image:"../images/dorian-buck-rbHwQ_YgLVM-unsplash.jpg"
    },
    {
        name:"McLaren",
        type:"Diesel",
        price:"986",
        transmission:"Automatic",
        image:"../images/olav-tvedt-6lSBynPRaAQ-unsplash.jpg"
    },
    {
        name:"BMW M$",
        type:"Diesel",
        price:"986",
        transmission:"Automatic",
        image:"../images/rodan-can-6cqJPeTIuls-unsplash.jpg"
    }
]

const Models = () => {
  return (
    <>
        <CustomHeader title='Our Models' />

        <section className="w-full py-36">
            <div className="w-full px-11 md:z-30 lg:px-32 grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">

            {cars.map((car, index) => (

            <article className="w-full col-span-1 border border-gray-300">
                <div className="img w-full h-[14rem]">
                    <img src={car.image} alt="car-model" className="w-full h-full object-cover" />
                </div>
                <div className="py-6 px-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-slate-800">{car.name}</h1>
                        <h1 className="text-2xl font-bold text-slate-800">${car.price}</h1>
                    </div>
                    <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    </div>
                        <span className="text-sm font-roboto">per day</span>
                    </div>

                    <div className="flex justify-between items-center my-4">
                            <IoCarOutline size={40} className='text-yellow-400' />
                            <span className="text-xl font-semibold text-gray-600">{car.name}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4 pb-6 border-b border-b-gray-400">
                        <div className="flex gap-4 items-center">
                            <IoCarOutline size={40} className='text-yellow-400' />
                        <span className="text-xl font-semibold text-gray-600">{car.transmission}</span>
                        </div>
                        <span className="text-xl font-semibold text-gray-600">{car.type}</span>
                    </div>
                    <div className="px-4 my-5">
                        <button className="py-6 bg-amber-400 text-white text-bold w-full shadow-lg hover:shadow-2xl duration-700 font-roboto tracking-[2px] font-semibold">Book Ride</button>
                    </div>
                </div>
            </article>
            ))}


            </div>
        </section>

        <BackgroundContact />
        <Footer  />
    </>
  )
}

export default Models