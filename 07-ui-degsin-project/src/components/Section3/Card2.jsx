import React from 'react'
import { ChevronRight } from 'lucide-react'

const Card2 = (props) => {
  return (
    <div className='bg-gray-300 ml-10  mr-10 mt-12 h-96 w-72 rounded-xl p-3'>
        <h2 className='ml-3 mt-1.5 font-bold text-2xl'>{props.title}</h2>
        <p className='text-base  text-gray-500 ml-4 mt-0.5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur necessitatibus, qui eligendi officia eius ut.</p>
        <p className=' flex items-center ml-3 mt-1.5 font-semibold text-blue-600'>View Accessories <ChevronRight size={25} /> </p>
       <img className='h-45 w-38 object-cover  ml-12 mt-4' src={props.image} alt="" />
    </div>
  )
}

export default Card2
