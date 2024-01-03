import React from 'react'
import google from '../assets/images/google-play.png'
import apple from '../assets/images/apple-play.png'


const Store = () => {
  return (
    <section className='w-full bg-image py-20 px-20'>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

    <div className="col-span-1 space-y-5">
        
    <h1 className="text-2xl md:text-4xl lg:text-5xl leading-[1.9] font-bold ">Download our app to get<br /> most out of it</h1>

    <p className="text-gray-500 font-semibold">Thrown shy denote ten ladies though ask saw. Or by to he going think<br /> order event music. Incommode so intention defective at convinced. Led <br />income months itself and houses you.</p>

    <div className="mt-20 flex flex-col lg:flex-row gap-6 items-start">
        <img src={google} alt="google-play" className="" />
        <img src={apple} alt="google-play" className="" />
    </div>

    </div>
    </div>
    </section>
  )
}

export default Store