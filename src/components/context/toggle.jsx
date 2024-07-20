import React from 'react'
import { useTheme } from './ThemeProvider'
import "./../../scss/toggle.scss"

function Toggle() {
    const {toggleTheme} = useTheme()
    
  return (
   <>
<label className="switch">
  <input type="checkbox" onClick={toggleTheme} />
  <span className="slider"></span>
</label>
   </>
  )
}

export default Toggle