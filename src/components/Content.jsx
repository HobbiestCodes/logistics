import React from 'react'
import './../scss/content.scss';
import { FaArrowRight } from 'react-icons/fa';


function Content() {
  return (
    <div className='content'>
        <div className="child">
            <div className="context">
                <p>Get in Touch!</p>
                <h1 className='contact'>Contact us <FaArrowRight /></h1>
            </div>
            <div className="context">
                <p>Information, how to send your package</p>
                <h1 className='contact'>Get Quotes <FaArrowRight /></h1>
            </div>

        </div>
    </div>
  )
}

export default Content