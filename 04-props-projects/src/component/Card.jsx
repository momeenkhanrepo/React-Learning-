import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
    <div>
        <div className="top">
        <img src={props.logo} alt="naco" />
        <button> save <Bookmark size={12} /> </button>
      </div>
      <div className="center">
        <h3>{props.company}<span>{props.posted}</span></h3>
        <h2>{props.tittle}</h2>
        <div className='tag'>
            <h4>{props.type1}</h4>
            <h4>{props.type2}</h4>
        </div>
      </div>
    </div>
        
        <div className="bottom">
            <div>
              <h3>{props.salary}</h3>
            <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card
