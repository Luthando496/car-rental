import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import carImage from '../assets/images/joshua-koblin-eqW1MPinEV4-unsplash-removebg-preview.png'


const Header = () => {
  return (
    <header className='py-20 px-10 my-bg'>
      <div className="grid grid-cols-1  md:grid-cols-2 my-2-cols  justify-center">
        <article className="col-span-1  mx-auto text-center md:text-left">
        <div className="w-full ">
            <h3 className="text-xl font-semibold mb-2">Plan You Trip Now</h3>
            <h3 className="text-3xl md:text-5xl  lg:text-6xl leading-[1.3] font-bold">Save <span className="text-yellow-500">big</span> with our <br /> car rental</h3>
            <p className="text-gray-700 mt-4 font-semibold">Rent the car of your dreams. Unbeatable prices, unlimited miles,<br /> flexible pick-up options and much more</p>

            <div className="my-4 flex gap-5 items-center">
              <button className="bg-yellow-500 flex items-center gap-3 hover:shadow-2xl duration-1000 text-white font-semibold py-3 px-4 rounded text-xl">Book Ride <FaCheckCircle class={30} /> </button>
              <button className="bg-black flex items-center hover:bg-white hover:border hover:border-black hover:text-black text-white font-semibold py-3 px-4 rounded text-xl duration-1000">Learn More <IoIosArrowForward size={30} className='ml-3 ' /> </button>
            </div>
        </div>
        </article>

        <article className="col-span-1 hidden md:block">

        <img src={carImage} alt="car-image-header" className="z-10" />
        <img src="https://car-rental-ten.vercel.app/static/media/hero-bg.3b5f7a2502f0f81d1490.png" alt="background-hero" className="absolute top-0 right-0 z-[-1] " />

        </article>

      </div>
      
    </header>
  )
}

export default Header
