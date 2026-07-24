import React from 'react'
import headphone from '../../assets/headphone.png';

const Herosection = () => {
  return (
    <div className='bg-blue-900 ml-10  mr-10 mt-6 h-[60vh] rounded-xl p-3.5 text-white flex'>
        <div className='flex flex-col w-[70%]'>
            <h1 className='text-4xl font-bold tracking-wider p-4 mt-9'>Elevate Your Audio Journey</h1>
            <p className='text-gray-200 pl-4 pr-4 mt-2.5 text-base  '>Experience sound like never before with our premium collection of wireless headphones, designed to deliver exceptional audio quality, unmatched comfort, and modern style.<br></br> Whether you're enjoying your favorite music, attending online meetings, gaming <br /> or working out, our headphones provide crystal-clear sound <br /> deep bass, and long-lasting battery life to keep you connected all day.</p>
            <div className='p-4 mt-6'>
                <button className='bg-blue-500 hover:bg-blue-700 text-gray-200 pt-1.5 pb-1.5 pl-3 pr-3 rounded-md font-semibold text-sm shadow-[0_8px_18px_rgba(0,0,0,0.4)]'>Shop Now</button>
                <button className='pt-1.5 pb-1.5 pl-3 pr-3 rounded-md font-semibold text-sm text-gray-300 border border-gray-300 ml-12 shadow-[0_8px_20px_rgba(0,0,0,0.4)]'>Learn More</button>
            </div>
        </div>
            
        <div>
            <img className='h-96 w-96  mb-10 object-cover  ' 
            src={headphone}
            alt="" />
        </div>
    </div>
  )
}

export default Herosection
