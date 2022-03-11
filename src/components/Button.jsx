import './Button.css'

const Button = ({ name, secondary, outline, fullWidth, onClick, disabled, type }) => {
    return (
        <button 
            className={secondary ? "btn secondary" : outline ? "btn outline" : fullWidth ? "btn large" : "btn"} 
            onClick={onClick} 
            disabled={disabled} 
            type={type}
        >
            {name}
        </button>
    )
}

export default Button