import React from 'react'
import './commiteecards.css'

export default function Commiteecards(props) {
  return (
    <div className='Commiteecards'>
        <div className="left"><img src={props.logo} alt="" srcset="" /></div>
        <div className="right">
            <h2>{props.name}</h2>
            <p>{props.position}</p>
        </div>
    </div>
  )
}
