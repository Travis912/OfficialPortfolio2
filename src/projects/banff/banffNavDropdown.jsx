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
                        <li onClick={toggleATPSubMenu}>About This Place <i className="fa fa-plus"></i></li>
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
                        <li onClick={toggleVISubMenu}>Visitor Info <i className="fa fa-plus"></i></li>
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
                        <li onClick={toggleTTDSubMenu}>Things To Do <i className="fa fa-plus"></i></li>
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
                    <li><i className="fa-solid fa-calendar"></i>What&apos;s Happening</li>
                    <li><i className="fa-solid fa-cloud"></i>Weather & Webcams</li>
                    <li><i className="fa-solid fa-store"></i>Buy Your Park Pass</li>
                    <li><i className="fa-solid fa-circle-user"></i>Login</li>
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

