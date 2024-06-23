import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar';
import Data from '../Data'
import './products.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

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
                            <h2 data-aos="fade-up">{product.name}</h2>
                            <p data-aos="fade-up">Price:{product.price}</p>
                        </NavLink>
                    ))}

                
                
                </div>
            </div>
        </SideBar>
    );
}

export default Products;
