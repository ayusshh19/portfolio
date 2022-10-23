import React from 'react'
import './service.css'
import DownloadIcon from '@mui/icons-material/Download';
import Cards from './component/cards/cards';
import python from './images/pythondev.jfif'
import frontend from './images/frontend.jpg'
import backend from './images/backend.jfif'

export default function Service() {
  return (
    <div className='service'>
        <div className='myservice'>
            <h1>My service</h1>
            <h3>Hi I am professional Backend Developer with Good knowledge of Frontend</h3>
            <div className="contact-us">
          <button className='cont-button call'>Download CV {<DownloadIcon />} </button>
        </div>
        </div>
        <div className='servicecards'>
            <Cards logo={python} title={'Python Developer'} lang={'Pandas,Numpy,OpenCV,Matplotlip,ML'} />
            <Cards logo={frontend} title={'frontend Developer'} lang={'html,css,javascript,react'}/>
            <Cards logo={backend} title={'backend Developer'} lang={'php,flask,django'}/>
        </div>
    </div>
  )
}
