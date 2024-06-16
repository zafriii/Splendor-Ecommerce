// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './navbar.css';
// import { IoIosCart } from 'react-icons/io';
// import { MdOutlineWbSunny } from "react-icons/md";
// import { IoMoonOutline } from "react-icons/io5";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <h1>Cluster</h1>
//       </div>

//       <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//         <NavLink to="/" onClick={toggleMenu}>
//           Home
//         </NavLink>
//         <NavLink to="/about" onClick={toggleMenu}>
//           About
//         </NavLink>
//         <NavLink to="/contact" onClick={toggleMenu}>
//           Contact
//         </NavLink>
//         <NavLink to="/products" onClick={toggleMenu}>
//           Menu
//         </NavLink>
//         <NavLink to="/cart" onClick={toggleMenu}>
//           <IoIosCart className="nav-icon" />
//         </NavLink>

//         <button onClick={toggleDarkMode} className="theme-toggle-btn">
//           {darkMode ? <MdOutlineWbSunny /> : <IoMoonOutline />}
//         </button>
//       </div>

//       <div className="menu-toggle" onClick={toggleMenu}>
//         <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
//         <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
//         <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { IoIosCart } from 'react-icons/io';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
  }, []);

  useEffect(() => {
      // Update cart count whenever cart items change
      const count = cartItems.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
  }, [cartItems]);

  const [cartCount, setCartCount] = useState(0);

 

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>Splendor</h1>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
        <NavLink to="/products" onClick={toggleMenu}>
          Products
        </NavLink>
        <NavLink to="/cart" onClick={toggleMenu}>
          <IoIosCart className="nav-icon" />
          <span className="cart-count">{cartCount}</span>
        </NavLink>
        <button onClick={toggleDarkMode} className="theme-toggle-btn">
          {darkMode ? <MdOutlineWbSunny /> : <IoMoonOutline />}
        </button>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>
    </div>
  );
}

export default Navbar;
