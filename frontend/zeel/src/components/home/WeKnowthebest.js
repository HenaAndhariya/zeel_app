
import React from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import crop from '../../img/crop1-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function WeKnowthebest() {
    return (
        <div className="section">
            <div className="image animate__animated animate__fadeInLeft">
                <img src={crop} alt="Person Adjusting Tie" />
            </div>
            <div className="text animate__animated animate__fadeInRight">
                <h1 className="text-white">We Know <span className="yellow_text"> The Best</span> For <span className="yellow_text">You</span></h1>
                <div className="elementor-widget-container pb-3">
                    <p className="text-white">
                        Cras a ante id lectus molestie scelerisque in ac tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam at tellus id lorem finibus lobortis. Praesent mollis tortor in purus semper, vel condimentum purus fringilla. Morbi sollicitudin lorem eros, sit amet fringilla dolor commodo.
                    </p>
                </div>
                <a href="/" className="button">
                    <FontAwesomeIcon icon={faAngleRight} className="font_icon" /> More Info
                </a>
            </div>
        </div>
    );
};
export default WeKnowthebest