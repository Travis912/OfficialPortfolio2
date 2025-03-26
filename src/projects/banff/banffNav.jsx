import { useState, useEffect } from 'react';
import banffLogo from './banffLogo-new.png';
import BanffNavDropdown from './banffNavDropdown';

export default function BanffNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownContent, setDropdownContent] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsDropdownOpen(!isDropdownOpen);
        setDropdownContent('');
    };

    const toggleATPDropdown = () => {
        setIsDropdownOpen(true);
        if (dropdownContent === 'ATP') {
            setIsDropdownOpen(false);
            setDropdownContent('');
        } else {
            setDropdownContent('ATP');
        };
    };

    const toggleVIDropdown = () => {
        setIsDropdownOpen(true);
        if (dropdownContent === 'VI') {
            setIsDropdownOpen(false);
            setDropdownContent('');
        } else {
            setDropdownContent('VI');
        };
    };

    const toggleTTDropdown = () => {
        setIsDropdownOpen(true);
        if (dropdownContent === 'TTD') {
            setIsDropdownOpen(false);
            setDropdownContent('');
        } else {
            setDropdownContent('TTD');
        };
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 950) {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
                setDropdownContent('');
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className="banff-navbar">
                <div className='banff-above-nav-div'>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                            </svg>
                            Login
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                            </svg>
                            Buy Your Park Pass</li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                            Weather & Webcams
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                            </svg>
                            What&apos;s Happening
                        </li>
                    </ul>
                </div>

                <div className='banff-lower-nav-div' aria-expanded={isMenuOpen}>

                    <div className="banff-hamburger-icon" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <BanffNavDropdown className="BanffNavDropdown-mobile" mobileMenuOpen={isMenuOpen}/>

                    <div className="banff-logo"><img src={banffLogo} alt='logo'></img></div>

                    <div className='banff-nav-links-container'>
                        <ul className="banff-nav-links">

                            <li  aria-expanded={isDropdownOpen} className='banff-ATP-nav'>
                                <a onClick={toggleATPDropdown}>About This place  <i className={isDropdownOpen && dropdownContent === 'ATP' ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></a>
                                <div className="banff-dropdown-div">
                                    <div className='banff-dropdown-content'>
                                       <BanffNavDropdown dropdownContent={dropdownContent} mobileMenuOpen={isMenuOpen}/>
                                    </div>
                                </div>
                            </li>

                            <li aria-expanded={isDropdownOpen} className='banff-VI-nav'>
                                <a onClick={toggleVIDropdown}>Visitor Info <i className={isDropdownOpen && dropdownContent === 'VI' ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></a>
                                <div className="banff-dropdown-div">
                                    <div className='banff-dropdown-content'>
                                        <BanffNavDropdown dropdownContent={dropdownContent} mobileMenuOpen={isMenuOpen}/>
                                    </div>
                                </div>
                            </li>

                            <li aria-expanded={isDropdownOpen} className='banff-TTD-nav'>
                                <a onClick={toggleTTDropdown}>Things To Do <i className={isDropdownOpen && dropdownContent === 'TTD' ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></a>
                                <div className="banff-dropdown-div">
                                    <div className='banff-dropdown-content'>
                                        <BanffNavDropdown dropdownContent={dropdownContent} mobileMenuOpen={isMenuOpen}/>
                                    </div>
                                </div>
                            </li>

                            <li><a>Where To Stay</a></li>
                            <li><a>Trip Ideas</a></li>
                        </ul>
                        <div className="banff-nav-icons">
                            <i className="fas fa-search"></i>
                            <i className="fas fa-bookmark"></i>
                            <button className="build-trip-btn">Build a Trip</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}