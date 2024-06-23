import React from 'react'
import './fashion.css'

function FashionHeader() {
  return (
    <div className="header-container">
    <div className="text-container">
        <h2 className="main-heading">New Fashion</h2>        
    </div>
    <div className="image-container">
        <img src="images/pink.png" alt="Fashion Model" className="main-image" />
    </div>
</div>
  )
}

export default FashionHeader
