
import React from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import shopwindow from '../../img/elegant-men-suit-on-mannequin-shopwindow.jpg';
import retail_store from '../../img/a-tuxedo-displayed-in-a-retail-store.jpg';
import PGUADCA from '../../img/expensive-suits-shopping-PGUADCA.jpg';
function Work() {
    return (
        <section>
            <div class="work-section">
                <div className="work">
                    <div className="container">
                        <div className="text animate__animated animate__fadeInLeft">
                            <h1 className="text-white">Our <span className="yellow_text">Work</span></h1>
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
                        <div class="image-grid">
                            <div class="image-large">
                                <img src={shopwindow} alt="Mannequin with Suit" />
                            </div>
                            <div class="image-small-container">
                                <div class="image-small">
                                    <img src={retail_store} alt="Mannequin in Tuxedo" />
                                </div>
                                <div class="image-small">
                                    <img src={PGUADCA} alt="Colorful Shirts" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default Work;