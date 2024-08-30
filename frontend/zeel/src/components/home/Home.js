
import React from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import man_suit from '../../img/man-in-suit-1.jpg';
import bespoke from '../../img/creating-bespoke-suit-1.jpg';

function Home() {
    return (
        <section className="best_style">
            <div className="container animation">
                <div className="split-screen">
                    <div className="left-section">
                        <div className="overlay-text">
                            <h1 className="animate__animated animate__fadeInDown">Best Style</h1>
                            <h3 className="text-white animate__animated animate__fadeInUp">Great Concept</h3>
                            <div className="d-flex mt-5">
                                <p className="borders"></p>
                                <span className="animate__animated animate__fadeIn">Learn More</span>
                            </div>
                        </div>
                    </div>
                    <div className="left-section mr-6 animate__animated animate__fadeInUp">
                        <img src={man_suit} alt="Man Suit" />
                    </div>
                    <div className="right-section animate__animated animate__fadeInDown">
                        <img src={bespoke} alt="Bespoke Suit" />
                    </div>
                </div>
            </div>
        </section>

    );
};
export default Home;