import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from './images/project1.PNG'
import project2 from './images/project2.PNG'
import project3 from './images/project3.PNG'
import project4 from './images/project4.PNG'
import project5 from './images/project5.PNG'
import { EffectFade } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { AnimatePresence, motion } from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
import Projectcards from './component/projectcards/Projectcards';
SwiperCore.use([Autoplay])

export default function Recentproject() {
  return (
    <motion.div className='recent' style={{height:'60%'}} 
    whileHover={{ scale: 1.1 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}>
        <h1 style={{textAlign:'center'}}>My recent projects</h1>
        <Swiper
      spaceBetween={20}
      slidesPerView={4}
      grabCursor={true}
      loop={true}
      autoplay={{ delay: 2500 }}
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        480: {
          slidesPerView: 2,
        },
        786:{
          slidesPerView: 3,
        },
        1000:{
          slidesPerView:4,
        }
      }}
    >
      <SwiperSlide><Projectcards img={project1} linkto={'https://socialreactjs1.herokuapp.com/'}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project2} linkto={'https://pipeweb1.herokuapp.com/'} /></SwiperSlide>
      <SwiperSlide><Projectcards img={project3} linkto={'https://gdscevent.herokuapp.com/'}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project4} linkto={'https://github.com/ayusshh19/icecream'}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project5} linkto={'https://github.com/ayusshh19/webfriends'}/></SwiperSlide>
    </Swiper>
    </motion.div>
  )
}
