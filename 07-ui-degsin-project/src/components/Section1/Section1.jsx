import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Featureproduct from './Featureproduct'

const Section1 = () => {
  return (
    <div className=' h-screen w-full'>
        <Navbar/>
        <Herosection/>
        <Featureproduct/>
    </div>
  )
}

export default Section1
