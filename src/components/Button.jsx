import React from 'react'
import './Button.css'

const Button = ({ name, secondary, onClick }) => {
    return (
        <button className={secondary ? "btn secondary" : "btn"} onClick={onClick}>{name}</button>
    )
}

export default Button
