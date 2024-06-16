import React from 'react'
import './feature.css'

function Feature() {
  return (
    <div className='feature'>

        <h2>Our Collections</h2>

        <div className="feature-card">
            <div className="card">
                <img src='images/topsbox.png'></img>
                <h3>Stylish Tops</h3>
            </div>
            <div className="card">
            <img className='saree' src='images/Geosarees.png'></img>
                <h3>Beautiful Sarees </h3>
            </div>
            <div className="card">
            <img className='pant' src='images/jeansf.png'></img>
                <h3>Fitting Jeans</h3>
            </div>
        </div>

    </div>
  )
}

export default Feature