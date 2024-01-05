import React from "react";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import BackgroundContact from "../components/BackgroundContact";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationArrow1,CiMail,CiPhone } from "react-icons/ci";


const Contact = () => {
  return (
    <>
      <CustomHeader title="Contact" />

      <section className="w-full py-32 bg-contact">
        <div className="w-full px-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article className="col-span-1 w-full space-y-5">
            <h1 className="text-5xl font-bold leading-[1.3]">Need Additional Information</h1>
            <p className="text-gray-500 text-lg font-semibold">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>

            <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-center">
                    <MdOutlineLocalPhone className="text-2xl " />
                    <p className="text-lg text-slate-800 font-semibold">(+27)76 705 7533</p>
                </div>
                <div className="flex gap-4 items-center">
                    <CiMail className="text-2xl text-yellow-700" />
                    <p className="text-lg text-slate-800 font-semibold">luthandodidiza197@gmail.com</p>
                </div>
                <div className="flex gap-4 items-center">
                    <CiLocationArrow1 className="text-2xl text-yellow-700" />
                    <p className="text-lg text-slate-800 font-semibold">Cape Town South Africa</p>
                </div>
            </div>
          </article>

          <article className="col-span-1 w-full">
            <div className="flex flex-col gap-8">
            {/* 1 */}
                <div className="w-full space-y-2">
                    <h2 className="text-3xl font-roboto text-gray-900">Full Name</h2>
                    <input type="text" className="w-full py-4 px-14 bg-gray-300 focus:outline-none font-roboto" placeholder='E.g: "John Doe" ' />
                </div>
                {/* 2 */}
                <div className="w-full space-y-2">
                    <h2 className="text-3xl font-roboto text-gray-900">Your Email</h2>
                    <input type="text" className="w-full py-4 px-14 bg-gray-300 focus:outline-none font-roboto" placeholder='example@gmail.com ' />
                </div>
                {/* 3 */}
                <div className="w-full ">
                    <button className="w-full bg-amber-400 py-4 rounded-sm shadow-lg justify-center flex gap-5 items-center text-white font-roboto text-2xl tracking-[2px]">
                    <CiMail className="text-white text-2xl font-bold" />Send Message</button>
                </div>
            </div>
          </article>
        </div>
      </section>

      <BackgroundContact />
      <Footer />
    </>
  );
};

export default Contact;
