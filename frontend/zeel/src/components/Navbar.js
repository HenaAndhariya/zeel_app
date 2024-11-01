import 'bootstrap/dist/css/bootstrap.min.css';
import zeel_logo from '../img/zeel_logo_2.png';
// import Dropdown from 'react-bootstrap/Dropdown';
// import React, { useState } from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg_dark">
            <a className="navbar-brand d-flex justify-content-center" href="/"><img className="zeel_img" src={zeel_logo} alt="zeel logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="/">Home</a>
                    </li>
                    {/* <li className="nav-item">
                        <Dropdown onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}  show={isHovered}>
                            <Dropdown.Toggle variant="success" className="nav-link text-white dropdown_bg" id="dropdown-basic" onClick={() => window.location.href = '/Services'}>
                                Services
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown_menu">
                                <Dropdown.Item className="dropdown_item" href="/Work">Work</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/Services"> Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/Work">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/About">About</a>
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