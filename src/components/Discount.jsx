import React from 'react'
import './discount.css'

function Discount() {
  return (


      <>


    <div className='discount'>
        
          <div className="disc-box">

          <div className="disc-data">

          <p>Discount! upto 20% on our products</p>
          {/* <p>of 20%</p>
          <p>on our products</p> */}

          </div>
                
          <div className="disc-img">

            <img src='images/womanpink.png'></img>

          </div>

          </div>

    </div>


      <div className="news">


      <div className="news-text">

      <h2>Subscribe to our News Letter</h2> 
      <input type='text' placeholder='Enter your email'/>
      <button>Subscribe</button>

      </div>




    </div>



      </>


  )
}

export default Discount