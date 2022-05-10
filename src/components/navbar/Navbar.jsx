import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className='navbar__Container'>
                <img src='https://www.gndec.ac.in/sites/default/logo.png' alt='img Not found'/>
                <nav className="navbar py-0 navbar-expand-lg">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="/">Navbar</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className=" nav-item">
                                    <Link to="/" className='nav-link'>Lorem</Link>
                                </li>
                                <li className=" nav-item">
                                    <Link to="/" className='nav-link'>Lorem</Link>
                                </li>
                                <li className=" nav-item">
                                    <Link to="/" className='nav-link'>Lorem</Link>
                                </li>
                                <li className=" nav-item">
                                    <Link to="/" className='nav-link'>Lorem</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar