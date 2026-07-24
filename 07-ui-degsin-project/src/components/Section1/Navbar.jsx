import React from 'react'
import {ShoppingCart} from 'lucide-react'
import { ChartColumnDecreasing} from 'lucide-react'
const Navbar = () => {
  return (
    <div className='flex justify-between p-6 pr-10 pl-10 font-mono '>
      <h2 className='flex gap-2.5 uppercase font-bold text-2xl tracking-wider '><span className='text-2xl text-blue-600'><ChartColumnDecreasing size={36} strokeWidth={3} /></span>Carsendo</h2>
      <ul className='flex gap-13 font-medium text-base'>
        <li>Home</li>
        <li>Product</li>
        <li>Find Us</li>
        <li>About</li>
      </ul>
       
      <div className='flex items-center gap-3.5 text-lg '> <ShoppingCart /><span className='bg-blue-600 text-white pl-2.5 pr-2.5 pt-2 pb-2 rounded-md ml-5 text-sm font-semibold'>Buy Template</span></div>
    </div>
    
  )
}

export default Navbar
