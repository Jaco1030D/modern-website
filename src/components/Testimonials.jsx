import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import TestimonialsTailwind from './TestimonialsTailwind'


const Testimonials = () => (
  <section id='clients' className={TestimonialsTailwind.section} >
    <div className={TestimonialsTailwind.gradient}/>
    <div className={TestimonialsTailwind.content}>
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className={TestimonialsTailwind.card}>
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
)

export default Testimonials