import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../style/header.scss"
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">VNVA</div>
                <ul className="navbar-nav">
                    <li className="dropdown" onClick={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                        <button className="dropdown-toggle">HUBS <FaChevronDown style={{ marginLeft: '8px' }} /></button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <Link to={`/hubs/TanSonNhatAirport`}>Tan Son Nhat International Airport</Link>
                                <Link to={`/hubs/NoiBaiAirport`}>Noi Bai International Airport</Link>
                            </div>
                        )}
                    </li>
                    <li><Link to={`/fleet`}>FLEET</Link></li>
                    <li><Link to={`/routes`}>ROUTES</Link></li>
                    <li><Link to={`/ranks`}>RANKS</Link></li>
                    <li><Link to={`/staff`}>STAFF</Link></li>
                    <li><Link to={`/about`}>ABOUT US</Link></li>
                </ul>
                <div className="navbar-buttons">
                    <button className="btn">Join Now</button>
                    <button className="btn">Login</button>
                </div>
            </nav>
        </>
    )
}

export default Header

