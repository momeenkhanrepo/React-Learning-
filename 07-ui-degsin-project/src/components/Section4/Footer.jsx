import React from 'react'
import { ChartColumnDecreasing } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
   <>
   <div className='bg-gray-900 pb-8 border-b border-gray-500 flex w-full mt-20 pl-10 pr-10 pt-5  '>
      <div className='w-1/2 h-[48vh] pr-2 pl-2'>
        <h2 className='flex gap-2.5 uppercase font-semibold text-2xl text-white tracking-wider '><span className='text-2xl text-white'><ChartColumnDecreasing size={36} strokeWidth={3} /></span>Carsendo</h2>
        <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam <br /> recusandae a alias natus aliquam consequuntur <br /> corrupti fugit ullam.</p>
        <h2 className='text-white mt-4 tracking-wider text-base font-medium'>Join Our List Today!</h2>
        <input className='bg-gray-200 mt-4 w-80 text-sm p-1 pl-5 rounded-md font-semibold' type='email'placeholder='Your Email...' />
        <br />
        <button className='bg-blue-600 hover:bg-blue-800 text-white mt-6 pl-5 pr-5 pt-1 pb-1 rounded-md text-base font-semibold'>Subscribe</button>
        <p className='mt-4 text-gray-100 text-sm font-medium'>Subscribe to our newsletter and get exclusive deals, new arrivals, and special <br /> offers delivered straight to your inbox.</p>
      </div>
      <div className='flex gap-20'>
        <div className='mt-20'>
        <h1 className='text-gray-200 text-base font-semibold '>Main Page</h1>
        <ul className='text-gray-400 mt-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
      </div>
      <div className='mt-20'>
        <h1 className='text-gray-200 text-base font-semibold '>Utility Page</h1>
        <ul className='text-gray-400 mt-5'>
            <li>License</li>
            <li>Changelog</li>
            <li>Style guide</li>
            <li>404 not found</li>
        </ul>
      </div>

      <div className='mt-20'>
        <h1 className='text-gray-200 text-base font-semibold '>Contact us :-</h1>
        <ul className='text-gray-400 mt-5'>
            <li className='flex items-center'><Phone size={18} /><span className='ml-2'>+9163785xxxxx</span></li>
            <li className='flex items-center'><Mail size={18} /><span className='ml-2'>dwll@gmail.com</span></li>
            <li className='flex items-center'><MapPin size={18} /><span className='ml-2'>Mumbai , India</span></li>
        </ul>
      </div>
      </div>
    </div>
    <div className="flex justify-between items-center px-10 py-5 bg-gray-900">
 
  <div className="flex items-center gap-5 text-gray-400">
    <FaInstagram size={18} className="hover:text-white cursor-pointer" />
    <IoLogoLinkedin size={18} className="hover:text-white cursor-pointer" />
   <FaFacebook size={18} className="hover:text-white cursor-pointer" />
    <FaTwitter  size={18} className="hover:text-white cursor-pointer" />
  </div>
  
  <p className="text-sm text-gray-400">
    Built By <span className="text-white font-medium">Momeen Khan</span> · Powered By
    <span className="text-white font-medium"> React</span>
  </p>
</div>
</>
  )
}

export default Footer
