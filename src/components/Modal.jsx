import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosInformationCircle } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { useManage } from '../store';



const Modal = forwardRef(({children},ref) => {

    const changeSuccess = useManage(state=> state.changeSuccess)
    const cars = useManage(state=> state.cars)
    const success = useManage(state=> state.success)
    const vehicle = useManage(state=> state?.vehicle)
    const car = cars.find((motor)=> motor.make === vehicle?.make)

    const [formInputs,setFormInputs] = useState({
        name:'',
        surname:'',
        phone:'',
        age:null,
        email:'',
        address:'',
        zip:null,
        city:''
    })

    const {name,surname,phone,age,email,address,zip,city} = formInputs

    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open(){
            dialog.current.showModal()
        },
    }
    })

    const onChangeInput =(e)=>{
        setFormInputs((prev)=>{
            return {
                ...prev,
                [e.target.name]: e.target.value,
              };
        })
    }

    const closeModalSubmit =()=>{
            changeSuccess()
            console.log(success)


    }


  return createPortal(
    <dialog ref={dialog} className='w-full md:w-[70vw] lg:w-[60vw] backdrop:bg-black/90 bg-white mx-auto my-6 pt-[2px] px-[2px]'>
        <div className="w-full py-3 bg-yellow-300 flex justify-between items-center px-8">
        <h3 className="text-2xl font-bold text-white uppercase">Complete Reservation</h3>
        <form method='dialog'>
        <button>
        <LiaTimesSolid size={20} className=" text-white" />
        </button>
        </form>
        </div>

        <div className="py-5 bg-yellow-100 px-10 space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-yellow-500 flex items-center gap-3"><IoIosInformationCircle />Upon completing this reservation enquiry, you will receive:</h3>
            <p className="font-semibold font-roboto text-gray-500 text-sm md:text-lg">Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number</p>
        </div>


        <div className="w-full py-14 grid lg:grid-cols-2 px-6 md:px-4 gap-4 items-start border-b border-b-teal-300">

        <div className="w-full col-span-1 px-10">
        <h3 className="text-yellow-600 font-extrabold">Location & Date</h3>
        <div className="mt-8 flex flex-col gap-4">
        <div className="flex gap-3 items-start">
            <IoLocation size={20} />
            <div className="flex flex-col gap-2">
                <h4 className="text-lg text-black font-semibold font-roboto">Pick-Up Date & Time</h4>
                <p className="text-gray-400 font-roboto text-base">{vehicle?.pickDate}</p>
            </div>
        </div>

        <div className="flex gap-3 items-start">
            <IoLocation size={20} />
            <div className="flex flex-col gap-2">
                <h4 className="text-lg text-black font-semibold font-roboto">Drop-Off Date & Time</h4>
                <p className="text-gray-400 font-roboto text-base">2024-01-25</p>
            </div>
        </div>


        <div className="flex gap-3 items-start">
            <IoLocation size={20} />
            <div className="flex flex-col gap-2">
                <h4 className="text-lg text-black font-semibold font-roboto">Pick-Up Location</h4>
                <p className="text-gray-400 font-roboto text-base">{vehicle?.pickUpLocation}</p>
            </div>
        </div>

        <div className="flex gap-3 items-start">
            <IoLocation size={20} />
            <div className="flex flex-col gap-2">
                <h4 className="text-lg text-black font-semibold font-roboto">Drop-Off Location</h4>
                <p className="text-gray-400 font-roboto text-base">{vehicle?.dropUpLocation}</p>
            </div>
        </div>
        
        </div>
        
        </div>

        <div className="col-span-1 w-full">
        <h3 className="text-yellow-600 font-extrabold text-xl">Car - <span className="text-red-600">{vehicle?.make}-{vehicle?.model}</span></h3>

        <div className="img w-full pb-10 mt-10 px-10">
            <img src={car?.image} alt="image-cover" className="w-full h-full object-cover" />
        </div>


        
        </div>
        
        
        </div>

        <div className="p-10 px-4 md:8 lg:px-14 ">
        <h1 className="text-2xl font-bold text-yellow-400 uppercase">Personal Information</h1>

        <div className="mt-10 grid lg:grid-cols-2 gap-4 items-start">
        <div className="w-full flex flex-col gap-4  col-span-1 ">
        <h3 className="text-zinc-400 font-roboto text-lg font-semibold relative">First Name</h3>
        <input name='name' value={name} onChange={onChangeInput} type="text" className="w-full px-10 py-3 bg-gray-200 text-lg font-roboto" placeholder='Enter your first name'/>
        </div>
        <div className="w-full flex flex-col gap-4  col-span-1 ">
        <h3 className="text-zinc-400 font-roboto text-lg font-semibold relative">Last Name</h3>
        <input name='surname' value={surname} onChange={onChangeInput} type="text" className="w-full px-10 py-3 bg-gray-200 text-lg font-roboto" placeholder='Enter your last name'/>
        </div>
        </div>


        <div className="mt-10 grid lg:grid-cols-2 gap-4 items-start">
        <div className="w-full flex flex-col gap-4  col-span-1 ">
        <h3 className="text-zinc-400 font-roboto text-lg font-semibold relative">Phone Number</h3>
        <input name='phone' value={phone} onChange={onChangeInput} type="text" className="w-full px-10 py-3 bg-gray-200 text-lg font-roboto" placeholder='Enter your phone number'/>
        </div>
        <div className="w-full flex flex-col gap-4  col-span-1 ">
        <h3 className="text-zinc-400 font-roboto text-lg font-semibold relative">Age</h3>
        <input name='age' value={age} onChange={onChangeInput} type="number" className="w-full px-5 md:px-10 py-3 bg-gray-200 text-lg font-roboto" placeholder='Enter your Age'/>
        </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 ">
        <div className="w-full flex flex-col gap-4 ">
        <h3 className="text-zinc-400 font-roboto text-lg font-semibold relative">Address </h3>
        <input name='address' value={address} onChange={onChangeInput} type="text" className="w-full px-10 py-3 bg-gray-200 text-lg font-roboto" placeholder='Enter your Address '/>
        </div>
        <div className="w-full flex flex-col gap-4 ">
        <h3 className="text-zinc-400 font-roboto text-lg font-semibold relative">Email </h3>
        <input name='email' value={email} onChange={onChangeInput} type="text" className="w-full px-10 py-3 bg-gray-200 text-lg font-roboto" placeholder='Enter your Email '/>
        </div>
        </div>
        

        <div className="mt-10 grid lg:grid-cols-2 gap-4 items-start">
        <div className="w-full flex flex-col gap-4  col-span-1 ">
        <h3 className="text-zinc-400 font-roboto text-lg font-semibold relative">City</h3>
        <input name='city' value={city} onChange={onChangeInput} type="text" className="w-full px-10 py-3 bg-gray-200 text-lg font-roboto" placeholder='Enter your City'/>
        </div>
        <div className="w-full flex flex-col gap-4  col-span-1 ">
        <h3 className="text-zinc-400 font-roboto text-lg font-semibold relative">Zip Code</h3>
        <input name='zip' value={zip} onChange={onChangeInput} type="text" className="w-full px-10 py-3 bg-gray-200 text-lg font-roboto" placeholder='Enter your Zip Code'/>
        </div>
        </div>
        
        </div>

        <div className="py-5 flex gap-4 items-center px-14">
        <input type="checkbox" name="" id="" /> <p className="text-lg text-zinc-600">Please send me latest news and updates</p>
        </div>

        <form onClick={closeModalSubmit} method='dialog' className="py-6 px-10 flex justify-center items-center bg-white/70">
        <button className="font-roboto text-bold text-white bg-teal-300 px-10 text-lg hover:bg-teal-700 duration-700 hover:text-orange-300 rounded-lg py-3">Reserve Now</button>
        </form>
        
      
    </dialog>,document.getElementById('modal-root')
  )
})

export default Modal
