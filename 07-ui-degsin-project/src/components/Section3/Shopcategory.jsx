import React from 'react'
import { ArrowLeft} from 'lucide-react'
import {ArrowRight} from 'lucide-react'

const Shopcategory = () => {
  return (
    <div className='flex justify-between p-6 pr-10 pl-10 pt-13 font-mono'>
       <h1 className='font-bold text-4xl tracking-wide'>Shop By Category</h1>
       <div className='flex gap-5'>
        <ArrowLeft size = {36}className='bg-gray-200 p-2 rounded-full border border-gray-400 text-gray-500' />
        <ArrowRight size={36} className='bg-gray-200 p-2 rounded-full border border-gray-400 text-gray-500'  />
       </div>
    </div>
  )
}

export default Shopcategory
