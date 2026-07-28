import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [pass, setpass] = useState('')
  
  const submitHnadler =(dets)=>{
    dets.preventDefault()
    console.log("Form Submitted" , title)
    settitle('')
    setpass('')
  }

  return (
    <div>
      <h1>File Handiing Practice</h1>
      <form onSubmit={(dets)=>{
        submitHnadler(dets)
      }}>
        <input
         type="text"
          placeholder='username'
          value={title}
          onChange={(dets)=>{
            settitle(dets.target.value)
          }}
        />
        <input type="password" placeholder='password' value={pass} onChange={(dets)=>{setpass(dets.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
