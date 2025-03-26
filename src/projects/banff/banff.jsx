import './banff.css';
import { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import BanffNav from './banffNav.jsx';
import airCanada from './airCanada.png';
import travelAlberta from './travelAlberta.png';
import afar from './afar.avif';
import traveler from './traveler-award.svg';
import BanffHeaderLayout from './banffHeaderLay.jsx';
import FtStory from "./ftStoryComp.jsx";
import NewGetInspired from './NewGetInspired.jsx';

export default function Banff() {
    const [isPlayingOne, setIsPlayingOne] = useState(true);
    const [isPlayingTwo, setIsPlayingTwo] = useState(false);
    const [isPlayingThree, setIsPlayingThree] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    /* Header Button States */
    const [headerNumber, setHeaderNumber] = useState(1);
    const [season, setSeason] = useState("Winter");
    const [seasonMenu, setSeasonMenu] = useState(false);

    /* Ft Stories Button States */
    const [ftStory, setFtStory] = useState(1);
    const [activeFtButton, setActiveFtButton] = useState(1);

    /* Header Button Functions */

    function banffSeasonMenu() {
        setSeasonMenu(!seasonMenu);
    }

    function BanffWinter() {
        setSeason("Winter");
        setSeasonMenu(!seasonMenu);
        setHeaderNumber(1)
        setIsPlayingOne(true);
        setIsPlayingTwo(false);
        setIsPlayingThree(false);
    }

    function BanffSpring() {
        setSeason("Spring");
        setSeasonMenu(!seasonMenu);
        setHeaderNumber(1)
        setIsPlayingOne(true);
        setIsPlayingTwo(false);
        setIsPlayingThree(false);
    }

    function BanffSummer() {
        setSeason("Summer");
        setSeasonMenu(!seasonMenu);
        setHeaderNumber(1)
        setIsPlayingOne(true);
        setIsPlayingTwo(false);
        setIsPlayingThree(false);
    }

    function BanffFall() {
        setSeason("Fall");
        setSeasonMenu(!seasonMenu);
        setHeaderNumber(1)
        setIsPlayingOne(true);
        setIsPlayingTwo(false);
        setIsPlayingThree(false);
    }

    function BanffHeaderOneFunc() {
        setHeaderNumber(1);
        setIsPlayingOne(true);
        setIsPlayingTwo(false);
        setIsPlayingThree(false);
    }

    function BanffHeaderTwoFunc() {
        setHeaderNumber(2);
        setIsPlayingOne(false);
        setIsPlayingTwo(true);
        setIsPlayingThree(false);
    }

    function BanffHeaderThreeFunc() {
        setHeaderNumber(3);
        setIsPlayingOne(false);
        setIsPlayingTwo(false);
        setIsPlayingThree(true);
    }

    function CalculateSeason() {
        if (season === "Winter" && headerNumber === 3) {
            setSeason("Spring");
            setHeaderNumber(1)
            setIsPlayingOne(true);
            setIsPlayingTwo(false);
            setIsPlayingThree(false);
            return;
        } else if (season === "Spring" && headerNumber === 3) {
            setSeason("Summer");
            setHeaderNumber(1)
            setIsPlayingOne(true);
            setIsPlayingTwo(false);
            setIsPlayingThree(false);
            return;
        } else if (season === "Summer" && headerNumber === 3) {
            setSeason("Fall");
            setHeaderNumber(1)
            setIsPlayingOne(true);
            setIsPlayingTwo(false);
            setIsPlayingThree(false);
            return;
        } else if (season === "Fall" && headerNumber === 3) {
            setSeason("Winter");
            setHeaderNumber(1)
            setIsPlayingOne(true);
            setIsPlayingTwo(false);
            setIsPlayingThree(false);
            return;
        } else {
            return;
        }
    }

    /* Ft Stories Button Functions */

    function FtStoryOneFunc() {
        setFtStory(1);
        setActiveFtButton(1);
    }

    function FtStoryTwoFunc() {
        setFtStory(2);
        setActiveFtButton(2);
    }

    function FtStoryThreeFunc() {
        setFtStory(3);
        setActiveFtButton(3);
    }

    function FtStoryFourFunc() {
        setFtStory(4);
        setActiveFtButton(4);
    }

    function FtStoryIncrease() {
        if (ftStory === 4) {
            setFtStory(1);
            setActiveFtButton(1);
        } else {
            setFtStory(ftStory + 1);
            setActiveFtButton(ftStory + 1);
        }
    }

    function FtStoryDecrease() {
        if (ftStory === 1) {
            setFtStory(4);
            setActiveFtButton(4);
        } else {
            setFtStory(ftStory - 1);
            setActiveFtButton(ftStory - 1);
        }
    }



    const togglePause = () => {
        setIsPaused(!isPaused);
    };

  useEffect(() => {
    if(!isPaused) {
        const interval = setInterval(() => {
            setHeaderNumber((prev) => {
                if (prev === 3 && season === "Winter") {
                    setSeason("Spring");
                    return 1;
                } else if (prev === 3 && season === "Spring") {
                    setSeason("Summer");
                    return 1;
                } else if (prev === 3 && season === "Summer") {
                    setSeason("Fall");
                    return 1;
                } else if (prev === 3 && season === "Fall") {
                    setSeason("Winter");
                    return 1;
                } else {
                    return prev + 1;
                };
            });
        }, 7000);
        return () => clearInterval(interval);
    }
    }, [headerNumber, season, isPaused]);

    return (
        <div className='banff-entire-page'>

            <BanffNav></BanffNav>

            <header className='banff-header'>
                <div className='banff-header-div'>
                    <BanffHeaderLayout headerNumber={headerNumber} season={season}></BanffHeaderLayout>
                    <div className='banff-header-btn-div'>
                        <button onClick={banffSeasonMenu}>Season: {season}</button>
                        <div className={seasonMenu ? 'seasonMenuOpen' : 'seasonMenuClosed'}>
                            <button onClick={BanffSpring}>Spring<span>(May-Apr)</span></button>
                            <button onClick={BanffSummer}>Summer<span>(Jun-Sep)</span></button>
                            <button onClick={BanffFall}>Fall<span>(Sep-Nov)</span></button>
                            <button onClick={BanffWinter}>Winter<span>(Nov-Mar)</span></button>
                        </div>
                        <CountdownCircleTimer
                            key={`header1-${isPlayingOne}`}
                            isPlaying={isPlayingOne && !isPaused}
                            duration={7}
                            colors={['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']}
                            colorsTime={[7, 5, 2, 0]}
                            isGrowing={true}
                            strokeWidth={3}
                            size={50}
                            rotation='counterclockwise'
                            trailColor='rgba(0, 0, 0, 0)'
                            onComplete={() => {
                                setHeaderNumber(2);
                                setIsPlayingOne(false);
                                setIsPlayingTwo(true);
                            }}
                        >{() => <button className={headerNumber === 1 ? 'banffHeaderBtnActive' : 'banffHeaderBtnNotActive'} onClick={BanffHeaderOneFunc}>01</button>}</CountdownCircleTimer>
                        <CountdownCircleTimer
                            key={`header2-${isPlayingTwo}`}
                            isPlaying={isPlayingTwo && !isPaused}
                            duration={7}
                            colors={['#FFFFFF.', '#FFFFFF.', '#FFFFFF.', '#FFFFFF.']}
                            colorsTime={[7, 5, 2, 0]}
                            isGrowing={true}
                            strokeWidth={3}
                            size={50}
                            rotation='counterclockwise'
                            trailColor='rgba(0, 0, 0, 0)'
                            onComplete={() => {
                                setHeaderNumber(3);
                                setIsPlayingTwo(false);
                                setIsPlayingThree(true);
                            }}
                        >{() => <button className={headerNumber === 2 ? 'banffHeaderBtnActive' : 'banffHeaderBtnNotActive'} onClick={BanffHeaderTwoFunc}>02</button>}</CountdownCircleTimer>
                        <CountdownCircleTimer
                            key={`header3-${isPlayingThree}`}
                            isPlaying={isPlayingThree && !isPaused}
                            duration={7}
                            colors={['#FFFFFF.', '#FFFFFF.', '#FFFFFF.', '#FFFFFF.']}
                            colorsTime={[7, 5, 2, 0]}
                            isGrowing={true}
                            strokeWidth={3}
                            size={50}
                            rotation='counterclockwise'
                            trailColor='rgba(0, 0, 0, 0)'
                            onComplete={() => {
                                setHeaderNumber(1);
                                setIsPlayingThree(false);
                                setIsPlayingOne(true);
                                CalculateSeason();
                            }}
                        >{() => <button className={headerNumber === 3 ? 'banffHeaderBtnActive' : 'banffHeaderBtnNotActive'} onClick={BanffHeaderThreeFunc}>03</button>}</CountdownCircleTimer>
                        <button onClick={togglePause}>
                            {isPaused ?
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                )}
                        </button>
                    </div>
                </div>
            </header>

            <main className='banff-main'>

                <section className='get-insipired-section'>
                    <h3> Get Inspired</h3>
                    <NewGetInspired></NewGetInspired>
                </section>

                <section className='snow-season-section'>
                    <div className='snow-season-div'>
                        <div className='snow-season-img-div'>
                            <div className='snow-season-text-div'>
                                <h3> Snow Season is Here! </h3>
                                <p> Experience the best of winter in Banff and Lake Louise - ski, dog sled, sleigh ride, snowshoe and so much more through breathtaking landscapes, then unwind with cozy après by the fire.</p>
                            </div>
                            <button> Winter Activities </button>
                        </div>
                    </div>
                    <div className='snow-season-div'>
                        <div className='snow-season-img-div'>
                            <div className='snow-season-text-div'>
                                <h3> Buy Your Park Pass </h3>
                                <p> Everyone visiting Banff, Lake Louise and Banff National Park need a Park Pass for the duration of their stay. Banff National Park entry and service fees help support visitor services and facilities.</p>
                            </div>
                            <button> Buy Now </button>
                        </div>
                    </div>
                </section>

                <section className='before-you-go-section'>
                    <h3>Know Before You Go</h3>
                        <div className='before-you-go-card-div'>
                            <div className='before-you-go-card'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                                <h6>Seasons & Climate</h6>
                                <p>Weather in Banff and Lake Louise varies greatly between seasons. Learn more about the time of year you plan to visit so you can be prepared!</p>
                                <a>Explore Seasons {">"} </a>
                            </div>
                            <div className='before-you-go-card'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                                <h6>Buy Your Park Pass</h6>
                                <p>Everyone visiting Banff, Lake Louise or Banff National Park needs a National Park Pass for the duration of their stay.</p>
                                <a>Buy Now {">"}</a>
                            </div>
                            <div className='before-you-go-card'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                </svg>
                                <h6>Getting Here</h6>
                                <p>Explore the multiple options available for getting to Banff and Lake Louise</p>
                                <a>See Options {">"}</a>
                            </div>
                            <div className='before-you-go-card'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                                <h6>Get In Touch</h6>
                                <p>Speak to one of our local experts for advice on trip planning, accomodation, activities and any questions you may have.</p>
                                <a>Chat with a local expert {">"}</a>
                            </div>
                        </div>
                </section>

                <section className='find-accommodation-section'>
                    <div className='accomodation-header-div'>
                        <h3>Find Accomodation</h3>
                        <button>See All Accomodation {">"}</button>
                    </div>
                    <div className='accomodation-card-div'>
                        <div className='accomodation-card acc-hotels'>
                            <h6>Hotels</h6>
                        </div>
                        <div className='accomodation-card acc-cabins'>
                            <h6>Cabins</h6>
                        </div>
                        <div className='accomodation-card acc-hostels'>
                            <h6>Basic & Hostels</h6>
                        </div>
                        <div className='accomodation-card acc-bb'>
                            <h6>Bed & Breakfasts</h6>
                        </div>
                    </div>
                    <button className='Accomodation-btn'>See All Accomodation {">"}</button>
                </section>

                <section className='plan-dream-section'>
                    <div className='plan-dream-div'>
                        <div>
                            <h3>Plan Your Dream Trip</h3>
                            <p>Plan and build out your dream vacation to Banff and Lake Louise with the Trip Builder.</p>
                            <button>Try Trip Builder</button>
                        </div>
                    </div>
                </section>

                <section className='Featered-stories-section'>
                    <FtStory ftStory={ftStory}></FtStory>
                    <div className='ft-btns-div'>
                        <ul className='ft-bubble-btn-ul'>
                            <li><button className={activeFtButton === 1 ? "ftActive" : ""} onClick={FtStoryOneFunc}>1</button></li>
                            <li><button className={activeFtButton === 2 ? "ftActive" : ""} onClick={FtStoryTwoFunc}>2</button></li>
                            <li><button className={activeFtButton === 3 ? "ftActive" : ""} onClick={FtStoryThreeFunc}>3</button></li>
                            <li><button className={activeFtButton === 4 ? "ftActive" : ""} onClick={FtStoryFourFunc}>4</button></li>
                        </ul>
                        <div className='ft-arrow-btn-div'>
                            <button onClick={FtStoryDecrease}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <ul className='ft-bubble-btn-ul-MOBILE'>
                                <li><button className={activeFtButton === 1 ? "ftActive" : ""} onClick={FtStoryOneFunc}>1</button></li>
                                <li><button className={activeFtButton === 2 ? "ftActive" : ""} onClick={FtStoryTwoFunc}>2</button></li>
                                <li><button className={activeFtButton === 3 ? "ftActive" : ""} onClick={FtStoryThreeFunc}>3</button></li>
                                <li><button className={activeFtButton === 4 ? "ftActive" : ""} onClick={FtStoryFourFunc}>4</button></li>
                            </ul>
                            <button onClick={FtStoryIncrease}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </section>

                <footer className='banff-footer'>

                    <div className='banff-top-footer-div'>
                        <div className='banff-footer-top-left-div'>
                            <h6>Sign Up!</h6>
                            <p>Get regular updates about upcoming events, trip planning advice and compelling stories.</p>
                            <button><i className="fas fa-envelope"></i>Sign up for our E-newsletter</button>
                            <div className='banff-footer-icon-div'>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                        <div className='banff-footer-top-right-div'>
                            <div className='banff-footer-top-right-ul-div'>
                                <ul>
                                    <li><h6>About Us</h6></li>
                                    <li>Careers With Us</li>
                                    <li>Work in Banff</li>
                                    <li>Ambassador Program</li>
                                    <li>Business Directory</li>
                                    <li>Contact Us</li>
                                </ul>
                                <ul>
                                    <li><h6>Groups & Members</h6></li>
                                    <li>Media & Influencers</li>
                                    <li>Member Information</li>
                                    <li>Business Events</li>
                                    <li>Travel Trade</li>
                                    <li>Lead Tourism for Good</li>
                                </ul>
                            </div>
                            <div className='banff-footer-top-endorsed-div'>
                                <div>
                                    <h6>Endorsed By</h6>
                                    <div className='banff-footer-endorsed-div'>
                                        <img src={afar} alt='afar'></img>
                                        <img src={traveler} alt='traveler'></img>
                                    </div>
                                </div>
                                <div className='banff-bottom-footer-right-div-MOBILE'>
                                    <h6>Travel Partners</h6>
                                    <img src={airCanada} alt='airCanada'></img>
                                    <img src={travelAlberta} alt='travelAlberta'></img>
                                </div>
                            </div>
                            <div className='banff-footer-icon-div-MOBILE'>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                    </div>

                    <div className='banff-bottom-footer-div'>
                        <div className='banff-bottom-footer-left-div'>
                            <p>We acknowledge that Banff National Park is within the present-day territories of Treaty 6, 7 and 8, as well as the Metis Homeland. The lands and waters of Banff National Park have been used for millennia by Indigenous Peoples for sustenance, ceremony, trade and travel. We thank them for their continuous stewardship and for sharing the land with us.</p>
                            <div className='banff-footer-policy-div-MOBILE'>
                                <div className='banff-footer-policy-div'>
                                    <p>Privacy Policy</p>
                                    <p>Terms & Conditions</p>
                                    <p><span>Manage Your</span> Cookies</p>
                                </div>
                                <p>Ⓒ Banff & Lake Louise Tourism 2024</p>
                            </div>
                        </div>
                        <div className='banff-bottom-footer-right-div'>
                            <div>
                                <img src={airCanada} alt='airCanada'></img>
                                <img src={travelAlberta} alt='travelAlberta'></img>
                            </div>
                            <div className='banff-footer-policy-div'>
                                <p>Ⓒ Banff & Lake Louise Tourism 2024</p>
                                <div className='banff-footer-policy-div'>
                                    <p>Privacy Policy</p>
                                    <p>Terms & Conditions</p>
                                    <p>Manage Your Cookies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>

        </div>
    );
};