import React from 'react'
import styles from "./../scss/Navbar.module.scss"
import { motion } from 'framer-motion'
import { useTheme } from './context/ThemeProvider'
import Toggle from './context/toggle'


function Navbar() {
  const {isDarkMode} = useTheme()
  return (
    <motion.nav 
    initial={{opacity:0, y: -50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5, delay: 2}}
    viewport={{once:false}}
    style={{color: isDarkMode ? "white" : 'black'}}
    className={styles.navbar}>
        <div
        className={styles.logo}
        
        ><h1>LOGO</h1></div>
        <div className={styles.list}>
            <ul>
                <a href="">
                <li>Home</li>
                </a>
                <a href="">
                <li>About</li>
                </a>
                <a href="">
                <li>Products</li>
                </a>
                <a href="">
                <li>Return package</li>
                </a>
                <a href="">
                <li>Track package</li>
                </a>
                <a href="">
                <li>Contact us</li>
                </a>
            </ul>
        
        </div>
        {/* <div>
          <Toggle />
        </div> */}
    </motion.nav>
  )
}

export default Navbar