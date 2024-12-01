import 'bootstrap/dist/css/bootstrap.min.css';
import zeel_logo from '../img/zeel_logo_2.png';
import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
// import React, { useState } from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg_dark">
            <Link className="navbar-brand d-flex justify-content-center" to="/"><img className="zeel_img" src={zeel_logo} alt="zeel logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Dropdown onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}  show={isHovered}>
                            <Dropdown.Toggle variant="success" className="nav-link text-white dropdown_bg" id="dropdown-basic" onClick={() => window.location.to = '/Services'}>
                                Services
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown_menu">
                                <Dropdown.Item className="dropdown_item" to="/Work">Work</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Services"> Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Work">Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/About">About</Link>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <div className="row">
                        <div className="col-md-8">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </div>
                </form> */}
            </div>
        </nav>
    );
};

export default Navbar;