
import React from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import man_suit from '../../img/man-in-suit-1.jpg';
import bespoke from '../../img/creating-bespoke-suit-1.jpg';
import WeKnowthebest from './WeKnowthebest';
import YourService from './YourServices';
import Whychoouseus from './Chooseus';

function Home() {
    return (
        <section>
            <div className="best_style">
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
            </div>
            <WeKnowthebest />
            <YourService />
            <Whychoouseus />
        </section>

    );
};
export default Home;