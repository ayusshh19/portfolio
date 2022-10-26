import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <div className='footer'>
        <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#e74c3c" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,85.3C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<div className='footercontent'>
<div className='footerright'>
    <span><a href="https://www.instagram.com/ayusshh19/" target="_blank" rel="noopener noreferrer">{<InstagramIcon />}</a></span>
    <span><a href="https://github.com/ayusshh19" target="_blank" rel="noopener noreferrer">{<GitHubIcon />}</a></span>
    <span><a href="https://www.linkedin.com/in/ayushshukla1906/" target="_blank" rel="noopener noreferrer">{<LinkedInIcon />}</a></span>
    <span><a href="https://www.facebook.com/profile.php?id=100011634937670" target="_blank" rel="noopener noreferrer">{<FacebookIcon />}</a></span>
</div>
<div className='footerleft'>cm.b.49ayush.shukla@gmail.com</div>
</div>
    </div>
  )
}
