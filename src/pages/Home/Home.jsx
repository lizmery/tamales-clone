import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'
import './Home.css'
import Overview from './Overview'
import Button from '../../components/Button'

const Home = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="home-arrow next" onClick={onClick}>
                <RiArrowRightSFill />
            </div>
        );
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="home-arrow prev" onClick={onClick}>
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
        <>
            <Slider {...settings}>
                <div className="home one">
                    <div className="home-container">
                        <h1>Authentic Tamales</h1>
                        <h6>A taste of Oaxaca, made with the utmost care</h6>
                        <div className="home-btns">
                            <Link to="/about"><Button name="Learn More" secondary={true} /></Link>
                            <Link to="/menu"><Button name="Order Now" /></Link>
                        </div>
                    </div>
                </div>
                <div className="home two">
                    <div className="home-container">
                        <h1>Second Title</h1>
                        <h6>Optio possimus omnis ad expedita dolore consequatur quo aut voluptas.</h6>
                        <div className="home-btns">
                            <Link to="/about"><Button name="Learn More" secondary={true} /></Link>
                            <Link to="/menu"><Button name="Order Now" /></Link>
                        </div>
                    </div>
                </div>
                <div className="home three">
                    <div className="home-container">
                        <h1>The Third Title</h1>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h6>
                        <div className="home-btns">
                            <Link to="/about"><Button name="Learn More" secondary={true} /></Link>
                            <Link to="/menu"><Button name="Order Now" /></Link>
                        </div>
                    </div>
                </div>
            </Slider>
            <Overview />
        </>
    )
}

export default Home