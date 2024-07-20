import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Model } from "./Final";
import Navbar from "./Navbar";
import HomeScreen from "./HomeScreen";
import "./../scss/page.scss";
import { motion } from "framer-motion";
import ThemeProvider, { useTheme } from "./context/ThemeProvider";

function Render() {
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-area");
    if (scrollContainer) {
      // Apply custom scrollbar styles directly
      scrollContainer.style.overflow = "auto";
      scrollContainer.style.scrollbarWidth = "thin";
      scrollContainer.style.scrollbarColor = "#888 #f1f1f1";

      // Webkit scrollbar styles
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(
        `.scroll-area::-webkit-scrollbar { width: 10px; }`,
        styleSheet.cssRules.length
      );
      styleSheet.insertRule(
        `.scroll-area::-webkit-scrollbar-track { background: #f1f1f1; }`,
        styleSheet.cssRules.length
      );
      styleSheet.insertRule(
        `.scroll-area::-webkit-scrollbar-thumb { background: #888; }`,
        styleSheet.cssRules.length
      );
      styleSheet.insertRule(
        `.scroll-area::-webkit-scrollbar-thumb:hover { background: #555; }`,
        styleSheet.cssRules.length
      );
    }
  }, []);
  const {isDarkMode} = useTheme()
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault={true}
        far={1000}
        near={0.2}
        fov={30}
        position={[5, 1.85, -1.3]}
        rotation={[-1.638, 1.38, 1.63]}
      />
      <ambientLight intensity={1} />
      <Environment preset="forest" />
      <ScrollControls pages={2} damping={0.3}>
        <Model />
         <Scroll html>
        <ThemeProvider>

          <div className="conatiner">
            <Navbar />
            <HomeScreen />
          </div>

          <motion.div 
          initial={{
            opacity: 0,
            y: 100
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.9,
            delay: 0.8,

          }}
          style={{color: isDarkMode ? "white" : 'black'}}
          className="page"
          >
            <h1>
              How we <span>work?</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse, facilis consectetur quam magnam ratione ipsum eveniet.
              Commodi voluptatibus, quia facere corporis, eaque laudantium
              quidem laborum rerum obcaecati, provident officia officiis!
              Cupiditate quas hic dignissimos laboriosam quam! Accusantium,
              voluptatum veniam.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              deleniti culpa mollitia? Neque, quae? Labore corrupti nobis
              commodi sunt corporis! Quidem numquam, necessitatibus recusandae
              vel vero quo harum nihil est commodi laborum. Alias magni est
              tempora voluptate aspernatur pariatur tempore.
            </p>
            <div className="cards">
              <div className="card">
               <h2><span>10+ years</span> experience</h2>
              </div>
              <div className="card">
               <h2><span>100+ packages</span> delivered</h2>

              </div>
              <div className="card">
               <h2><span>10M+ happy</span> customers</h2>
              </div>
              <div className="card">
               <h2><span>5K+ specialized</span> workers</h2>
              </div>
            </div>
          </motion.div>
            </ThemeProvider>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default Render;
