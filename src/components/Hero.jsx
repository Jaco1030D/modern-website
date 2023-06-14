import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import heroCss from './HeroTailwind'

const Hero = () =>  (
    <section id='home' className={heroCss.section}>
      <div className={heroCss.main} >
        <div className={heroCss.message} >
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={heroCss.p}>
          <span className='text-white' >20%</span> discont for {" "}
          <span className='text-white' >1 month</span> account
          </p>
        </div>
        <div className={heroCss.titleContainer}>
          <h1 className={heroCss.title} >
            The Next <br className='sm:block hidden' />{" "}
            <span className='text-gradient' >Generation</span>{" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>
        <h1 className={heroCss.subTitle} >
          Payment Method
        </h1>
        <p className={heroCss.infoText} >
        Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.  
        </p>
      </div>
      <div className={heroCss.gradientContainer} >
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className={heroCss.gradientInit} />
        <div className={heroCss.gradient} />
        <div className={heroCss.gradientFinish} />
      </div>

        <div className={heroCss.btn} >
          <GetStarted/> 
        </div>
    </section>
)

export default Hero