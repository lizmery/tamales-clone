import { NavLink } from 'react-router-dom'
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti'
import molcajete from '../../assets/molcajete9.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <NavLink exact to="/" className="footer-logo">
                <img src={molcajete} alt="molcajete" className="" />
            </NavLink>
            <ul className="footer-items">
                <li className="footer-item">
                    <NavLink
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="footer-item">
                    <NavLink
                        exact
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>  
                <li className="footer-item">
                    <NavLink
                        exact
                        to="/menu"
                    >
                        Menu
                    </NavLink>
                </li>  
            </ul>
            <ul className="social-media">
                <li>
                    <TiSocialInstagram />
                </li>
                <li>
                    <TiSocialFacebook />
                </li>
                <li>
                    <TiSocialTwitter />
                </li>
            </ul>
            <hr className="line" />
            <p className="copyright">&copy;2022 Lizmery Vigil</p>
        </footer>
    )
}

export default Footer