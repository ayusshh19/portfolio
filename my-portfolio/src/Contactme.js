import React,{ useRef, useState } from 'react'
import './contactme.css'
import emailjs from '@emailjs/browser';

export default function Contactme() {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [message,setmessage]=useState('')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setname('')
        setemail('')
        setmessage('')

        emailjs.sendForm('service_ytn0s0t', 'template_wdno0pc', form.current, 'Qs1Nd6uN69YjKtl0a')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <div className='contactme' id='contact'>
        <div className='contleft'>
            <h1>GET IN TOUCH</h1>
            <h1 style={{color:'red'}}>Contact Me</h1>
        </div>
        <div className='contright' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-offset="0">
        <form ref={form} onSubmit={sendEmail}>
                <input type={'text'} placeholder={'NAME'} value={name} name="user_name" onChange={(e)=>setname(e.target.value)}></input>
                <input type={'text'} placeholder={'EMAIL'} value={email} name="user_email" onChange={(e)=>setemail(e.target.value)}></input>
                <input type={'text'} placeholder={'MESSAGE'} value={message} name="message" onChange={(e)=>setmessage(e.target.value)}></input>
                <div className="contact-us">
                <input type="submit" value={`Send Mail`}   className='button-33'/>
        </div>
          </form>
        </div>
    </div>
  )
}
