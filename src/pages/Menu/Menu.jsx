import React from 'react';
import MenuItem from './MenuItem';
import menuData from './content/menuData';
import './Menu.css'


const Menu = () => {
    return (
        <div className="menu-container">
            <h6 className="subheading">What we offer</h6>
            <h1 className="heading">Our Menu</h1>
            <div className="menu-grid">
                {menuData.map((item) => (
                    <div className="menu-item" key={item.id}>
                        <MenuItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu