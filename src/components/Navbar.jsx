import { useState } from 'react';
import logo from '../assets/images/Untitled design.png'
import { RxHamburgerMenu } from "react-icons/rx";
import {Link} from 'react-router-dom'
import { LiaTimesSolid } from "react-icons/lia";



const Navbar = () => {
    const [show,setShow] = useState(false)
  return (
    <nav className='w-full px-4 md:px-10 py-3 '>
        <section className={`w-full lg:hidden fixed top-0 left-0 bg-red-200 h-full z-50 duration-1000 ${show ? 'translate-x-[0%]' :'-translate-x-[100%]'}`}>
        <div className="w-flex absolute top-5 right-5">
        <LiaTimesSolid className="text-teal-600 text-4xl" onClick={()=> setShow(!show)} />
        </div>

        <div className="flex w-full mt-20 justify-center px-10">
        <ul className="flex flex-col gap-5 w-full text-center uppercase">
                <li className="py-2 bg-teal-200">
                    <Link to='/' className='text-xl text-slate-700 font-extrabold tracking-[2px] my-text hover:text-yellow-300 duration-500'>Home</Link>
                </li>
                <li className="py-2 bg-teal-200">
                    <Link to='/about' className='text-xl text-slate-700 font-extrabold tracking-[2px] my-text hover:text-yellow-300 duration-500'>About</Link>
                </li>
                <li className="py-2 bg-teal-200">
                    <Link to='/models' className='text-xl text-slate-700 font-extrabold tracking-[2px] my-text hover:text-yellow-300 duration-500'> Vehicle Models</Link>
                </li>
                <li className="py-2 bg-teal-200">
                    <Link to='/testimonial' className='text-xl text-slate-700 font-extrabold tracking-[2px] my-text hover:text-yellow-300 duration-500'>Testimonials</Link>
                </li>
                <li className="py-2 bg-teal-200">
                    <Link to='/team' className='text-xl text-slate-700 font-extrabold tracking-[2px] my-text hover:text-yellow-300 duration-500'>Our Team</Link>
                </li>
                <li className="py-2 bg-teal-200">
                    <Link to='/contact' className='text-xl text-slate-700 font-extrabold tracking-[2px] my-text hover:text-yellow-300 duration-500'>Contact</Link>
                </li>
        </ul>
        </div>


        </section>
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
                    <Link to='/models' className='text-lg font-semibold my-text hover:text-yellow-300 duration-500'> Vehicle Models</Link>
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

            <RxHamburgerMenu size={30} className='lg:hidden' onClick={()=> setShow(!show)} />

        </div>
      
    </nav>
  )
}

export default Navbar
