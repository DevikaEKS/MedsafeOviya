import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import './Menubar.css';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className='d-flex align-items-center gap-4'>
            <Link
                to="/"
                className={`custom-link text-white ${isActive('/') ? 'active' : ''}`}
            >
                HOME
            </Link>

            <div
                className="position-relative"
                onClick={() => toggleDropdown('dropdown1')}
            >
                <Link
                    to="#"
                    className="custom-link2 text-white d-flex align-items-center gap-1"
                >
                    <span className={`custom-link ${isActive('/about-us') ||isActive('/our-founder') || isActive('/our-board')  ? 'active' : ''}`} >WHO ARE WE</span> <span><IoMdArrowDropdown /></span>
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === 'dropdown1' && (
                    <div
                        className="dropdown-menu show"
                        style={{
                            position: "absolute",
                            left: "0",
                            paddingTop: "1rem",
                            top: "100%",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "0.5rem",
                            zIndex: "1030",
                        }}
                    >
                        <Link
                            to="/about-us"
                            className='dropdown-item'
                        >
                            About Us
                        </Link>
                        <Link
                            to="/our-founder"
                            className='dropdown-item'
                        >
                            Our Founder
                        </Link>
                        <Link
                            to="/our-board"
                            className='dropdown-item'
                        >
                            Our Board
                        </Link>
                    </div>
                )}
            </div>

            <div
                className="position-relative"
                onClick={() => toggleDropdown('dropdown2')}
            >
                <Link
                    to="#"
                    className="custom-link2 text-white d-flex align-items-center gap-1"
                >
                    <span className={`custom-link ${isActive('/drug-safety-services') ||isActive('/pharmacovigilance-consulting') || isActive('/strategic-partnerships')  ? 'active' : ''}`}>SERVICES</span> <span><IoMdArrowDropdown /></span>
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === 'dropdown2' && (
                    <div
                        className="dropdown-menu show"
                        style={{
                            position: "absolute",
                            left: "0",
                            paddingTop: "1rem",
                            top: "100%",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "0.5rem",
                            zIndex: "1030",
                        }}
                    >
                        <Link
                            to="/drug-safety-services"
                            className='dropdown-item'
                        >
                            Drug Safety Services
                        </Link>
                        <Link
                            to="/pharmacovigilance-consulting"
                            className='dropdown-item'
                        >
                            Pharmacovigilance Consulting
                        </Link>
                        <Link
                            to="/strategic-partnerships"
                            className='dropdown-item'
                        >
                            Strategic Partnerships
                        </Link>
                    </div>
                )}
            </div>

            <Link
                to="/news"
                className={`custom-link text-white ${isActive('/news') ? 'active' : ''}`}
            >
                NEWS
            </Link>
            <Link
                to="/downloads"
                className={`custom-link text-white ${isActive('/downloads') ? 'active' : ''}`}
            >
                DOWNLOADS
            </Link>
            <Link
                to="/careers"
                className={`custom-link text-white ${isActive('/careers') ? 'active' : ''}`}
            >
                CAREERS
            </Link>
            <Link
                to="/contact"
                className={`custom-link text-white ${isActive('/contact') ? 'active' : ''}`}
            >
                CONTACT
            </Link>
        </div>
    );
};

export default Navbar;