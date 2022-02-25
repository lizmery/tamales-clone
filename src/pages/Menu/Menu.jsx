import React from 'react';
import MenuItem from './MenuItem';

import './Menu.css'


const Menu = ({ products, onAddToCart}) => {
    if (!products.length) return <p className="loading">Loading...</p>
    
    return (
        <div className="menu-container">
            <h6 className="subheading">What we offer</h6>
            <h1 className="heading">Our Menu</h1>
            <div className="menu-grid">
                {products.map((product) => (
                    <div className="menu-item" key={product.id}>
                        <MenuItem product={product} onAddToCart={onAddToCart} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu