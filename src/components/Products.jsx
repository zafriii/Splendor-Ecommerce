// import React, { useState } from 'react';
// import Data from '../Data';
// import { NavLink } from 'react-router-dom';
// import SideBar from './SideBar';

// function Products() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedOutfit, setSelectedOutfit] = useState('');
//     const [selectedBrand, setSelectedBrand] = useState('');
//     const [sortByPrice, setSortByPrice] = useState('');

//     const productsPerPage = 12;

//     // Filter products based on search term, selected outfit, and selected brand
//     const filteredProducts = Data.filter(
//         (product) =>
//             (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 product.outfit.toLowerCase().includes(searchTerm.toLowerCase())) &&
//             (selectedOutfit === '' || product.outfit === selectedOutfit) &&
//             (selectedBrand === '' || product.brand === selectedBrand)
//     );

//     // Sort products based on selected price sort order
//     const sortedProducts = sortByPrice === 'highToLow'
//         ? filteredProducts.slice().sort((a, b) => b.price - a.price)
//         : sortByPrice === 'lowToHigh'
//             ? filteredProducts.slice().sort((a, b) => a.price - b.price)
//             : filteredProducts;

//     // Calculate the indices for the current page
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     // Calculate the total number of pages
//     const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

//     // Handle search term change
//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//         setCurrentPage(1); // Reset to first page when search term changes
//     };

//     // Handle outfit filter change
//     const handleOutfitFilter = (outfit) => {
//         setSelectedOutfit(outfit === selectedOutfit ? '' : outfit);
//         setCurrentPage(1); // Reset to first page when filter changes
//     };

//     // Handle brand filter change
//     const handleBrandFilter = (e) => {
//         setSelectedBrand(e.target.value === selectedBrand ? '' : e.target.value);
//         setCurrentPage(1); // Reset to first page when filter changes
//     };

//     // Handle sorting by price change
//     const handleSortByPrice = (e) => {
//         setSortByPrice(e.target.value);
//         setCurrentPage(1); // Reset to first page when sorting changes
//     };

//     // Function to clear all filters
//     const clearFilters = () => {
//         setSearchTerm('');
//         setSelectedOutfit('');
//         setSelectedBrand('');
//         setSortByPrice('');
//         setCurrentPage(1);
//     };



//     return (
//         <>
//             <div className="search">
//                 <input
//                     type="text"
//                     placeholder="Search by name or outfit..."
//                     value={searchTerm}
//                     onChange={handleSearch}
//                 />
//             </div>

//             <div className="filter">
//                 <button className={selectedOutfit === '' ? 'active' : ''} onClick={() => handleOutfitFilter('')}>
//                     All
//                 </button>
//                 <button className={selectedOutfit === 'Saree' ? 'active' : ''} onClick={() => handleOutfitFilter('Saree')}>
//                     Saree
//                 </button>
//                 <button className={selectedOutfit === 'Jeans' ? 'active' : ''} onClick={() => handleOutfitFilter('Jeans')}>
//                     Jeans
//                 </button>
//                 <button className={selectedOutfit === 'Salwar Kamij' ? 'active' : ''} onClick={() => handleOutfitFilter('Salwar Kamij')}>
//                     Salwar Kamij
//                 </button>
//                 <button className={selectedOutfit === 'Frock' ? 'active' : ''} onClick={() => handleOutfitFilter('Frock')}>
//                     Frock
//                 </button>
//                 <button className={selectedOutfit === 'Top' ? 'active' : ''} onClick={() => handleOutfitFilter('Top')}>
//                     Top
//                 </button>
//                 <button className={selectedOutfit === 'Lehenga' ? 'active' : ''} onClick={() => handleOutfitFilter('Lehenga')}>
//                 Lehenga
//                 </button>
//             </div>

//             <div className="brand-filter">
//                 <select value={selectedBrand} onChange={handleBrandFilter}>
//                     <option value="">All Brands</option>
//                     {[...new Set(Data.map(product => product.brand))].map(brand => (
//                         <option key={brand} value={brand}>{brand}</option>
//                     ))}
//                 </select>
//             </div>

//             <div className="sort-by-price">
//                 <label>
//                     <input
//                         type="radio"
//                         value="highToLow"
//                         checked={sortByPrice === 'highToLow'}
//                         onChange={handleSortByPrice}
//                     />
//                     High to Low
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         value="lowToHigh"
//                         checked={sortByPrice === 'lowToHigh'}
//                         onChange={handleSortByPrice}
//                     />
//                     Low to High
//                 </label>
//             </div>

//             <div className="pagination">
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <button
//                         key={index + 1}
//                         onClick={() => paginate(index + 1)}
//                         className={currentPage === index + 1 ? 'active' : ''}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//             </div>

//             <button onClick={clearFilters}>Clear Filters</button>

    

//                 <SideBar/>


//             <div>
//                 <h1>Product List</h1>
//                 <div className="product-list">
                    
//                     {currentProducts.map((product) => (
//                     <NavLink key={product.id} to={`/singleproduct/${product.id}`} className="product-card">
//                         <img src={product.image}></img>
//                         <h2>{product.name}</h2>
//                         <p>Price: {product.price}</p>
                        
//                     </NavLink>
//                 ))}
//                 </div>
//             </div>

//             <div>
                
//             </div>
//         </>
//     );
// }

// export default Products;



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar';
import Data from '../Data'
import './products.css'

function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOutfit, setSelectedOutfit] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [sortByPrice, setSortByPrice] = useState('');
    const productsPerPage = 12;

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page when search term changes
    };

    const handleOutfitFilter = (outfit) => {
        setSelectedOutfit(outfit);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    const handleBrandFilter = (e) => {
        setSelectedBrand(e.target.value);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    const handleSortByPrice = (e) => {
        setSortByPrice(e.target.value);
        setCurrentPage(1); // Reset to first page when sorting changes
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedOutfit('');
        setSelectedBrand('');
        setSortByPrice('');
        setCurrentPage(1); // Reset to first page when filters are cleared
    };

    // Filter products based on search term and selected filters
    const filteredProducts = Data
        .filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.outfit.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(product => selectedOutfit === '' || product.outfit === selectedOutfit)
        .filter(product => selectedBrand === '' || product.brand === selectedBrand)
        .sort((a, b) => sortByPrice === 'lowToHigh' ? a.price - b.price : b.price - a.price);

    // Calculate the indices for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const brands = [...new Set(Data.map(product => product.brand))];

    const filters = {
        brands: brands
    };

    return (
        <SideBar
            filters={filters}
            handleSearch={handleSearch}
            handleOutfitFilter={handleOutfitFilter}
            handleBrandFilter={handleBrandFilter}
            handleSortByPrice={handleSortByPrice}
            paginate={paginate}
            clearFilters={clearFilters}
            currentPage={currentPage}
            totalPages={totalPages}
            searchTerm={searchTerm}
            selectedOutfit={selectedOutfit}
            selectedBrand={selectedBrand}
            sortByPrice={sortByPrice}
        >
            <div className='products'>
                <h1>Product List</h1>
                <div className="product-list">
                 
                    
                    {currentProducts.map((product) => (
                        <NavLink key={product.id} to={`/singleproduct/${product.id}`} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>Price:{product.price}</p>
                        </NavLink>
                    ))}

                
                
                </div>
            </div>
        </SideBar>
    );
}

export default Products;
