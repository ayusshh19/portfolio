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
    <div className='intro' id='home'>
      <div className='myintro'>
        <h1>Hi! I am </h1>
        <h1 className='myname'><Typed
          strings={['Ayush Shukla', 'Welcome to my portfolio', 'I am Full Stack Developer']}
          typeSpeed={40}
          backSpeed={50}
          loop
        /></h1>
        <button class="button-33"  style={{ display: 'flex', alignSelf: 'center' }}><a href="tel:+919892250482"> Call Me <CallIcon /></a></button>

      </div>

      <div className='myskills'>
        {/* <h1 className='innerskills'>My skills</h1> */}
        <div id="container">
          <div class="item" style={{ "--d": '0s' }}><img alt='logo' className='react' src={react}></img></div>
          <div class="item" style={{ "--d": "-2s" }}><img alt='logo' className='flask' src={flask}></img></div>
          <div class="item" style={{ "--d": "-4s" }}><img alt='logo' className='php' src={php}></img></div>
          <div class="item" style={{ "--d": "-6s" }}><img alt='logo' className='js' src={js}></img></div>
          <div class="item" style={{ "--d": "-8s" }}><img alt='logo' className='python' src={python}></img></div>
          <div class="item" style={{ "--d": "-10s" }}><img alt='logo' className='bootstrap' src={Bootstrap}></img></div>
          <div class="item" style={{ "--d": "-12s" }}><img alt='logo' className='css' src={Css}></img></div>
          <div class="item" style={{ "--d": "-14s" }}><img alt='logo' className='django' src={Django}></img></div>
        </div>
        {/* <div className='skills'>
                <img alt='logo' className='react' src={react}></img>
                <img alt='logo' className='flask' src={flask}></img>
                <img alt='logo' className='php' src={php}></img>
                <img alt='logo' className='js' src={js}></img>
                <img alt='logo' className='python' src={python}></img>
                <img alt='logo' className='bootstrap' src={Bootstrap}></img>
                <img alt='logo' className='css' src={Css}></img>
                <img alt='logo' className='django' src={Django}></img>
            </div> */}
      </div>
    </div>
  )
}
