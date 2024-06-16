// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Products from './components/Products'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Cart from './Pages/Cart'
// import SingleProduct from './components/SingleProduct'
// import { MdOutlineWbSunny } from "react-icons/md";
// import { IoMoonOutline } from "react-icons/io5";
// import Navbar from './components/Navbar'

// function App() {
  

// const [darkMode, setDarkMode] = useState(() => {
//     // Check if a theme is saved in localStorage
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme ? JSON.parse(savedTheme) : false;
// });

// useEffect(() => {
//     // Save the theme to localStorage
//     localStorage.setItem('theme', JSON.stringify(darkMode));
// }, [darkMode]);

// const toggleDarkMode = () => {
//     setDarkMode(prevMode => !prevMode);
// };


//   return (
//     <>
      

  
//       <div className={darkMode ? 'dark-mode' : 'light-mode'}>


//       <BrowserRouter>

//       <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


//             <Routes>                

//                 <Route path='/' element={<Home/>}/>
//                 <Route path='/about' element={<About/>}/>
//                 <Route path='/contact' element={<Contact/>}/>
//                 <Route path='/cart' element={<Cart/>}/>
//                 <Route path='/products' element={<Products/>}/>
//                 <Route path='/singleproduct/:id' element={<SingleProduct/>}/> 
                
//             </Routes>
         

//       </BrowserRouter>

//       </div>
      
      
//     </>
//   )
// }

// export default App



import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import SingleProduct from './components/SingleProduct';
import Navbar from './components/Navbar';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import Footer from './components/Footer';
import Bills from './components/Bills';
import Order from './components/Order';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if a theme is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // Save the theme to localStorage
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <BrowserRouter>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='/bills' element={<Bills/>} />
            <Route path='/order' element={<Order/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
