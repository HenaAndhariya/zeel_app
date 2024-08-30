import React from 'react';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import zeel_logo from '../img/zeel_logo.png';
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Service</a></li>
                        <li><a href="/">Pages</a></li>
                        <li><a href="/">Contact</a></li>
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
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPinterestP} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
