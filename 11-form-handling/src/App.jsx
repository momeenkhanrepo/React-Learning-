import React from 'react'

const App = () => {
  
  const submitHnadler =(dets)=>{
    dets.preventDefault()
    console.log("Form Submitted")
  }

  return (
    <div>
      <h1>File Handiing Practice</h1>
      <form onSubmit={(dets)=>{
        submitHnadler(dets)
      }}>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
