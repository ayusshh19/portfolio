import React from 'react'
import './projectcard.css'


export default function Projectcards(props) {
  return (
    <div className='projectcards'>
        <a href={props.linkto} target="_blank" rel="noopener noreferrer">
        <img src={props.img} alt="" srcset="" />
        </a>
        
    </div>
  )
}
