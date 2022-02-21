import React from 'react'
import './Button.css'

const Button = ({ name, secondary }) => {
    return (
        <button className={secondary ? "btn secondary" : "btn"}>{name}</button>
    )
}

export default Button
