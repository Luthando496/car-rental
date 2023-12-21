import logo from '../assets/images/Untitled design.png'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <nav className='w-full px-4 md:px-10 py-3 '>
        <div className="flex items-center justify-between">
            <img className="h-24 w-32 object-cover" src={logo} alt='logo' />

            <ul className="hidden lg:flex items-center gap-10">
                <li className="">
                    <a className='text-lg font-semibold my-text hover:text-yellow-300 duration-500' href="http://">Home</a>
                </li>
                <li className="">
                    <a className='text-lg font-semibold my-text hover:text-yellow-300 duration-500' href="http://">About</a>
                </li>
                <li className="">
                    <a className='text-lg font-semibold my-text hover:text-yellow-300 duration-500' href="http://"> Vehicle Models</a>
                </li>
                <li className="">
                    <a className='text-lg font-semibold my-text hover:text-yellow-300 duration-500' href="http://">Testimonials</a>
                </li>
                <li className="">
                    <a className='text-lg font-semibold my-text hover:text-yellow-300 duration-500' href="http://">Our Team</a>
                </li>
                <li className="">
                    <a className='text-lg font-semibold my-text hover:text-yellow-300 duration-500' href="http://">Contact</a>
                </li>
            </ul>

            <div className="hidden lg:flex gap-4 items-center">
                <button className="text-lg font-semibold">Sign In</button>
                <button className="px-5 rounded-sm py-4 shadow-xl text-white text-lg font-semibold bg-yellow-400">Register</button>
            </div>

            <RxHamburgerMenu size={30} className='lg:hidden' />

        </div>
      
    </nav>
  )
}

export default Navbar
