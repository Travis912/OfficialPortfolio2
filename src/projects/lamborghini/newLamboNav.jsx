import './lamborghini.css';
import { useState } from 'react';
import lamboLogo from './lambo-logo.svg';

// onMouseEnter={() => setDropdown('models')}

export default function NewLamboNav() {
    const [dropdown, setDropdown] = useState('closed');
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDesktopOpen, setIsDesktopOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileOpen(!isMobileOpen);
        setIsDesktopOpen(!isDesktopOpen);
    };

    return (
        <nav className='lambo-nav' onMouseLeave={() => setDropdown('closed')}>
                <div className='lambo-nav-left-div' onMouseLeave={() => setDropdown('closed')}>
                    <img src={lamboLogo} alt='Lamborghini Logo'></img>

                    <ul className='lambo-nav-ul modelsNav' onMouseEnter={() => setDropdown('models')}>
                        <li className={isDesktopOpen ? 'ul-title-inactive' : 'ul-title'}>MODELS</li>
                        <li className={dropdown === 'models' ? 'models' : 'closed'}>TEMERARIO</li>
                        <li className={dropdown === 'models' ? 'models' : 'closed'}>REVUELTO</li>
                        <li className={dropdown === 'models' ? 'models' : 'closed'}>URUS</li>
                        <li className={dropdown === 'models' ? 'models' : 'closed'}>HURACAN</li>
                        <li className={dropdown === 'models' ? 'models' : 'closed'}>PRE_OWNED</li>
                        <li className={dropdown === 'models' ? 'models' : 'closed'}>LIMITED SERIES</li>
                        <li className={dropdown === 'models' ? 'models' : 'closed'}>CONCEPT</li>
                    </ul>

                    <ul className="lambo-nav-ul  beyondNav" onMouseEnter={() => setDropdown('closed')}>
                        <li className={isDesktopOpen ? 'ul-title-inactive' : 'ul-title'}>BEYOND</li>
                    </ul>

                    <ul className={`lambo-nav-ul`} onMouseEnter={() => setDropdown('ownership')}>
                        <li className={isDesktopOpen ? 'ul-title-inactive ownership' : 'ul-title ownership'}>OWNERSHIP</li>
                        <li className={dropdown === 'ownership' ? 'ownership' : 'closed'}>CONNECTIVITY</li>
                        <li className={dropdown  === 'ownership' ? 'ownership' : 'closed'}>CUSTOMER APP</li>
                        <li className={dropdown  === 'ownership' ? 'ownership' : 'closed'}>MOBOLITY PROGRAM</li>
                        <li className={dropdown  === 'ownership' ? 'ownership' : 'closed'}>CLASSICS</li>
                        <li className={dropdown  === 'ownership' ? 'ownership' : 'closed'}>SERVICE</li>
                        <li className={dropdown  === 'ownership' ? 'ownership' : 'closed'}>RECALL CAMPAIGN</li>
                    </ul>

                    <ul className={`lambo-nav-ul`} onMouseEnter={() => setDropdown('motorsport')}>
                        <li className={isDesktopOpen ? 'ul-title-inactive' : 'ul-title'}>MOTORSPORT</li>
                        <li className={dropdown === 'motorsport' ? 'motorsport' : 'closed'}>GTP</li>
                        <li className={dropdown  === 'motorsport' ? 'motorsport' : 'closed'}>SUPER TROFEO</li>
                        <li className={dropdown  === 'motorsport' ? 'motorsport' : 'closed'}>GT3</li>
                        <li className={dropdown  === 'motorsport' ? 'motorsport' : 'closed'}>MOTORSPORT MODELS</li>
                        <li className={dropdown  === 'motorsport' ? 'motorsport' : 'closed'}>DRIVERS</li>
                        <li className={dropdown  === 'motorsport' ? 'motorsport' : 'closed'}>MOTORSPORT NEWS</li>
                        <li className={dropdown  === 'motorsport' ? 'motorsport' : 'closed'}>EXPERIENCE</li>
                        <li className={dropdown  === 'motorsport' ? 'motorsport' : 'closed'}>E SPORTS</li>
                    </ul>
                </div>
                <div className='lambo-nav-right-div'>
                    <div className={isDesktopOpen ? 'second-lambo-nav-links' : 'second-lambo-nav-links-closed'}>
                        <a href="#home">DEALERSHIPS</a>
                        <a href="#home">MUSEUM</a>
                        <a href="#home">STORE</a>
                    </div>
                    <div className='lambo-nav-icon-container'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <div className="hamburger" onClick={toggleMenu}>
                            { isDesktopOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
                <div className={isDesktopOpen ? 'desktop-menu' : 'desktop-menu-closed'}>
                    <div className='desktop-menu-div'>
                        <ul className='desktop-menu-ul'>
                            <li>CUSTOMIZATION</li>
                            <li>ACESSORIES</li>
                            <li>FINANCIAL SERVICES</li>
                            <li>WARRANTY EXTENSION</li>
                        </ul>
                        <ul className='desktop-menu-ul'>
                            <li>DESIGN</li>
                            <li>INNOVATION & EXCELLENCE</li>
                            <li>SUSTAINABILITY</li>
                            <li>HISTORY</li>
                        </ul>
                        <ul className='desktop-menu-ul'>
                            <li>DRIVING PROGRAMS</li>
                            <li>LOUNGE</li>
                            <li>CLUB</li>
                            <li>NEWS</li>
                            <li>PODCAST</li>
                        </ul>
                    </div>
                    <div className={isDesktopOpen ? 'lambo-desktop-lower-div' : 'desktop-lower-div-closed'}>
                        <div>
                            <h3>Languages</h3>
                            <ul>
                                <li>English</li>
                                <li>Italian</li>
                                <li>German</li>
                                <li>French</li>
                                <li>Spanish</li>
                                <li>Chinese</li>
                                <li>Japanese</li>
                                <li>Korean</li>
                                <li>Russian</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='lambo-hide'>Social</h3>
                            <ul>
                                <li><i className="fab fa-facebook-f"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="fab fa-linkedin-in"></i></li>
                                <li><i className="fab fa-youtube"></i></li>
                                <li><i className="fab fa-facebook-f"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="fab fa-linkedin-in"></i></li>
                                <li><i className="fab fa-youtube"></i></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='lambo-hide'>settings</h3>
                        </div>
                    </div>
                </div>

                <div className={isMobileOpen ? 'mobile-menu' : 'mobile-menu-closed'}>
                    <ul className='mobile-menu-ul'>
                        <li>MODELS</li>
                        <li>BEYOND</li>
                        <li>OWNERSHIP</li>
                        <li>MOTORSPORT</li>
                        <li>DEALERSHIPS</li>
                        <li>MUSEUM</li>
                        <li>STORE</li>
                        <li>CCUSTOMIZATION</li>
                        <li>ACCESSORIES</li>
                        <li>FINANCIAL SERVICES</li>
                        <li>WARRANTY EXTENSION</li>
                        <li>DESIGN</li>
                        <li>INNOVATION & EXELLENCE</li>
                        <li>SUSTAINABILITY</li>
                        <li>HISTORY</li>
                        <li>DRIVING PROGRAMS</li>
                        <li>LOUNGE</li>
                        <li>CLUB</li>
                        <li>NEWS</li>
                        <li>PODCAST</li>
                    </ul>
                </div>
        </nav>
    )
}