import React from "react";
import styles from "./../scss/home.module.scss";
import { motion } from "framer-motion";
import { useTheme } from "./context/ThemeProvider";


function HomeScreen() {
  const {isDarkMode} = useTheme()

  const container = {
    hidden: { scale: 1 },
    visible: {
      scale: 1,
    },
  };

  const item = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
    }
  };
  return (
    <div className={styles.main} style={{color: isDarkMode ? "white" : "black"}}>
      <motion.div variants={container} className={styles.content}>
        <motion.h2
        initial={{
          y: -100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        transition={{ duration: 0.9, delay: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
        >Company name</motion.h2>
        <motion.h1
        initial={{
          y: 200,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        transition={{ duration: 0.9, delay: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
        >
          Let us help you, to <span>deliver</span> your shipment on time!
        </motion.h1>
        {/* <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
        variants={item}
        className={styles.child}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          aliquam est vel magnam soluta! Quos repellat, sunt reiciendis,
          delectus atque labore at doloremque deserunt sit illum est accusantium
          odio dolor.
          <br />
          <button>Get Started</button>
          <button>Learn more</button>

        </motion.div> */}

        {/* <motion.div 
         initial='hidden'
         whileInView='visible'
         viewport={{ once: false }}
         transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
         variants={item}
        className={`${styles.child} ${styles.second}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          aliquam est vel magnam soluta! Quos repellat, sunt reiciendis,
          delectus atque labore at doloremque deserunt sit illum est accusantium
          odio dolor.
          <br />
          <button>Get Started</button>
          <button>Learn more</button>

        </motion.div> */}
      </motion.div>
    </div>
  );
}

export default HomeScreen;
