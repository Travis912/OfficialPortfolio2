import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                        <li> <i className="fa-solid fa-circle-user"> </i> Login </li>
                        <li> <i className="fa-solid fa-store"> </i> Buy Your Park Pass</li>
                        <li> <i className="fa-solid fa-cloud"> </i> Weather & Webcams </li>
                        <li> <i className="fa-solid fa-calendar"> </i> What&apos;s Happening </li>
                    </ul>
                </div>

                <div className='banff-lower-nav-div' aria-expanded={isMenuOpen}>

                    <div className="banff-hamburger-icon" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? "fa-solid fa-x" : "fas fa-bars"} />
                        <i className={isMenuOpen ? "fa-solid fa-x" : "fas fa-bars"}></i>
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