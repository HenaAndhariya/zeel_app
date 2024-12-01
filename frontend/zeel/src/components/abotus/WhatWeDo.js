import React from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import patterns from '../../img/tailor-working-with-patterns.jpg';
import atelier from '../../img/tailor-in-atelier.jpg';
import customer from '../../img/tailor-and-customer.jpg';
import studio from '../../img/tailoring-studio.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function WhatWeDo() {
    const images = [atelier, customer, patterns, studio];

    const settings = {
        dots: false,  // Remove the dots by setting this to false
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <section>
            <div className="whtwedo-section section">
                <div className="whychooseus whatwedo">
                    <div className="container">
                        <div className="text animate__animated animate__fadeInLeft">
                            <h1 className="text-white">What <span className="yellow_text">We dolor</span></h1>
                            <div className="elementor-widget-container pb-3">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                            <Link to="/" className="button">
                                <FontAwesomeIcon icon={faAngleRight} className="font_icon" /> More Info
                            </Link>
                        </div>
                        <div className="image-slider">
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} className="img-fluid" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;
