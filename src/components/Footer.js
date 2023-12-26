import React, { useState } from 'react'
import Github from  '../assets/github.png'

const Footer = () => {
    return (
        <div className="social-links">
            <h1 style = {{color: 'lightgreen'}}>Checkout the REPO:</h1> 
            
            <a href="https://github.com/XenaSit" target="_blank" rel="ln" className="custom-link">
                <img src={Github} alt="Github" className="custom-link" />
            </a>
        </div>
    )
}
export default Footer