import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Overview = () => {
    return (
        <div className="overview">
            <Link to="/about">
                <div className="item overview-about">
                    <h1 className="item-heading">About</h1>
                    <div className="overlay">
                        <Link to="/about" className="overview-btn"><Button name="Learn More" /></Link>
                    </div>
                </div>
            </Link>
            <Link to="/menu">
                <div className="item overview-menu">
                    <h1 className="item-heading">Menu</h1>
                    <div className="overlay">
                        <Link to="/menu" className="overview-btn"><Button name="View Menu" /></Link>
                    </div>
                </div>
            </Link>
            <Link to="/">
                <div className="item overview-other">
                    <h1 className="item-heading">Other</h1>
                    <div className="overlay">
                        <Link to="/cart" className="overview-btn"><Button name="View Cart" /></Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Overview
