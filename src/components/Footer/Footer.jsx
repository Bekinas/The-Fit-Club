import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
            </div>
        </div>
        <div className="logo-f">
        <img src={logo} alt="" />

        </div>
    </div>
  )
}

export default Footer