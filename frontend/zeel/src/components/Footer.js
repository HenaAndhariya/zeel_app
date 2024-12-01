import React from 'react';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import zeel_logo from '../img/zeel_logo_2.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faTwitter, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img className="zeel_img" src={zeel_logo} alt="zeel logo" />
                    <nav className="footer-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Work">Work</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </nav>
                    <p>&copy; {new Date().getFullYear()} Zeel Menswear. All rights reserved.</p>
                </div>
              
                <div className="footer-contact">
                    <div className="contact-item mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>21 Oakwood Street SF, USA</p>
                    </div>
                    <div className="contact-item mb-3">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <p>0981-9091872</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>Support@zeve.com</p>
                    </div>
                </div>
                <div className="footer-about">
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
                    <div className="social-icons">
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link to="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPinterestP} />
                        </Link>
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} />
                        </Link>
                        <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
