import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt="" />
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt magnam, harum iste in vero perferendis dignissimos mollitia illum fugit? Cum maxime accusamus dicta distinctio voluptates alias nisi molestiae, nam aspernatur?</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
