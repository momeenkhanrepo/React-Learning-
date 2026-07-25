import React from 'react'

const App = () => {
 


// let clickedbtn =()=>{
//   console.log("btn is click")
// }

  return (
    <div>
      <input type="text" onKeyPress={(el)=>{
        console.log(el.key)
      }}/>
    </div>
  )
}

export default App
