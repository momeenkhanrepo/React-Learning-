import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-gray-300 ml-10  mr-10  h-90 w-80 rounded-xl p-3.5'>
    <img  className ='h-50 w-50 object-cover ml-5 mt-2 className="drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"' src={props.image} alt="" />
        <p className='text-base font-bold text-gray-500 ml-4 mt-5 tracking-wider'>{props.category}</p>
        <h2 className='ml-4 mt-1.5 font-bold text-2xl'>{props.tittle}</h2>
        <h3 className='ml-4 mt-3 font-bold text-blue-400 text-xl'>{props.price}</h3>
    </div>
  )
}

export default Card
