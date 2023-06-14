import React from 'react'
import { stats } from '../constants'
import statsCss from './StatsTailWind'

const Stats = () => (
  <section className={statsCss.section} >
    {stats.map((stat) => (
      <div key={stat.id} className={statsCss.content} >
        <h4 className={statsCss.value} >
          {stat.value}
        </h4>
        <p className={statsCss.title} >
          {stat.title}
        </p>
      </div>
    ))}
  </section>
)


export default Stats