import {RxArrowLeft} from 'react-icons/rx'

const Header = () => {
  return (
    <header className='py-20 px-10'>
      <div className="grid grid-cols-2 gap">
        <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-2">Plan You Trip Now</h3>
            <h3 className="text-6xl leading-[1.3] font-bold">Save <span className="text-yellow-500">big</span> with our <br /> car rental</h3>
            <p className="text-gray-700 mt-4 font-semibold">Rent the car of your dreams. Unbeatable prices, unlimited miles,<br /> flexible pick-up options and much more</p>

            <div className="my-4 flex gap-5 items-center">
              <button className="bg-yellow-500 hover:shadow-2xl text-white font-semibold py-3 px-4 rounded text-2xl">Book Ride</button>
              <button className="bg-yellow-500 flex gap-4 hover:shadow-2xl text-white font-semibold py-3 px-4 rounded text-2xl">Learn More <RxArrowLeft /> </button>
            </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header
