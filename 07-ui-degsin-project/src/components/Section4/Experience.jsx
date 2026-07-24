import React from 'react'
import { Handbag } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'
import { Trash } from 'lucide-react'

const Experience = () => {
  return (
    <div className='bg-gray-300 ml-10 mr-10 mt-6 h-[64vh] rounded-xl p-3.5'>
      <h1 className='text-center text-3xl font-bold'>Experience Streamlined <br /> Shopping With Carsendo</h1>
      <div className='flex justify-evenly text-center '>
        <div className=' ml-10  mr-10 mt-12  w-72 rounded-xl p-3'>
        <Handbag className=' block mx-auto mb-4' size={38} />
        <h2 className='text-2xl font-semibold mb-2'>Free Delivery</h2>
        <p className='text-sm text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim harum fugit officiis provident aliquid velit sapiente facilis.</p>
      </div>
      <div className=' ml-10  mr-10 mt-12  w-72 rounded-xl p-3'>
        <ShoppingBag size={36} className=' block mx-auto mb-4' size={38} />
        <h2 className='text-2xl font-semibold mb-2'>Self Pickup</h2>
        <p className='text-sm text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim harum fugit officiis provident aliquid velit sapiente facilis.</p>
      </div>
      <div className=' ml-10  mr-10 mt-12  w-72 rounded-xl p-3'>
        <Trash size={38} className=' block mx-auto mb-4' size={38} />
        <h2 className='text-2xl font-semibold mb-2'>Warranty</h2>
        <p className='text-sm text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim harum fugit officiis provident aliquid velit sapiente facilis.</p>
      </div>
      </div>
      <div className='flex justify-center mt-4'>
        <button className='bg-blue-600 hover:bg-blue-800 text-white font-semibold text-base p-1 pl-4 pr-4 rounded-md'>Shop Now</button>
      </div>
    </div>
  )
}

export default Experience
