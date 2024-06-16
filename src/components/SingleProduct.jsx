// import React, { useState, useEffect } from 'react';
// import { NavLink, useParams, useNavigate } from 'react-router-dom';
// import Data from '../Data';
// import './singleproduct.css'
// import Star from './Star';

// function SingleProduct() {
//     const { id } = useParams();
    
//     const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

//     const product = Data.find(product => product.id === parseInt(id));

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     const addToCart = () => {
//         const existingProductIndex = cart.findIndex(item => item.id === product.id);
//         if (existingProductIndex !== -1) {
           
//             const updatedCart = [...cart];
//             updatedCart[existingProductIndex].quantity += 1;
//             setCart(updatedCart);
//         } else {
           
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }
//     };

   

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         <div className='single-product'>
//             <div className="single-img">
//             <img src={product.image}></img>
//             </div>
//             <div className="single-data">
//             <h1>{product.name}</h1>

//             <div className="star-rating">
//             <Star stars={product.rating} />
//             <p> ({product.reviewNumber} customer reviews)</p>
//             </div>         
//             <p>Color: {product.color}</p>
//             <p>Price: {product.price}</p>
//             <p>Deal of the day:{product.dealOfTheDayPrice}</p>
//             <p>Size: {product.size}</p>
//             <p>Brand: {product.brand}</p>
//             <p>Outfit: {product.outfit}</p>
//             <p>{product.description}</p>
//             <p>Availability:{product.availability}</p>
//             <button onClick={addToCart}>Add to Cart</button>

//             </div>
            
//         </div>
//     );
// }

// export default SingleProduct;




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Data from '../Data';
// import './singleproduct.css'
// import Star from './Star';

// function SingleProduct() {
//     const { id } = useParams();
//     const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
//     const [selectedSizes, setSelectedSizes] = useState([]);

//     const product = Data.find(product => product.id === parseInt(id));

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     // const addToCart = () => {
//     //     const existingProductIndex = cart.findIndex(item => item.id === product.id);
//     //     if (existingProductIndex !== -1) {
//     //         // If the product already exists in the cart, update its quantity
//     //         const updatedCart = [...cart];
//     //         updatedCart[existingProductIndex].quantity += 1;
//     //         setCart(updatedCart);
//     //     } else {
//     //         // If the product is new, add it to the cart
//     //         setCart([...cart, { ...product, quantity: 1, selectedSizes }]);
//     //     }
//     // };

//     const addToCart = () => {
//         const existingProductIndex = cart.findIndex(item => item.id === product.id);
//         if (existingProductIndex !== -1) {
//             // If the product already exists in the cart, update its quantity and sizes
//             const updatedCart = [...cart];
//             updatedCart[existingProductIndex].quantity += 1;
//             updatedCart[existingProductIndex].selectedSizes = selectedSizes; // Update selected sizes
//             setCart(updatedCart);
//         } else {
//             // If the product is new, add it to the cart
//             setCart([...cart, { ...product, quantity: 1, selectedSizes }]);
//         }
//     };

//     const handleSizeChange = (size) => {
//         setSelectedSizes(prevSizes =>
//             prevSizes.includes(size)
//                 ? prevSizes.filter(s => s !== size)
//                 : [...prevSizes, size]
//         );
//     };

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         <div className='single-product'>
//             <div className="single-img">
//                 <img src={product.image} alt={product.name}></img>
//             </div>
//             <div className="single-data">
//                 <h1>{product.name}</h1>
//                 <div className="star-rating">
//                     <Star stars={product.rating} />
//                     <p> ({product.reviewNumber} customer reviews)</p>
//                 </div>
//                 <p>Color: {product.color}</p>
//                 <p>Price: {product.price}</p>
//                 <p>Deal of the day: {product.dealOfTheDayPrice}</p>
//                 <div className="product-sizes">
//                     <p>Size:</p>
//                     {product.size.map(size => (
//                         <label key={size}>
//                             <input
//                                 type="checkbox"
//                                 value={size}
//                                 checked={selectedSizes.includes(size)}
//                                 onChange={() => handleSizeChange(size)}
//                             />
//                             {size}
//                         </label>
//                     ))}
//                 </div>
//                 <p>Brand: {product.brand}</p>
//                 <p>Outfit: {product.outfit}</p>
//                 <p>{product.description}</p>
//                 <p>Availability: {product.availability}</p>
//                 <button onClick={addToCart}>Add to Cart</button>
//             </div>
//         </div>
//     );
// }

