import { useState, useEffect } from 'react';
import starlinkHamburger from './starlink-hamburger.svg';
import './starlink.css';

export default function SpaceXNav() {
    const [isTop, setIsTop] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`starlink-nav-container ${isTop ? 'transparent' : ''}`}>
            <div className={isDropdownOpen ? 'screen-disabled' : 'screen-not-disabled'}></div>
            <div className='the-div-thats-moving'>
                <a href="/starlink" id="starlink-logo" aria-label="SpaceX Homepage">
                    STARLINK
                </a>
                <ul className='starlink-nav-list'>
                    <li><a href="/starlink" aria-label="Falcon 9 vehicle page">RESIDENTIAL</a></li>
                    <li><a href="/starlink" aria-label="Falcon Heavy vehicle page">ROAM</a></li>
                    <li><a href="/starlink" aria-label="Dragon spacecraft page">BOATS</a></li>
                </ul>
            </div>

            <div className='the-second-moving-div'>
                <div className="starlink-pb-nav-container pb-desktop">
                    <p className='starlink-nav-personal'>PERSONAL</p>
                    <p>BUISNESS</p>
                </div>
                <div className="starlink-hamburger" onClick={toggleDropdown}>
                    <img src={starlinkHamburger} alt="Open Menu" />
                </div>

                    {/* DROPDOWN */}

            </div>
            <div className={isDropdownOpen ? 'starlink-dropdown-hidden' : 'starlink-dropdown'}>
                    <button onClick={toggleDropdown}>X</button>
                    <div className="starlink-pb-nav-container pb-mobile">
                        <p className='starlink-nav-personal'>PERSONAL</p>
                        <p>BUISNESS</p>
                    </div>
                    <ul className='starlink-dropdown-ul'>
                        <li>RESIDENTIAL</li>
                        <li>ROAM</li>
                        <li>US <i className="fas fa-globe"></i></li>
                        <li>SIGN IN</li>
                        <li>HELP CENTER</li>
                        <li>AVAILABLITY MAP</li>
                        <li>SPECIFICATIONS</li>
                        <li>SERVICE PLANS</li>
                        <li>VIDEO GUIDES</li>
                        <li>TECHNOLOGY</li>
                        <li>COMMUNITY GATEWAY</li>
                        <li>UPDATES</li>
                        <li>UPDATES</li>
                        <li>CUSTOMER STORIES</li>
                    </ul>
                </div>
        </nav>
    );
}