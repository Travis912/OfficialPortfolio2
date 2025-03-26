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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
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