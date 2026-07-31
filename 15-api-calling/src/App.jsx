import React from 'react'
import { useState } from 'react';

const App = () => {

  const [item, setitem] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/todos/';

  const getData = async()=>{
    let response = await fetch(url);
    let data = await response.json()
    
    setitem(data)
    
    }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        <h3>Information</h3>
        {item.map((elem,idx)=>{
          if(elem.id>50){
            return <p>{elem.id}</p>
          }
          
        })}
      </div>
   </div>
  )

  }

  


export default App
