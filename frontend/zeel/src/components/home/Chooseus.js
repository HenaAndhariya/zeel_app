
import React from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import blazer from '../../img/blazer-suit-formal.png';
import weddingsuit from '../../img/wedding-suit-clothes.png';
import waistcoat from '../../img/waistcoat-suit-formal-clothes-outfit.png';
import dress from '../../img/dress-shopping-fashion-outfit-clothes.png';
import weddingdress from '../../img/wedding-dress-marry-clothes-outfit.png';
import strapless from '../../img/strapless-tanktop-clothes-outfit-party-skirt.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Whychoouseus() {
    return (
        <div className="section whychooseus">
            <div className="container">
                <div className="text animate__animated animate__fadeInLeft">
                    <h1 className="text-white">Why <span className="yellow_text"> Choose US</span></h1>
                    <div className="elementor-widget-container pb-3">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar dapibus .
                        </p>
                    </div>
                    <a href="/" className="button">
                        <FontAwesomeIcon icon={faAngleRight} className="font_icon" /> More Info
                    </a>
                </div>
                <div className="image animate__animated animate__fadeInRight">
                    <div className="d-flex align-item-center p-5">
                        <img src={blazer} alt="Person Adjusting Tie" />
                        <span><p className="text-white">Lorem ipsum <br/>dolor sit amet.</p></span>
                        <img className="ml-2" src={weddingsuit} alt="Person Adjusting Tie" />
                        <span><p className="text-white">Lorem ipsum <br/>dolor sit amet.</p></span>
                        <img className="ml-2" src={waistcoat} alt="Person Adjusting Tie" />
                        <span><p className="text-white">Lorem ipsum <br/>dolor sit amet.</p></span>
                    </div>
                    <div className="d-flex align-item-center p-5">
                        <img src={dress} alt="Person Adjusting Tie" />
                        <span><p className="text-white">Lorem ipsum <br/>dolor sit amet.</p></span>
                        <img src={weddingdress} alt="Person Adjusting Tie" />
                        <span><p className="text-white">Lorem ipsum <br/>dolor sit amet.</p></span>
                        <img src={strapless} alt="Person Adjusting Tie" />
                        <span><p className="text-white">Lorem ipsum <br/>dolor sit amet.</p></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Whychoouseus;