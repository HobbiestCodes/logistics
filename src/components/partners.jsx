import React from 'react'
import styles from "./../scss/partners.module.scss"
import { FcGoogle, FcPanorama } from "react-icons/fc";
import { useTheme } from './context/ThemeProvider';

function Partners() {
  const {isDarkMode} = useTheme();
  return (
    <div className={styles.main} style={{color: isDarkMode ? "white" : "black"}}>
      <div className={styles.child}>
        <h1>our partners</h1>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.icons}>
              <FcGoogle className={styles.icon}/>
            </div>
              <h1>xyz company</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, animi!</p>
          </div>
          <div className={styles.card}>
          <div className={styles.icons}>
              <FcPanorama className={styles.icon}/>
            </div>
              <h1>xyz company</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, animi!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners