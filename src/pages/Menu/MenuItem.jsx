import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '../../components/Button'
import './Menu.css'

const MenuItem = ({ product, onAddToCart }) => {
    return (
        <>
            <div className="item-img-box">
                <img 
                    src={product.image.url} 
                    alt={product.name} 
                    className="item-img"
                    loading="lazy" 
                />
            </div>
            <div className="item-content">
                <h3 className="item-name">{product.name}</h3>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="h5" component="p" />
                <h6 className="item-price">{product.price.formatted_with_symbol} /dozen</h6>
                <Button
                    name="Add To Cart"
                    onClick={() => onAddToCart(product.id, 1)}
                />
            </div>
        </>
    )
}

export default MenuItem