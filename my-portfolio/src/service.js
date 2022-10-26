import React from 'react'
import './service.css'
import resume from './ayushresume.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import Cards from './component/cards/cards';
import python from './images/pythondev.jfif'
import frontend from './images/frontend.png'
import backend from './images/backend.jfif'
import { AnimatePresence, motion } from 'framer-motion'
// import { useState } from "react";

export default function Service() {
  // const [isInView, setIsInView] = useState(false);
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className='service' id='service'>
      <div className='myservice'>
        <h1>My service</h1>
        <h3>Hi I am professional Backend Developer with Good knowledge of Frontend</h3>
        <div className="contact-us">
          <button className='button-33' style={{ display: 'flex', alignSelf: 'center' }}><a href={resume}>Download CV {<DownloadIcon />} </a></button>
        </div>
      </div>
      <div className='servicecards'>
        <div data-aos="fade-in"
          ><Cards  logo={python} title={'Python Developer'} lang={'Pandas,Numpy,OpenCV,Matplotlip,ML'} left={'50%'} /></div>
        <div data-aos="fade-in" ><Cards  logo={frontend} title={'frontend Developer'} lang={'html,css,javascript,react'} left={'0%'} /></div>
        <div data-aos="fade-in" >
          <Cards logo={backend} title={'backend Developer'} lang={'php,flask,django'} left={'50%'} />
        </div>

      </div>
    </div>
  )
}
