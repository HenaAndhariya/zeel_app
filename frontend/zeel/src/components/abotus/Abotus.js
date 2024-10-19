
import React from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import successful_tailor from '../../img/successful-tailor-in-atelier.jpg';
import tailor_working from '../../img/tailor-working-with-fabric.jpg';
import measuring_tape from '../../img/tailor-with-measuring-tape.jpg';
import WhatWeDo from './WhatWeDo';
function Aboutus() {
    return (
        <section>
            <div class="about-section about_section">
                <div className="whychooseus">
                    <div className="container">
                        <div className="text animate__animated animate__fadeInLeft">
                            <h1 className="text-white">About <span className="yellow_text">US</span></h1>
                            <div className="elementor-widget-container pb-3">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                             <div className="overlay-text">
                                <div className="d-flex mt_5">
                                    <p className="borders"></p>
                                    <span className="animate__animated animate__fadeIn">Learn More</span>
                                </div>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src={successful_tailor} alt="Team Member 1" />
                            <img src={tailor_working} alt="Team Member 2" />
                            <img src={measuring_tape} alt="Team Member 3" />
                        </div>
                    </div>
                </div>
            </div>
            <WhatWeDo/>
        </section>

    );
};
export default Aboutus;