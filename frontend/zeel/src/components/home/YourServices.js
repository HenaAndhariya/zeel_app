
import React from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faHeadset, faComments, faMotorcycle, faStar } from '@fortawesome/free-solid-svg-icons';

function YourService() {
    return (
        <section className="best_style yourservice">
            <div className="container animation">
                <div className="left-section">
                    <div className="yourservice-text">
                        <div className="text animate__animated animate__fadeInRight">
                            <h1 className="text-white">We are <span className="yellow_text"> at Your Service</span></h1>
                            <div className="elementor-widget-container pb-3">
                                <p className="text-white">
                                    Cras a ante id lectus molestie scelerisque in ac tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam at tellus id lorem finibus lobortis. Praesent mollis tortor in purus semper, vel condimentum purus fringilla. Morbi sollicitudin lorem eros, sit amet fringilla dolor commodo.
                                </p>
                            </div>
                            <a href="/" className="button">
                                <FontAwesomeIcon icon={faAngleRight} /> More Info
                            </a>
                        </div>
                    </div>
                </div>
                <div className="left-section">
                    <div className="split-screen">
                        {/* Section 1 (Top to Bottom) */}
                        <a href="/" className="section animate__animated animate__fadeIn">
                            <FontAwesomeIcon icon={faHeadset} className="font_icon" />
                            <p>24/7 Response</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        </a>
                        {/* Section 2 (Bottom to Top) */}
                        <a href="/" className="section_2 animate__animated animate__fadeIn">
                            <FontAwesomeIcon icon={faComments} className="font_icon" />
                            <p>Communication Services</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        </a>
                    </div>
                    <div className="split-screen">
                        {/* Section 3 (Top to Bottom) */}
                        <a href="/" className="section_2 animate__animated animate__fadeIn">
                            <FontAwesomeIcon icon={faMotorcycle} className="font_icon" />
                            <p>Fast Delivery</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        </a>
                        {/* Section 4 (Bottom to Top) */}
                        <a href="/" className="section_2 animate__animated animate__fadeIn">
                            <FontAwesomeIcon icon={faStar} className="font_icon" />
                            <p>Best Expertise</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        </a>
                    </div>
                </div>

            </div>
        </section>

    );
};
export default YourService