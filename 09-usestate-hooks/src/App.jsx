import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  
  function increaseNum(){
    setnum(num+1)
  }

  function deccreaseNum(){
    
    if(num>0){
      setnum(num-1)
    }
  }

  function reset(){
    setnum(0)
  }
  function increase5(){
    setnum(num+5)
  }

  return (
    <div className='main'>
      <div>
        <h1>{num}</h1>
        <div className="btn">
          <button onClick={increaseNum}>Increase</button>
          <button onClick={deccreaseNum}>Decrease</button>
        </div>
        <div className="btn2">
          <button onClick={increase5}>Increase +5</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
