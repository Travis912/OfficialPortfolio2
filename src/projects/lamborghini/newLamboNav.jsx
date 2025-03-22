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
                        <i className="fa-solid fa-comments"></i>
                        <i className="fas fa-search"></i>
                        <div className="hamburger" onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
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
                            <h3>Social</h3>
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
                            <h3>settings</h3>
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