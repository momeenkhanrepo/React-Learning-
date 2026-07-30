import React from 'react'

const App = () => {

  // localStorage.setItem('user','Momeen khan')
  // const user = localStorage.getItem('user')

  // console.log(user);

// const userData = {
//   user: 'Momeen Khan',
//   age:21,
//   city:'Bareilly',
// }

// localStorage.setItem('userData',JSON.stringify(userData))
  
const userData = JSON.parse(localStorage.getItem('userData'))
console.log(userData);


  return (
    <div>
      app
    </div>
  )
}

export default App
