import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'
import './Home.css'

const Home = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <RiArrowRightSFill />
            </div>
        );
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <RiArrowLeftSFill />
            </div>
        );
    }

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
    return (
        <Slider {...settings}>
            <div className="home one">
                <div className="home-container">
                    <h1>Authentic Tamales</h1>
                    <h6>A taste of Oaxaca, made with the utmost care</h6>
                    <Link to="/about" className="home-btn">Learn More</Link>
                </div>
            </div>
            <div className="home two">
                <div className="home-container">
                    <h1>Second Title</h1>
                    <h6>Optio possimus omnis ad expedita dolore consequatur quo aut voluptas.</h6>
                    <Link to="/about" className="home-btn">Learn More</Link>
                </div>
            </div>
            <div className="home three">
                <div className="home-container">
                    <h1>The Third Title</h1>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h6>
                    <Link to="/about" className="home-btn">Learn More</Link>
                </div>
            </div>
        </Slider>
    )
}

export default Home