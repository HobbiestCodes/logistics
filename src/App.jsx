import styles from "./scss/home.module.scss";
import { motion } from 'framer-motion';
import { lazy, useEffect, useState } from 'react';
import Loader from "./components/Loader";
import Partners from "./components/partners";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Container } from "./components/Container";
import { useTheme } from "./components/context/ThemeProvider";
import ShowCase from "./components/showCase";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Content from "./components/Content";

const Render = lazy(() => import('./components/Render'));




function App() {
  const [Isloaded, setLoaded] = useState(true);
  const {isDarkMode} = useTheme();

  useEffect(() => {

    setTimeout(() => {
      setLoaded(false);
    }, 2100)

  }, [])
  return (  
  <div className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
    {Isloaded ? <Loader /> : (
      <>
  <motion.div 
  initial={{x: -1300}}
  whileInView={{x: 0}}
  viewport={{once: true}}
  transition={{duration: 1.7, delay: 0.8, ease: [0.6, 0.01, -0.05, 0.9]}}
  className={styles.model}>
  <Render />
  </motion.div>

  <div className={styles.container} style={{zIndex: -1, backgroundColor: isDarkMode ? "#00001c" : "#ffffff"}}></div>
  <div className={styles.container} style={{height: "fit-content", zIndex: -1, backgroundColor: isDarkMode ? "#00001c" : "#ffffff"}}><Partners /></div>
  <div className={styles.container} style={{zIndex: -1, backgroundColor: isDarkMode ? "#00001c" : "#ffffff"}}>
   
<motion.div 
initial={{x: 1000, opacity: 0}}
whileInView={{x: 0, opacity: 1}}
viewport={{once: false}}
transition={{duration: 1.2, delay: 0.7}}

className={`${styles.box}`}>
  <Canvas style={{position: 'relative', zIndex: 10}}>
    <ScrollControls damping={0.5} pages={2}>
      <ambientLight intensity={1} />
      <Container />
    <Scroll html>
  <div className={styles.container} style={{position: 'relative', zIndex: -10}}><ShowCase /></div>
  <div className={styles.container} style={{zIndex: -1}}><Cards /></div>

    </Scroll>
    </ScrollControls>
    </Canvas>
  </motion.div>
</div>


<div>
<Content />
</div>
  <Footer />
    </>
  )}
    </div>
   
   
  )
}

export default App
