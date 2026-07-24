import React from 'react'
import Card from './Card'
import { BotMessageSquare } from 'lucide-react'
import Boat from '../../assets/Boat.earbuds.png'
import headphone from '../../assets/headphonecard.png'
import Amazon from '../../assets/AmazonSpeekar.png'
import Earphone from '../../assets/earphone.png'

const Section2 = () => {
  return (
    <div className=' h-screen w-full flex justify-between items-center'>
        <Card
        image={Boat}
        category="Earbuds"
        tittle="Airdope 1992"
        price="$122.00 USD"
        />

         <Card
        image={headphone}
        category="Headphone"
        tittle="BoAt Headphone"
        price="$143.00 USD"
        />

         <Card
        image={Amazon}
        category="Speekar"
        tittle="Amazon ECO"
        price="$112.00 USD"
        />
        
        <Card
        image={Earphone}
        category="Earphone"
        tittle="KDM"
        price="$18.00 USD"
        />
    </div>
  )
}

export default Section2
