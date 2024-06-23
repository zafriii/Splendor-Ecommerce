import React, {useEffect} from 'react'
import './box.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Box() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <>
    <div className='box' data-aos="fade-right">

        
        <div className="box1">
            <img src='images/pink.png'></img>
        </div>
     

        <div className="box2">

            <h3>Choose your favourite outfit</h3>
           
        </div>

    </div>


        

    </>
  )
}

export default Box