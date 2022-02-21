import React from 'react'
import './Menu.css'

const MenuItem = ({ product, onAddToCart }) => {
    return (
        <>
            <div className="item-img-box">
                <img src={product.image.url} alt={product.name} className="item-img" />
            </div>
            <div className="item-content">
                <h3 className="item-name">{product.name}</h3>
                <p className="item-description">
                    {product.description}
                </p>
                <h6 className="item-price">{product.price.formatted_with_symbol} /dozen</h6>
                <button 
                    className="add-btn"
                    onClick={() => onAddToCart(product.id, 1)}
                >
                    Add to cart
                </button>
            </div>
        </>
    )
}

export default MenuItem