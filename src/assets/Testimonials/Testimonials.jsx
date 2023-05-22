import React from 'react'
import { useState } from 'react';
import { testimonialsData} from '../../data/testimonialsData'
import './testimonals.css'
import leftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

  const [selected, setSelested] = useState(0);
  const tLength = testimonialsData.length
  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>
              {testimonialsData[selected].review}
            </span>
            <span>
              <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
              </span> { " "}
              - {testimonialsData[selected].status}
            </span>
        </div>

        <div className="right-t">
          <div></div>
          <div></div>
            <img src={testimonialsData[selected].image} 
            alt="" />

            <div className="arrows">
              <img 
              onClick={()=>{
                selected===0
                ?setSelested(tLength - 1)
                :setSelested((prev) => prev -1)
              }}
              src={leftArrow} alt="" />
              <img 
              onClick={()=>{
                selected=== tLength - 1
                ?setSelested(0)
                :setSelested((prev) => prev + 1)
              }}
              src={RightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials