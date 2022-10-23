import React from 'react'
import react from './../../images/react.png'
import './cards.css'
export default function Cards(props) {
  return (
    <div className='cardsdesign'>
        <div >
            <img className='cardsimg' alt='logo' src={props.logo}></img>
        </div>
        <div>
            <h2>{props.title}</h2>
        </div>
        <div>
            <h4>{props.lang}</h4>
        </div>
    </div>
  )
}
