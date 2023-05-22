import React from 'react'
import './reasons.css';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image3.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>

            <div>
                <span className='srtoke-text'>why</span>
                <span>choose us?</span>
    
            <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 FREE PROGRAN FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span
            style={{
                color: "var(--gray)",
                fontWeight: "normal",
            }
            }>OUR PARTHERS</span>
            <div className='partners'>
                <img src={nb} alt="" />
                <img src={nike} alt="" />
                <img src={adidas} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons