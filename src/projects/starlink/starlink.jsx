import './starlink.css';
import StarlinkNav from './starlinkNav';
import contractsImg from './contracts-img.jpg';
import getOnline from './starlink-vid-2.mp4';
import vidCoverTwo from './starlink-vid-cover-2.png';

export default function Starlink() {
    return (
        <>
            <div className='starlink-page'>
                <StarlinkNav />

                <header className='starlink-header-container'>
                    <div className='starlink-header-top-text'>
                        <h1>HIGH-SPEED INTERNET AROUND THE WORLD</h1>
                        <p>Connect at home or on the go.</p>
                        <button>WATCH NOW</button>
                    </div>
                    <div className='starlink-header-bottom-text'>
                        <form className='starlink-header-form'>
                            <label htmlFor='starlink-address'>Service Address</label>
                            <div className='starlink-header-input-btn-div'>
                                <input id='starlink-address' className='starlink-header-input' type='type' name="address" placeholder='TYPE AND SELECT'></input>
                                <button className='starlink-order-now-btn'>ORDER NOW</button>
                            </div>
                        </form>
                        <button className='starlink-header-availability-btn'>VIEW AVAILABILITY AND SPEEDS MAP</button>
                    </div>
                </header>

                <div>

                    <section className='roam-boat-section'>
                        <div className='roam-boat-pic-div'>
                            <div className='residential-div'>
                                <h3>RESIDENTIAL</h3>
                                <p>Connect at home</p>
                            </div>
                            <div className='roam-div'>
                                <h3>ROAM</h3>
                                <p>Connect on the go</p>
                            </div>
                            <div className='boats-div'>
                                <h3>BOATS</h3>
                                <p>Connect on the water</p>
                            </div>
                        </div>
                        <div className='roam-boat-text-container'>
                            <h3>STARLINK FOR BUSINESSES AND POWER USERS</h3>
                            <div>
                                <p>RELIABLE HIGH-SPEED INTERNET DESIGNED TO KEEP BUISNESSES CONNECTED.</p>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </section>

                    <section className='connectivity-section'>
                        <div className='connectivity-text-div'>
                            <h3>CONNECTIVITY WHERE YOU LEAST EXPECT IT</h3>
                            <p>Streaming, video calls, online gaming, remote working and more are now possible in even the most remote locations thanks to the world’s most advanced internet system.</p>
                        </div>
                    </section>

                    <section className='get-online-section'>
                        <div className='getOnline-vid-container'>
                            <video className="get-online-video" src={getOnline} controls></video>
                            <img className="get-online-img" src={vidCoverTwo} alt='satelite' ></img>
                        </div>
                        <div className='getOnline-text-container'>
                            <h2>GET ONLINE IN MINUTES</h2>
                            <p className='starlink-mobile-hidden'>Set up Starlink with just two steps. Instructions work in either order:</p>
                            <div>
                                <h3>1 PLUG IT IN</h3>
                                <h3>2 POINT AT SKY</h3>
                            </div>
                            <p className='starlink-mobile-hidden'>Starlink requires an unobstructed view of the sky. Download the Starlink app to determine your best install location.</p>
                            <div>
                                <button>DOWNLOAD FOR ANDROID</button>
                                <button>DOWNLOAD FOR IOS</button>
                            </div>
                        </div>
                    </section>

                    <section className='no-contracts-section'>
                        <div className='contracts-text-container'>
                            <h3>NO CONTRACTS</h3>
                            <p>Long term contracts prevent both you and Starlink from making sensible changes when necessary.</p>
                            <p>With Starlink, it is a fair deal both ways. Starlink can adjust terms and pricing as needed, and you can cancel at any time, for any reason.</p>
                        </div>
                        <div className='contracts-img-container'>
                            <img src={contractsImg} alt='House with starlink satellite&apos;' />
                        </div>
                    </section>

                    <section className='spaceX-section'>
                        <div className='spaceX-text-container'>
                            <h3>ENGINEERED BY SPACEX</h3>
                            <p>As the world&apos;s leading provider of launch services – and the only provider with an orbital class reusable rocket – SpaceX has deep experience with both spacecraft and on-orbit operations.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </section>

                </div>
            </div>

            <section className='free-trial-section'>
                <div className='free-trial-content-container'>
                    <h3>30 DAY TRIAL</h3>
                    <p>If not satisfied, return Starlink for a full refund.</p>
                    <form className='starlink-header-form'>
                        <label htmlFor='starlink-address'>Service Address</label>
                        <div className='starlink-header-input-btn-div'>
                            <input id='starlink-address' className='starlink-header-input' type='type' name="address" placeholder='TYPE AND SELECT'></input>
                            <button className='starlink-order-now-btn'>ORDER NOW</button>
                        </div>
                    </form>
                    <button className='starlink-header-availability-btn'>VIEW AVAILABILITY AND SPEEDS MAP</button>
                </div>
            </section>

            <footer className='starlink-footer'>
                <div>
                    <div>
                        <ul className='starlink-footer-links'>
                            <li>Careers</li>
                            <li>Satellite Opperators</li>
                            <li>Authorized Reseller</li>
                            <li>Privacy & Legal</li>
                            <li>Privacy Preferences</li>
                            <li>Gear Store</li>
                        </ul>
                    </div>
                    <div className='starlink-footer-copyright-div'>
                        <p>Starlink © 2024</p>
                        <p>Starlink is a division of SpaceX. Visit us at <span>spacex.com</span></p>
                    </div>
                </div>

                <div className='starlink-footer-signup-div'>
                    <div>
                        <p>Interested in staying up to date with Starlink?</p>
                    </div>
                    <div className='starlink-footer-form-div'>
                        <form className='starlink-footer-form'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='email' name='email' required ></input>
                            <button>SIGN UP</button>
                        </form>
                        <p>By clicking Sign Up, you agree to our <span>Privacy Policy</span></p>
                    </div>
                </div>
            </footer>
        </>
    )
}