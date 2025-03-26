import { useState } from 'react';
import PropTypes from 'prop-types';
import BanffDropdownOne from './banff-dropdown-one.jpg';
import BanffDropdownTwo from './banff-dropdown-two.jpg';
import BanffDropdownThree from './banff-dropdown-three.jpg';
import BanffDropdownFour from './banff-dropdown-four.jpg';
import BanffDropdownFive from './banff-dropdown-five.jpg';
import BanffDropdownSix from './banff-dropdown-six.jpg';
import BanffDropdownSeven from './banff-dropdown-seven.jpg';
import BanffDropdownEight from './banff-dropdown-eight.jpg';
import BanffDropdownNine from './banff-dropdown-nine.jpg';

export default function BanffNavDropdown({ dropdownContent, mobileMenuOpen}) {

    const [mobileSubMenu, setMobileSubMenu] = useState('');

    const toggleATPSubMenu = () => {
        if (mobileSubMenu === 'ATP') {
            setMobileSubMenu('');
        } else {
            setMobileSubMenu('ATP');
        }
    };

    const toggleVISubMenu = () => {
        if (mobileSubMenu === 'VI') {
            setMobileSubMenu('');
        } else {
            setMobileSubMenu('VI');
        }
    };

    const toggleTTDSubMenu = () => {
        if (mobileSubMenu === 'TTD') {
            setMobileSubMenu('');
        } else {
            setMobileSubMenu('TTD');
        }
    };

    if (dropdownContent === 'ATP' && mobileMenuOpen === false) {
        return (
            <>
                <div className='banff-left-dropdown-div'>
                    <h1>About This Place</h1>
                    <div className='banff-dropdown-lists-div'>
                        <ul>
                            <li>Banff National Park</li>
                            <li>Town & Village</li>
                            <li>Ski Resorts</li>
                            <li>History & Heritage</li>
                        </ul>
                        <ul>
                            <li>Seasons & Climate</li>
                            <li>Weather & Webcams</li>
                            <li>Wildlife</li>
                            <li>Stories & Blog</li>
                        </ul>
                    </div>
                </div>
                <div className='banff-right-dropdown-div'>
                    <div className='banff-dropdown-card-div'>
                        <div className='banff-dropdown-card dropdown-hotels'>
                            <h6>Discover The Lakes</h6>
                            <img src={BanffDropdownOne} alt='Banff National Park'></img>
                        </div>
                        <div className='banff-dropdown-card dropdown-cabins'>
                            <h6>Buy Your Park Pass</h6>
                            <img src={BanffDropdownTwo} alt='Buy Your Park Pass'></img>
                        </div>
                        <div className='banff-dropdown-card dropdown-hostels'>
                            <h6>Read The Blog</h6>
                            <img src={BanffDropdownThree} alt='Read The Blog'></img>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (dropdownContent === 'VI' && mobileMenuOpen === false) {
        return (
            <>
                <div className='banff-left-dropdown-div'>
                    <h1>Visitor Info</h1>
                    <div className='banff-dropdown-lists-div'>
                        <ul>
                            <li>Getting Here</li>
                            <li>Getting Around</li>
                            <li>Travel Information</li>
                            <li>Weather & Webcams</li>
                        </ul>
                        <ul>
                            <li>Accessibility</li>
                            <li>Contact Us</li>
                            <li>Buy Your Park Pass</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className='banff-right-dropdown-div'>
                    <div className='banff-dropdown-card-div'>
                        <div className='banff-dropdown-card dropdown-hotels'>
                            <h6>Banff National Park</h6>
                            <img src={BanffDropdownFour} alt='Banff National Park'></img>
                        </div>
                        <div className='banff-dropdown-card dropdown-cabins'>
                            <h6>Speak To A Local Expert</h6>
                            <img src={BanffDropdownFive} alt='Speak To A Local Expert'></img>
                        </div>
                        <div className='banff-dropdown-card dropdown-hostels'>
                            <h6>Buy Your Park Pass</h6>
                            <img src={BanffDropdownSix} alt='Buy Your Park Pass'></img>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (dropdownContent === 'TTD' && mobileMenuOpen === false) {
        return (
            <>
                <div className='banff-left-dropdown-div'>
                    <h1>Things To Do</h1>
                    <div className='banff-dropdown-lists-div'>
                        <ul>
                            <li>Sightseeing</li>
                            <li>Adventure & Outdoors</li>
                            <li>Arts & Culture</li>
                            <li>Indigenous Experiences</li>
                            <li>Wellness</li>
                        </ul>
                        <ul>
                            <li>Eat & Drink</li>
                            <li>Shopping</li>
                            <li>Weddings</li>
                            <li>Events & Festivals</li>
                        </ul>
                    </div>
                </div>
                <div  className='banff-right-dropdown-div'>
                    <div className='banff-dropdown-card-div'>
                        <div className='banff-dropdown-card dropdown-hotels'>
                            <h6>Get Trip Ideas</h6>
                            <img src={BanffDropdownSeven} alt='Get Trip Ideas'></img>
                        </div>
                        <div className='banff-dropdown-card dropdown-cabins'>
                            <h6>Browse Events</h6>
                            <img src={BanffDropdownEight} alt='Browse Events'></img>
                        </div>
                        <div className='banff-dropdown-card dropdown-hostels'>
                            <h6>Experience Wellness</h6>
                            <img src={BanffDropdownNine} alt='Experience Wellness'></img>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (mobileMenuOpen === true) {
        return (
            <div className='banff-mobile-dropdown-div'>
                <ul className='mobile-dropdown-top-list'>

                    <ul className='ATPMobileDropdown-ul' aria-expanded={mobileSubMenu === 'ATP' ? 'true' : 'false'}>
                        <li onClick={toggleATPSubMenu}>About This Place
                            {mobileSubMenu === 'ATP' ?
                            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            )}</li>
                        <ul className='mobile-dropdown-sublist'>
                            <li>Banff National Park</li>
                            <li>Town & Village</li>
                            <li>Ski Resorts</li>
                            <li>History & Heritage</li>
                            <li>Seasons & Climate</li>
                            <li>Weather & Webcams</li>
                            <li>Wildlife</li>
                            <li>Stories & Blog</li>
                        </ul>
                    </ul>

                    <ul className='VIMobileDropdown-ul' aria-expanded={mobileSubMenu === 'VI' ? 'true' : 'false'}>
                        <li onClick={toggleVISubMenu}>Visitor Info
                            {mobileSubMenu === 'VI' ?
                            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            )}</li>
                        <ul className='mobile-dropdown-sublist'>
                            <li>Banff National Park</li>
                            <li>Town & Village</li>
                            <li>Ski Resorts</li>
                            <li>History & Heritage</li>
                            <li>Seasons & Climate</li>
                            <li>Weather & Webcams</li>
                            <li>Wildlife</li>
                            <li>Stories & Blog</li>
                        </ul>
                    </ul>

                    <ul className='TTDMobileDropdown-ul' aria-expanded={mobileSubMenu === 'TTD' ? 'true' : 'false'}>
                        <li onClick={toggleTTDSubMenu}>Things To Do
                            {mobileSubMenu === 'TTD' ?
                            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            )}</li>
                        <ul className='mobile-dropdown-sublist'>
                            <li>Banff National Park</li>
                            <li>Town & Village</li>
                            <li>Ski Resorts</li>
                            <li>History & Heritage</li>
                            <li>Seasons & Climate</li>
                            <li>Weather & Webcams</li>
                            <li>Wildlife</li>
                            <li>Stories & Blog</li>
                        </ul>
                    </ul>

                    <li className='WTS'>Where To Stay</li>
                    <li className='TI'>Trip Ideas</li>
                </ul>
                <ul className='mobile-dropdown-bottom-list'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                        </svg>
                        What&apos;s Happening</li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                        Weather & Webcams</li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>
                        Buy Your Park Pass</li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                        Login</li>
                </ul>
                <button className="mobile-build-trip-btn">Build a Trip</button>
            </div>
        );
    } else {
        return null;
    }
}

BanffNavDropdown.propTypes = {
    dropdownContent: PropTypes.string.isRequired,
    mobileMenuOpen: PropTypes.bool
};

