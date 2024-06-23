import React from 'react'
import './fashion.css'

function FashionHeader() {
  return (
    <div className="header-container">
    <div className="text-container">
        <h1 className="main-heading">New Fashion</h1>
         <p className="description">
            {/* New Fashion */}
        </p> 
        
        {/* <button className="shop-now-button">Shop Now</button> */}
    </div>
    <div className="image-container">
        <img src="images/pink.png" alt="Fashion Model" className="main-image" />
        {/* <div className="product-info bottom-product">
            <img src="https://via.placeholder.com/50" alt="Product 2" />
            <p>Solidies Kredezug Satin-Minikleid - $21.00</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
        </div> */}
    </div>
</div>
  )
}

export default FashionHeader