// import React, { useState, useEffect } from 'react';

// function Cart() {
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(storedCart);
//     }, []);

//     const removeFromCart = (id) => {
//         const updatedCart = cart.filter(item => item.id !== id);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (
//         <div>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (

//                 <div className="cart">
                
//                     {cart.map(product => (
//                         <div key={product.id}>
//                             <h2>{product.name}</h2>
//                             <p>Color: {product.color}</p>
//                             <p>Price: {product.price}</p>
//                             <p>Quantity: {product.quantity}</p>
//                             <button onClick={() => removeFromCart(product.id)}>Remove</button>
//                         </div>
//                     ))}
//                </div>
//             )}
//         </div>
//     );
// }

// export default Cart;





// import React, { useState, useEffect } from 'react';
// import './cart.css'; // Import the CSS file

// function Cart() {
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(storedCart);
//     }, []);

//     const removeFromCart = (id) => {
//         const updatedCart = cart.filter(item => item.id !== id);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (
//         <div className="cart-container">
//             <h1>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <table className="cart-table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Color</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cart.map(product => (
//                             <tr key={product.id}>
//                                 <td>{product.name}</td>
//                                 <td>{product.color}</td>
//                                 <td>{product.price}</td>
//                                 <td>{product.quantity}</td>
//                                 <td>
//                                     <button className="remove-button" onClick={() => removeFromCart(product.id)}>
//                                         Remove
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default Cart;








// import React, { useState, useEffect } from 'react';
// import './cart.css'; // Import the CSS file

// function Cart() {
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(storedCart);
//     }, []);

//     const removeFromCart = (id) => {
//         const updatedCart = cart.filter(item => item.id !== id);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (
//         <div className="cart-container">
//             <h1>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <table className="cart-table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             {/* <th>Color</th> */}
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Sizes</th> {/* New column for sizes */}
//                             <th>Remove</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cart.map(product => (
//                             <tr key={product.id}>
//                                 <td>{product.name}</td>
//                                 {/* <td>{product.color}</td> */}
//                                 <td>{product.price}</td>
//                                 <td>{product.quantity}</td>
//                                 <td>{product.selectedSizes.join(', ')}</td> {/* Display selected sizes */}
//                                 <td>
//                                     <button className="remove-button" onClick={() => removeFromCart(product.id)}>
//                                         Remove
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default Cart;





// import React, { useState, useEffect } from 'react';
// import './cart.css'; // Import the CSS file

// function Cart() {
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(storedCart);
//     }, []);

//     const removeFromCart = (id) => {
//         const updatedCart = cart.filter(item => item.id !== id);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const incrementQuantity = (id) => {
//         const updatedCart = cart.map(item => {
//             if (item.id === id) {
//                 if (item.quantity < item.stock) {
//                     return { ...item, quantity: item.quantity + 1 };
//                 }
//                 alert('Cannot add more, stock limit reached!');
//             }
//             return item;
//         });
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const decrementQuantity = (id) => {
//         const updatedCart = cart.map(item => {
//             if (item.id === id && item.quantity > 1) {
//                 return { ...item, quantity: item.quantity - 1 };
//             }
//             return item;
//         });
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (
//         <div className="cart-container">
//             <h1>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <table className="cart-table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Sizes</th>
//                             <th>Remove</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cart.map(product => (
//                             <tr key={product.id}>
//                                 <td>{product.name}</td>
//                                 <td>{product.price}</td>
//                                 <td>
//                                     <button 
//                                         className="decrement-button" 
//                                         onClick={() => decrementQuantity(product.id)}
//                                     >
//                                         -
//                                     </button>
//                                     {product.quantity}
//                                     <button 
//                                         className="increment-button" 
//                                         onClick={() => incrementQuantity(product.id)}
//                                         disabled={product.quantity >= product.stock}
//                                     >
//                                         +
//                                     </button>
//                                 </td>
//                                 <td>{product.selectedSizes.join(', ')}</td>
//                                 <td>
//                                     <button className="remove-button" onClick={() => removeFromCart(product.id)}>
//                                         Remove
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default Cart;








import React, { useState, useEffect } from 'react';
import './cart.css'; 
import { NavLink } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const incrementQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                if (item.quantity < item.stock) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                alert('Cannot add more, stock limit reached!');
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const decrementQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotalPrice = () => {
        const deliveryCharge = 100;
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        return totalPrice + deliveryCharge;
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p className='empty'>Your cart is empty</p>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sizes</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button 
                                            className="decrement-button" 
                                            onClick={() => decrementQuantity(product.id)}
                                        >
                                            -
                                        </button>
                                        {product.quantity}
                                        <button 
                                            className="increment-button" 
                                            onClick={() => incrementQuantity(product.id)}
                                            disabled={product.quantity >= product.stock}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>{product.selectedSizes.join(', ')}</td>
                                    <td>
                                        <button className="remove-button" onClick={() => removeFromCart(product.id)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <p>Delivery Charge: 100 tk</p>
                        
                        <h2>Total Price: {calculateTotalPrice()} tk</h2>

                        <NavLink to='/bills'><button>Place Order</button></NavLink>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
