import React from 'react'
import './intro.css'
import Bootstrap from './images/bootstrap.png'
import Css from './images/css.png'
import Django from './images/django.png'
// import html from './images/html.png'
import react from './images/react.png'
import flask from './images/flask.png'
import python from './images/python.png'
import js from './images/js.png'
import php from './images/php.png'
import CallIcon from '@mui/icons-material/Call';
import Typed from 'react-typed';


export default function Intro() {
  return (
    <div className='intro'>
        <div className='myintro'>
        <h1>Hi! I am </h1>
        <h1 className='myname'><Typed
                    strings={['Ayush Shukla','Welcome to my portfolio']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /></h1>
        <h4>I am full stack developer</h4>
        <div className="contact-us">
          <button className='cont-button call'>Call Me {<CallIcon />}</button>
        </div>
        </div>
        <div className='myskills'>
              {/* <h1 className='innerskills'>My skills</h1> */}
            <div className='skills'>
                <img alt='logo' className='react' src={react}></img>
                <img alt='logo' className='flask' src={flask}></img>
                <img alt='logo' className='php' src={php}></img>
                <img alt='logo' className='js' src={js}></img>
                <img alt='logo' className='python' src={python}></img>
                <img alt='logo' className='bootstrap' src={Bootstrap}></img>
                <img alt='logo' className='css' src={Css}></img>
                <img alt='logo' className='django' src={Django}></img>
            </div>
        </div>
        </div>
  )
}
