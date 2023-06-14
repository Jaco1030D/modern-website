import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import styles from './NavbarTailWind'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
   <nav className={styles.nav} >
      <img src={logo} className="w-[124px] h-[32px]" />
      <ul className={`${styles.ul} sm:flex hidden`} >
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`${styles.li} ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} `} >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={`${styles.div1}`}>
        <img src={toggle ? close : menu} alt="menu" className={`${styles.menu}`} onClick={() => setToggle((prev) => !prev)} />
          <div className={`${toggle ? 'flex' : 'hidden'} ${styles.div2} `}>
            
            <ul className={ `${styles.ul} flex flex-col`} >
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`${styles.li} ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}`} >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            
            </ul>
          </div>
      </div>

   </nav>
  )
}

export default Navbar