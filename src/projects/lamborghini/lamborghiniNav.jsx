import './lamborghini.css';
import { useState } from 'react';
import lamboLogo from './lambo-logo.svg';
import LamboDropdown from './lamboDropdown';

const LamborghiniNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState('closed');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
            <nav onMouseLeave={() => setDropdown('closed')} className="lamborghini-nav">
                <div className="lambo-nav-logo"><img src={lamboLogo} alt='Lamborghini Logo'></img></div>

                <div className={`lambo-nav-links ${isOpen ? 'open' : ''}`}>
                    <div>
                        <a
                            onMouseEnter={() => setDropdown('models')}
                            href="#home">MODELS
                        </a>
                        <a href="#home">BEYOND</a>
                        <a href="#home">OWNERSHIP</a>
                        <a href="#home">MOTORSPORT</a>
                    </div>
                    <div className='second-lambo-nav-links'>
                        <a href="#home">DEALERSHIPS</a>
                        <a href="#home">MUSEUM</a>
                        <a href="#home">STORE</a>
                    </div>
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
                <LamboDropdown dropdown={dropdown} />
            </nav>
    );
};

export default LamborghiniNav;