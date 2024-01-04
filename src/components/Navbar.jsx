import logo from '../assets/images/Untitled design.png'
import { RxHamburgerMenu } from "react-icons/rx";
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='w-full px-4 md:px-10 py-3 '>
        <div className="flex items-center justify-between">
            <img className="h-24 w-32 object-cover" src={logo} alt='logo' />

            <ul className="hidden lg:flex items-center gap-10">
                <li className="">
                    <Link to='/' className='text-lg font-semibold my-text hover:text-yellow-300 duration-500'>Home</Link>
                </li>
                <li className="">
                    <Link to='/about' className='text-lg font-semibold my-text hover:text-yellow-300 duration-500'>About</Link>
                </li>
                <li className="">
                    <Link to='/' className='text-lg font-semibold my-text hover:text-yellow-300 duration-500'> Vehicle Models</Link>
                </li>
                <li className="">
                    <Link to='/testimonial' className='text-lg font-semibold my-text hover:text-yellow-300 duration-500'>Testimonials</Link>
                </li>
                <li className="">
                    <Link to='/team' className='text-lg font-semibold my-text hover:text-yellow-300 duration-500'>Our Team</Link>
                </li>
                <li className="">
                    <Link to='/contact' className='text-lg font-semibold my-text hover:text-yellow-300 duration-500'>Contact</Link>
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
