import React from 'react'
import { arrowUp } from '../assets'
import GetStart from './GetStartedTailwind'

const GetStarted = () => {
  return (
    <div className={GetStart.bg} >
      <div className={GetStart.effect}>
        <div className={GetStart.container}>
          <p className={GetStart.textContent}>
            <span className='text-gradient' >
              Get
            </span>
          </p>
            <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className={GetStart.textContent}>
            <span className='text-gradient' >
              Started
            </span>
          </p>
      </div>
    </div>
  )
}

export default GetStarted