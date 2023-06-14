import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import BillingTailwind from './BillingTailwind'

const Billing = () =>  (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse} >
        <img src={bill} alt="billing" className={BillingTailwind.img} />
        <div className={BillingTailwind.gradientInit} />
        <div className={BillingTailwind.gradientFinish} />
      </div>
      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div>
          <img src={apple} alt="apple" className={BillingTailwind.apple}/>
          <img src={google} alt="google" className={BillingTailwind.google} />
        </div>
      </div>
    </section>
  )

export default Billing