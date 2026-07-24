import React from 'react'
import card from './compoment/card'
import Navbar from './compoment/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      {card()}
      
    </div>
  )
}

export default App
