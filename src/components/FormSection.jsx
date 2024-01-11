import React, { useRef, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useManage } from "../store";
import { LiaTimesSolid } from "react-icons/lia";
import Modal from "./Modal";
// import {cars} from '../data'




const FormSection = () => {
  const modal = useRef()
  const cars = useManage((state) => state.cars);
  const addCar = useManage((state) => state.addCar);
  const vehicle = useManage((state) => state.vehicle);
  const success = useManage((state) => state.success);
  const changeSuccess = useManage((state) => state.changeSuccess);

  const [motors, setMotors] = useState(cars);
  const [error,setError] = useState(false);

  const [carDetails, setCarDetails] = useState({
    make: "",
    pickUpLocation: "",
    dropUpLocation: "",
    pickDate: "",
    dropDate: "",
  });

  const { dropDate, pickDate, pickUpLocation, dropUpLocation, make } =
    carDetails;

  const change = (e) => {
    setCarDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const reserveCar = () => {
    if(make === "" || pickUpLocation === "" || dropUpLocation === "" || pickDate === "" || dropDate ===""){
      setError(true)
    }else{
      addCar({make: make, pickUpLocation: pickUpLocation, dropUpLocation: dropUpLocation, pickDate})
      console.log(vehicle)
      setError(false)
      modal.current.open()
      return;
    }
    
    // if(success === true){
    //   modal.current.close()
    //   setSuccess(true)
    //   return;
    // }
    
    
  };



  return (
    <>
    <Modal  ref={modal} />
    <section className="w-full my-3 px-3 md:px-6 lg:px-10 z-10 relative">
      <div className="w-full p-6 shadow-lg bg-white">
        <h3 className="text-xl font-bold">Book a car</h3>

        {error && (<div className="my-5 py-2 px-4 bg-red-300 flex justify-between items-center rounded-lg">
          <h3 className="text-lg text-red-600 font-semibold">All fields required! </h3>

          <LiaTimesSolid onClick={()=> setError(!error)} className="text-xl text-red-700 cursor-pointer" />
        
        </div>)}
        {success && (<div className="my-5 py-2 px-4 bg-green-300 flex justify-between items-center rounded-lg">
          <h3 className="text-lg text-green-600 font-semibold">Check your email to confirm an order </h3>

          <LiaTimesSolid onClick={changeSuccess} className="text-xl text-green-700 cursor-pointer" />
        
        </div>)}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 mt-10 items-center gap-y-10">
          <article className="w-full col-span-1">
            <div className="flex items-center gap-6">
              <FaCarSide size={30} className="" />{" "}
              <p className="font-semibold text-lg relative text-star">
                Select Your Car Type
              </p>
            </div>
            <select
              onChange={change}
              name="make"
              className="w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]"
            >
              <option value="">Select Car Type</option>
              {cars.map((motor, index) => (
                <option
                  key={motor.id}
                  name='make'
                  value={motor.make}
                  className="text-lg font-semibold text-gray-600"
                >
                  {motor.make}
                </option>
              ))}
            </select>
          </article>

          {/*  */}

          <article className="w-full col-span-1">
            <div className="flex items-center gap-6">
              <MdLocationOn size={30} className="" />{" "}
              <p className="font-semibold text-lg relative text-star">
                Pick Up
              </p>
            </div>
            <select
              value={pickUpLocation}
              onChange={change}
              name="pickUpLocation"
              className="w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]"
            >
              <option value="">Pick Up Location</option>
              <option className="font-semibold text-lg" value="Cape Point">
                Cape Point
              </option>
              <option
                value="Cape Town"
                className="text-lg font-semibold text-gray-600"
              >
                Cape Town
              </option>
              <option
                value="New York"
                className="text-lg font-semibold text-gray-600"
              >
                New York
              </option>
              <option
                value="Johannesburg"
                className="text-lg font-semibold text-gray-600"
              >
                Johannesburg
              </option>
              <option
                value="Sandton"
                className="text-lg font-semibold text-gray-600"
              >
                Sandton
              </option>
              <option
                value="East London"
                className="text-lg font-semibold text-gray-600"
              >
                East London
              </option>
            </select>
          </article>

          {/*  */}

          <article className="w-full col-span-1">
            <div className="flex items-center gap-6">
              <MdLocationOn size={30} className="" />{" "}
              <p className="font-semibold text-lg relative text-star">
                Drop off
              </p>
            </div>
            <select
              value={dropUpLocation}
              onChange={change}
              name="dropUpLocation"
              className="w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]"
            >
              <option value="">Pick Up Location</option>
              <option className="font-semibold text-lg" value="Malibu">
                Malibu
              </option>
              <option
                value="Los Angeles"
                className="text-lg font-semibold text-gray-600"
              >
                Los Angeles
              </option>
              <option
                value="Strand"
                className="text-lg font-semibold text-gray-600"
              >
                Strand
              </option>
              <option
                value="Claremont"
                className="text-lg font-semibold text-gray-600"
              >
                Claremont
              </option>
              <option
                value="Newlands"
                className="text-lg font-semibold text-gray-600"
              >
                Newlands
              </option>
              <option
                value="Rondebosch"
                className="text-lg font-semibold text-gray-600"
              >
                Rondebosch
              </option>
            </select>
          </article>

          {/*  */}
          <article className="w-full col-span-1">
            <div className="flex items-center gap-6">
              <MdLocationOn size={30} className="" />{" "}
              <p className="font-semibold text-lg relative text-star">
                Drop off
              </p>
            </div>
            <input
              type="date"
              onChange={change}
              name="pickDate"
              value={pickDate}
              className="w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]"
            />
          </article>

          {/*  */}

          <article className="w-full col-span-1">
            <div className="flex items-center gap-6">
              <MdLocationOn size={30} className="" />{" "}
              <p className="font-semibold text-lg relative text-star">
                Drop off
              </p>
            </div>
            <input
              type="date"
              onChange={change}
              name="dropDate"
              value={dropDate}
              className="w-full bg-gray-400/40 mt-6 px-8 py-4 tracking-[2px]"
            />
          </article>

          {/*  */}
          <button
            onClick={reserveCar}
            className="self-end  text-white bg-yellow-500 py-4 px-4 hover:shadow-2xl duration-700 text-lg font-semibold tracking-[2px]"
          >
            Reserve
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default FormSection;
