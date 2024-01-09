import { useState } from "react"
import { cars } from "../data"



const CarModel = () => {

    const [car,setCar] = useState(cars[0])

    const changeCar =(data)=>{
        setCar(data)
    }
  return (
    <section className='w-full py-20 px-4 md:px-14 lg:px-32'>

    <div className="w-full flex justify-center">
        <div className="text-center space-y-3">
        
            <h4 className="text-2xl font-semibold">Vehicle Models</h4>
        
            <h1 className="text-5xl font-bold">Our rental fleet</h1>
        
            <p className="font-semibold text-gray-600 text-lg">Choose from a variety of our amazing vehicles to rent for your<br /> next adventure or business trip</p>
        
        </div>
    
    </div>

        <div className="w-full grid grid-cols-4 gap-4 mt-20 items-start">

        <article className="w-full col-span-1">
            <ul className="flex flex-col gap-5">
            {cars.map((motor,index) => (
                <li key={motor.id} onClick={()=>changeCar(motor)} className={`py-3 ${index === car.id && 'bg-teal-400'} hover:bg-teal-400 cursor-pointer px-10 duration-300 bg-yellow-400`}>
                  <span className="text-xl font-bold text-white">{motor.make}</span>
                </li>
            ))}
               
            </ul>
        
        </article>

        <article className="w-full col-span-2">
        <div className="img w-full h-full py-20 px-14">
            <img src={car.image} alt="image-cover" className="w-full h-full object-cover" />
        </div>
        </article>
        
        <article className="w-full col-span-1">
        <div className="w-full py-2 bg-yellow-400 px-7 ">
        <h2 className="text-2xl font-extrabold text-white">${car.price} / <span className="font-light">rent per day</span> </h2>
        </div>
        
        <div className="border-r-2 border-l-2 border-gray-400">
        <div className="py-2 px-3 flex justify-between border-b-2 border-b-gray-500">
        
        <div className="w-full border-r border-r-gray-300 text-center">
            <span className="text-lg text-gray-500 font-semibold capitalize">Make</span>
            </div>
        <div className="w-full  text-center">
        <span className="text-lg text-gray-500 font-semibold capitalize">{car.make}</span>
        </div>

        </div>
       
        <div className="py-2 px-3 flex justify-between border-b-2 border-b-gray-500">
        
        <div className="w-full border-r border-r-gray-300 text-center">
            <span className="text-lg text-gray-500 font-semibold capitalize">Model</span>
            </div>
        <div className="w-full  text-center">
        <span className="text-lg text-gray-500 font-semibold capitalize">{car.model}</span>
        </div>

        </div>
       
        <div className="py-2 px-3 flex justify-between border-b-2 border-b-gray-500">
        
        <div className="w-full border-r border-r-gray-300 text-center">
            <span className="text-lg text-gray-500 font-semibold capitalize">Year</span>
            </div>
        <div className="w-full  text-center">
        <span className="text-lg text-gray-500 font-semibold capitalize">{car.year}</span>
        </div>

        </div>
       
        <div className="py-2 px-3 flex justify-between border-b-2 border-b-gray-500">
        
        <div className="w-full border-r border-r-gray-300 text-center">
            <span className="text-lg text-gray-500 font-semibold capitalize">AC</span>
            </div>
        <div className="w-full  text-center">
        <span className="text-lg text-gray-500 font-semibold capitalize">{car.AC}</span>
        </div>

        </div>
       
        <div className="py-2 px-3 flex justify-between border-b-2 border-b-gray-500">
        
        <div className="w-full border-r border-r-gray-300 text-center">
            <span className="text-lg text-gray-500 font-semibold capitalize">Transmission</span>
            </div>
        <div className="w-full  text-center">
        <span className="text-lg text-gray-500 font-semibold capitalize">{car.transmission}</span>
        </div>

        </div>
       
        <div className="py-2 px-3 flex justify-between border-b-2 border-b-gray-500">
        
        <div className="w-full border-r border-r-gray-300 text-center">
            <span className="text-lg text-gray-500 font-semibold capitalize">Fuel</span>
            </div>
        <div className="w-full  text-center">
        <span className="text-lg text-gray-500 font-semibold capitalize">{car.Fuel}</span>
        </div>

        </div>
       
        </div>

        <button className="mt-4 shadow-sm shadow-slate-600 text-white font-bold tracking-[2px]  w-full py-3 px-10 bg-yellow-400 capitalize hover:bg-yellow-700 hover:shadow-xl">Reserve now</button>
        
        </article>
        </div>
    </section>
  )
}

export default CarModel
