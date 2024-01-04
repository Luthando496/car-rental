import React from "react";
import person1 from "../assets/images/pexels-hasibullah-zhowandai-819530.jpg";
import person2 from "../assets/images/pexels-simon-robben-614810.jpg";

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-200/60 py-28 px-5 ">
      <div className="text-center space-y-6 ">
        <h2 className="text-2xl font-semibold">Review by People</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/70">
          Client's Testimonials
        </h1>
        <p className="text-gray-500 font-medium">
          Discover the positive impact we've made on the our clients
          <br className="hidden md:block" /> by reading through their
          testimonials. Our clients have experienced
          <br className="hidden lg:block" /> our service and results, and
          they're eager to share their positive experiences with you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 lg:px-20 mt-10">
        {/*  */}
        <div className="w-full col-span-1 shadow-lg shadow-slate-200 px-4 py-6 space-y-2 bg-white">
          <h4 className="text-lg md:text-2xl font-semibold">
            "We rented a car from this website and had <br />
            an amazing experience! The booking was easy and the rental rates
            were
            <br /> very affordable. "
          </h4>

          <div className="flex gap-4 items-center pt-6">
            <img
              src={person1}
              alt="avatar-image"
              className="w-14 h-14 lg:w-28 lg:h-28 object-cover rounded-full"
            />
            <div className="flex flex-col ">
              <h3 className="text-xl lg:text-3xl font-semibold">Jonathan Smith</h3>
              <p className="text-gray-600 font-semibold capitalize">
                Cape Town
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full col-span-1 shadow-lg shadow-slate-200 px-4 py-6 space-y-2 bg-white">
          <h4 className="text-lg md:text-2xl font-semibold">
            "We rented a car from this website and had <br />
            an amazing experience! The booking was easy and the rental rates
            were
            <br /> very affordable. "
          </h4>

          <div className="flex gap-4 items-center pt-6">
            <img
              src={person2}
              alt="avatar-image"
              className="w-14 h-14 lg:w-28 lg:h-28 object-cover rounded-full"
            />
            <div className="flex flex-col ">
              <h3 className="text-xl lg:text-3xl font-semibold">Jonathan Smith</h3>
              <p className="text-gray-600 font-semibold capitalize">
                Cape Town
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
