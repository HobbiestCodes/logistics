import React from 'react'
import './../scss/Transport.scss';
import airplane from "./../../public/airplane.jpg"
import ship from "./../../public/ship.jpg"
import buses from "./../../public/buses.jpg"
function Cards() {
  return (
    <div className='container'>
        <h1 className='heading'>Methods of transportation</h1>
        <p>We provide various methods of transportation to help our customers for fastest experience</p>

        <div className="child">
            <div className="card">
                <div className="text">
                    <h1>AIR</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quo quibusdam rem perferendis quos veritatis quam aliquid iste eaque?</p>
                </div>
                <div className="image">
                    <img src={airplane} alt="" className='pic' />
                </div>
            </div>
            <div className="card">
                <div className="text">
                    <h1>OCEAN</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quo quibusdam rem perferendis quos veritatis quam aliquid iste eaque?</p>
                </div>
                <div className="image">
                    <img src={ship} alt="" className='pic' />
                </div>
            </div>
            <div className="card">
                <div className="text">
                    <h1>LAND</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quo quibusdam rem perferendis quos veritatis quam aliquid iste eaque?</p>
                </div>
                <div className="image">
                    <img src={buses} alt="" className='pic' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards