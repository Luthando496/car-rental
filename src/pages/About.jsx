import React from 'react'
import CustomHeader from '../components/CustomHeader'
import { FaCarSide,FaBuilding  } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import Footer from '../components/Footer'
import PlanTrip from '../components/PlanTrip'



const About = () => {
  return (
    <>
        <CustomHeader title="About" />

        <section className="w-full py-24 bg-slate-50 px-8 lg:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="col-span-1 ">
                    <img src="https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="people" className="w-full object-cover h-full" />
                </div>


                <div className="col-span-1 self-start space-y-4">
                    <h3 className="text-2xl font-roboto tracking-[2px] font-bold text-slate-900">About Company</h3>
                    <h1 className="text-5xl font-bold leading-[1.2] text-slate-900">You start the engine and your adventure begins</h1>
                    <p className="text-gray-600 font-roboto">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>

                    <div className="grid grid-cols-1 justify-center lg:justify-start lg:grid-cols-3 gap-3">
                        {/*article 1  */}
                        <article className="col-span-1 justify-center flex flex-col gap-2">

                        <FaCarSide  className='text-yellow-400 text-5xl' />
                        <div className="flex gap-3">
                            <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold">20</h1>
                            <div className="flex flex-row gap-3 lg:gap-0 lg:flex-col">
                                <span className="text-lg font-semibold text-gray-500">Car</span>
                                <span className="text-lg font-semibold text-gray-500">Types</span>
                            </div>
                        </div>
                        </article>
                        {/* article 2 */}
                        <article className="col-span-1 w-full flex flex-col gap-2">

                        <FaBuilding   className='text-yellow-400 text-5xl' />
                        <div className="flex flex-col lg:flex-row gap-3">
                            <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold">85</h1>
                            <div className="flex flex-row gap-3 lg:gap-0 lg:flex-col">
                                <span className="text-lg font-semibold text-gray-500">Rental</span>
                                <span className="text-lg font-semibold text-gray-500">Outlets</span>
                            </div>
                        </div>
                        </article>
                        {/* article 3 */}
                        <article className="col-span-1 w-full flex flex-col gap-2">

                        <GiHomeGarage   className='text-yellow-400 text-5xl' />
                        <div className="flex gap-3">
                            <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold">75</h1>
                            <div className="flex flex-row gap-3 lg:gap-0 lg:flex-col">
                                <span className="text-lg font-semibold text-gray-500">Repair</span>
                                <span className="text-lg font-semibold text-gray-500">Shop</span>
                            </div>
                        </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>

        <PlanTrip />
        
        <Footer />
    </>
  )
}

export default About