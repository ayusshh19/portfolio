import React from 'react'
import './committe.css'
import Commiteecards from './component/commiteecards/commiteecards'
import csi from './images/csi.png'
import gdsc from './images/gdsc.jpeg'
import alumni from './images/alumni.jpg'
import swapnil from './images/swapnillogo.png'

export default function Committe(props) {
  return (
    <div className='committe' id='committe'>
        <h1>Committee & Internships</h1>
        <div className='cardset' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <Commiteecards logo={csi} name={'Computer society of India'} position={'Tech Team'}/>
        <Commiteecards logo={gdsc} name={'Google Development Student Club'} position={'Web Development Team '}/>
        <Commiteecards logo={alumni} name={'DMCE Alumni'} position={'Backend team'}/>
        <Commiteecards logo={alumni} name={'DMCE Alumni (Internship)'} position={'Backend Developer'}/>
        <Commiteecards logo={alumni} name={'DMCE Web Main (Internship)'} position={'Full Stack developer '}/>
        <Commiteecards logo={swapnil} name={'Swapnil Enterprises'} position={'Full Stack developer '}/>
        </div>
        </div>
  )
}
