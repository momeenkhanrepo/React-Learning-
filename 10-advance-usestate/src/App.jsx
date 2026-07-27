import React, { useState } from 'react'

const App = () => {

  // const [num, setnum] = useState([10,20,30])

  // let getData = ()=>{
  //   const newnum = [...num];
  //   newnum.push(29);
  //   newnum.unshift(121)
  //   setnum(newnum)
  // }

  const [info, setinfo] = useState({user:"momin",age:19})

  let getData = ()=>{
    const newInfo = {...info};
    newInfo.user='Anas'
    newInfo.age=20
    setinfo(newInfo)
  }
  
  return (
    <div>
      {/* <h1>{num}</h1> */}
      <h1>{info.user},{info.age}</h1>
      <button onClick={getData}>Click</button>
    </div>
  )
}

export default App