// export default SingleProduct;







// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Data from '../Data';
// import './singleproduct.css';
// import Star from './Star';

// function SingleProduct() {
//     const { id } = useParams();
//     const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
//     const [selectedSizes, setSelectedSizes] = useState([]);

//     const product = Data.find(product => product.id === parseInt(id));

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     const addToCart = () => {
//         const existingProductIndex = cart.findIndex(item => item.id === product.id);
//         if (existingProductIndex !== -1) {
//             const updatedCart = [...cart];
//             updatedCart[existingProductIndex].quantity += 1;
//             updatedCart[existingProductIndex].selectedSizes = selectedSizes;
//             setCart(updatedCart);
//         } else {
//             setCart([...cart, { ...product, quantity: 1, selectedSizes }]);
//         }
//     };

//     const handleSizeChange = (size) => {
//         setSelectedSizes(prevSizes =>
//             prevSizes.includes(size)
//                 ? prevSizes.filter(s => s !== size)
//                 : [...prevSizes, size]
//         );
//     };

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         <div className='single-product'>
//             <div className="single-img">
//                 <img src={product.image} alt={product.name}></img>
//             </div>
//             <div className="single-data">
//                 <h1>{product.name}</h1>
//                 <div className="star-rating">
//                     <Star stars={product.rating} />
//                     <p> ({product.reviewNumber} customer reviews)</p>
//                 </div>
//                 <p>Color: {product.color}</p>
//                 <p>Price: {product.price}</p>
//                 <p>Deal of the day: {product.dealOfTheDayPrice}</p>
//                 {product.size && product.size.length > 0 && (
//                     <div className="product-sizes">
//                         <p>Size:</p>
//                         {product.size.map(size => (
//                             <label key={size}>
//                                 <input
//                                     type="checkbox"
//                                     value={size}
//                                     checked={selectedSizes.includes(size)}
//                                     onChange={() => handleSizeChange(size)}
//                                 />
//                                 {size}
//                             </label>
//                         ))}
//                     </div>
//                 )}
//                 <p>Brand: {product.brand}</p>
//                 <p>Outfit: {product.outfit}</p>
//                 <p>{product.description}</p>
//                 <p>Availability: {product.availability}</p>
//                 <button onClick={addToCart}>Add to Cart</button>
//             </div>
//         </div>
//     );
// }

// export default SingleProduct;




import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Data from '../Data';
import './singleproduct.css';
import Star from './Star';

function SingleProduct() {
    const { id } = useParams();
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [quantity, setQuantity] = useState(1); // Initialize quantity to 1

    const product = Data.find(product => product.id === parseInt(id));

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = () => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity = quantity;
            updatedCart[existingProductIndex].selectedSizes = selectedSizes;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity, selectedSizes }]);
        }
    };

    const handleSizeChange = (size) => {
        setSelectedSizes(prevSizes =>
            prevSizes.includes(size)
                ? prevSizes.filter(s => s !== size)
                : [...prevSizes, size]
        );
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        } else {
            alert("Out of stock");
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='single-product'>
            <div className="single-img">
                <img src={product.image} alt={product.name}></img>
            </div>
            <div className="single-data">
                <h1>{product.name}</h1>
                <div className="star-rating">
                    <Star stars={product.rating} />
                    <p> ({product.reviewNumber} customer reviews)</p>
                </div>
                <p>Color: {product.color}</p>
                <p>Price: {product.price}</p>
                <p>Deal of the day: {product.dealOfTheDayPrice}</p>
                {product.size && product.size.length > 0 && (
                    <div className="product-sizes">
                        <p>Size:</p>
                        {product.size.map(size => (
                            <label key={size}>
                                <input
                                    type="checkbox"
                                    value={size}
                                    checked={selectedSizes.includes(size)}
                                    onChange={() => handleSizeChange(size)}
                                />
                                {size}
                            </label>
                        ))}
                    </div>
                )}
                <p>Brand: {product.brand}</p>
                <p>Outfit: {product.outfit}</p>
                <p>{product.description}</p>
                <p>Availability: {product.availability}</p>
                <div className="quantity-controls">
                    <button onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>+</button>
                </div>
                <button onClick={addToCart}>Add to Cart</button>
                
                
            </div>
        </div>
    );
}

export default SingleProduct;
