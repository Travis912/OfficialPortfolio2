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
        <>

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
                        <button onClick={togglePause}>{isPaused ? <i className="fas fa-play"></i> : <i className='fas fa-pause'></i>}</button>
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
                                <i className="fa-solid fa-cloud-sun"></i>
                                <h6>Seasons & Climate</h6>
                                <p>Weather in Banff and Lake Louise varies greatly between seasons. Learn more about the time of year you plan to visit so you can be prepared!</p>
                                <a>Explore Seasons {">"} </a>
                            </div>
                            <div className='before-you-go-card'>
                                <i className="fa-solid fa-store"></i>
                                <h6>Buy Your Park Pass</h6>
                                <p>Everyone visiting Banff, Lake Louise or Banff National Park needs a National Park Pass for the duration of their stay.</p>
                                <a>Buy Now {">"}</a>
                            </div>
                            <div className='before-you-go-card'>
                                <i className="fa-solid fa-map"></i>
                                <h6>Getting Here</h6>
                                <p>Explore the multiple options available for getting to Banff and Lake Louise</p>
                                <a>See Options {">"}</a>
                            </div>
                            <div className='before-you-go-card'>
                                <i className="fa-solid fa-info-circle"></i>
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
                            <button onClick={FtStoryDecrease}><i className="fas fa-chevron-left"></i></button>
                            <ul className='ft-bubble-btn-ul-MOBILE'>
                                <li><button className={activeFtButton === 1 ? "ftActive" : ""} onClick={FtStoryOneFunc}>1</button></li>
                                <li><button className={activeFtButton === 2 ? "ftActive" : ""} onClick={FtStoryTwoFunc}>2</button></li>
                                <li><button className={activeFtButton === 3 ? "ftActive" : ""} onClick={FtStoryThreeFunc}>3</button></li>
                                <li><button className={activeFtButton === 4 ? "ftActive" : ""} onClick={FtStoryFourFunc}>4</button></li>
                            </ul>
                            <button onClick={FtStoryIncrease}><i className="fas fa-chevron-right"></i></button>
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

        </>
    );
};