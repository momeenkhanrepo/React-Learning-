import React from 'react'
import Card from './components card/Card'

const App = () => {
  return (
    <div>
      <Card user = 'Spider Man' age ={26} img = 'https://i.pinimg.com/736x/f5/fd/52/f5fd52516c524289aaca291735bed900.jpg'/>

      <Card user = 'Iron Man' age ={32} img ='https://i.pinimg.com/736x/10/3e/3e/103e3e86b61739a1063292ac311beb28.jpg' />

    </div>
  )
}

export default App
