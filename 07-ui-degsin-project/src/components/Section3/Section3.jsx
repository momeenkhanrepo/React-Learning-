import React from 'react'
import Shopcategory from './Shopcategory'
import Card2 from './Card2'
import ring from '../../assets/ring.png'
import charger from '../../assets/charger.png'
import speekar from '../../assets/sony.png'
import watch from '../../assets/watch.png'

const Section3 = () => {
  return (
    <div className='h-screen w-full'>
      <Shopcategory/>
      <div className='flex justify-between items-center'>
          <Card2
      image = {ring}
      title="Rings"
      />
       <Card2
      image = {charger}
      title="Chargers"
      />
       <Card2
      image = {speekar}
      title="Speekar"
      />

       <Card2
      image = {watch}
      title="Watches"
      />
      </div>
    </div>
  )
}

export default Section3
