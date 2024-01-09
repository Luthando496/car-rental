import React from 'react'
import logoCar from '../assets/images/Untitled-1.png'
import callCenter from '../assets/images/call-center.png'
import carClouds from '../assets/images/car-clouds.png'

const PlanTrip = () => {
  return (
    <section className='my-20 px-4 md:px-6 lg:px-10 relative'>
        <div className="w-full space-y-5">
        <h3 className="text-2xl font-semibold capitalize text-center">Plan your trip now</h3>
        <h1 className="text-4xl font-bold  text-center">Quick and easy car rental</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
            
            {/*  */}
            <div className="w-full col-span-1 flex flex-col items-center gap-5 text-center">
                <img src={logoCar} alt="logo-image" className="n w-40 h-30" />
                <h2 className="text-xl font-semibold">Select Vehicle</h2>
                <p className="text-gray-800 font-semibold">We offers a big range of vehicles for all<br /> your driving needs. We have the perfect car<br/> to meet your needs</p>
            </div>
            {/*  */}
            <div className="w-full col-span-1 flex flex-col items-center gap-5 text-center">
                <img src={callCenter} alt="logo-image" className="n w-40 h-30" />
                <h2 className="text-xl font-semibold">Contact Operator</h2>
                <p className="text-gray-800 font-semibold">Our knowledgeable and friendly<br /> operators are always ready to help with<br /> any questions or concerns</p>
            </div>
            {/*  */}
            <div className="w-full col-span-1 flex flex-col items-center gap-5 text-center">
                <img src={carClouds} alt="logo-image" className="n w-40 h-30" />
                <h2 className="text-xl font-semibold">Let's Drive</h2>
                <p className="text-gray-800 font-semibold">Whether you're hitting the open road,<br /> we've got you covered with our wide<br /> range of cars</p>
            </div>
        </div>

      
    </section>
  )
}

export default PlanTrip
