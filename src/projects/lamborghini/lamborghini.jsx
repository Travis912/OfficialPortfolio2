import './lamborghini.css';
import NewLamboNav from './newLamboNav';

/* Title images */
import temerario from './Logo-Temerario_01.png';
import revuelto from './revuelto.png';
import urus from './urus.webp';
import huracan from './Huracán_logo.webp';

/* mobile car images*/
import tem from './tem.webp';
import revTop from './rev-top.jpg';
import rev2 from './revuelto-2.webp';
import urusTop from './urusTop.webp';
import uru2 from './urus2.webp';
import hur from './hur.webp';
import limitedSereies from './conceptCar.webp';
import limitedSereies2 from './limitedSeries2.webp';
import concept from './concept-mobile.webp';
import concept2 from './concept.webp';

export default function Lamborghini() {

    const scrollToSection = () => {
        document.getElementById('temerario-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='lambo-page'>
            <NewLamboNav />
            <header className='lambo-header'>
                <h1>LAMBORGHINI</h1>
                <h1 id="lambo-model-text"><span>MODELS</span></h1>
                <div className='lambo-header-btn-div'>
                    <div className='hexagon-btn-background'>
                        <button className='hexagon-btn' onClick={scrollToSection}><span>{">"}</span></button>
                    </div>
                    <div className='hexagon-text-div'>
                        <p>MODELS OVERVIEW</p>
                        <p>All Lamborghini Models</p>
                    </div>
                </div>
            </header>

            <main className='lambo-main'>

                <section id="temerario-section" className='temerario-section model-section'>
                    <img className='model-section-img temerario-img' src={tem} alt='Temerario car'></img>
                    <div className='model-section-text-div'>
                        <img className='model-title-img' src={temerario} alt='Temerario'></img>
                        <p>Temerario represents a new evolutionary step in Lamborghini’s journey toward complete hybridization. The second HPEV (High Performance Electrified Vehicle) from Sant’Agata Bolognese is a revolution in terms of design, technology, and prowess. A bi-turbo V8 engine acts in synergy with three electric motors to create a new frontier of performance and driving emotions that redefine the standards for super sportscars.</p>
                        <button className='lmabo-model-btn'>TEMERARIO</button>
                    </div>
                </section>

                <section className='revuelto-section model-section'>
                    <div>
                        <img className='model-section-img revuelto-img' src={revTop} alt='Revuelto car'></img>
                        <img className='model-section-img revuelto-img2' src={rev2} alt='Revuelto car'></img>
                    </div>
                    <div className='model-section-text-div'>
                        <img className='model-title-img' src={revuelto} alt='Revuelto'></img>
                        <p>The Revuelto is the beginning of a new era for Lamborghini, who has harnessed the power of hybridization technology to create the first HPEV (High Performance Electrified Vehicle). Responding to the need for sustainability and powerful performance, the Lamborghini Revuelto rewrites all paradigms and represents a technical masterpiece beyond anyone’s imagination. The iconic V12 engine finds a new life in this futuristic automotive masterwork that delivers unparalleled performance and driving emotions.</p>
                        <button className='lmabo-model-btn'>REVUELTO</button>
                    </div>
                </section>

                <section className='urus-section model-section'>
                    <div>
                        <img className='model-section-img urus-img' src={urusTop} alt='Urus car'></img>
                        <img className='model-section-img urus2' src={uru2} alt='Urus car'></img>
                    </div>
                    <div className='model-section-text-div'>
                        <img className='model-title-img' src={urus} alt='Urus'></img>
                        <p>Lamborghini Urus is the world’s first Super Sport Utility Vehicle, where exclusivity, sportiness, and performance meet comfort and versatility. It offers best-in-class driving dynamics and unmistakable elegance in design. Urus embodies the characteristics of multiple souls: sporty, elegant, and off-road. The range is geared toward the future, ushering in a new era with the first PHEV (Plug-in Hybrid Electric Vehicle) version of the luxury Super SUV. With its unparalleled performance, a fun-to-drive experience, and a pioneering spirit, Lamborghini Urus is anything but typical.</p>
                        <button className='lmabo-model-btn'>URUS SE</button>
                        <button className='lmabo-model-btn'>URUS PERFORMANTE</button>
                        <button className='lmabo-model-btn'>URUS S</button>
                    </div>
                </section>

                <section className='huracan-section model-section'>
                    <img className='model-section-img huracan-img' src={hur} alt='Huracan car'></img>
                    <div className='model-section-text-div'>
                        <img className='model-title-img' src={huracan} alt='Huracan'></img>
                        <p>From our past, we&apos;ve learned perfection. This is how the first model of the Lamborghini Huracán was born. More performance, more control, more innovation. The Huracán is equipped with a powerful V10 engine and the latest technologies to perform at its absolute best. Engineered to guarantee the best performance and control under any driving condition, it&apos;s easy to take to the limit, not to mention extremely fun, thanks to technology like the Lamborghini Doppia Frizione (LDF) dual clutch gearbox and the electronically-controlled four-wheel drive. Enjoy the best driving experience, ever. Discover all the Lamborghini Huracán models.</p>
                        <button className='lmabo-model-btn'>HURACAN</button>
                    </div>
                </section>

                <section className='limited-series-section model-section'>
                    <div>
                        <img className='model-section-img limited-series-img2' src={limitedSereies2} alt='Our limited series car'></img>
                        <img className='model-section-img limited-series-img' src={limitedSereies} alt='Our limited series car'></img>
                    </div>
                    <div className='model-section-text-div limited-series-text-div'>
                        <h1>LIMITED SERIES</h1>
                        <p>The Limited Series Lamborghini are the most exclusive, limited editions to meet a small and select number of clients. Truly representing the state of the art in the domain of super cars, the Limited Series models express the highest Lamborghini spirit in every respect. Indeed, they are equipped with the most advanced features available in the fields of design and technology.</p>
                        <button className='lmabo-model-btn'>COUNTACH LPI 800-4</button>
                        <button className='lmabo-model-btn'>SIAN FKP 37</button>
                        <button className='lmabo-model-btn'>SIAN ROADSTER</button>
                    </div>
                </section>

                <section className='concept-section model-section'>
                    <div className='concept-img-div'>
                        <img className='model-section-img concept-img' src={concept} alt='Our newest concept car'></img>
                        <img className='model-section-img concept-img2' src={concept2} alt='Our newest concept car'></img>
                    </div>
                    <div className='model-section-text-div concept-text-div'>
                        <h1>CONCEPT</h1>
                        <p>The most visionary models, these unique specimens are set to define the highest limits of technology and design. Unveiled at the most prestigious international Motor Shows, they offer an exclusive look at the most innovative solutions that Lamborghini may adopt in its future series-production models.</p>
                        <button className='lmabo-model-btn'>TERZA MILLENNIO</button>
                        <button className='lmabo-model-btn'>ASTERION</button>
                        <button className='lmabo-model-btn'>ESTOQUE</button>
                    </div>
                </section>

            </main>

             <section className='lambo-dealer-and-room-section'>
                <div className='lambo-dealer-div'>
                    <div className='lambo-dealer-text-div'>
                        <h6>AUTOMOBILI LAMBORGHINI</h6>
                        <h3>COMPANY</h3>
                    </div>
                </div>
                <div className='lambo-room-div'>
                    <div className='lambo-room-text-div'>
                        <h6>MAKE IT UNIQUE MAKE IT YOURS</h6>
                        <h3>AD PERSONAM</h3>
                    </div>
                </div>
            </section>

            <div className='lambo-dumb-text'>
                <p>Consumption and emission values of all vehicles promoted on this page*: Combined fuel economy: 16-11 MPG; Combined fuel economy (electricity+gasoline): 48-23 MPGe; Combined fuel economy (gasoline only): 20-12 MPG; [EPA] | Temerario: Under approval, not available for sale</p>
            </div>

            <footer className='lambo-footer'>

                <div className='lambo-footer-ul-div'>
                    <ul className='lambo-footer-ul-one'>
                        <li>COMPANY</li>
                        <li>CAREERS</li>
                        <li>SUSTAINABILITY</li>
                        <li>PRIVACY & LEGAL</li>
                        <li>SITEMAP</li>
                        <li>ACCESSIBILITY</li>
                    </ul>
                    <ul className='lambo-footer-ul-two'>
                        <li>FINANCIALS</li>
                        <li>CONTACT US</li>
                        <li>MEDIA CENTER</li>
                        <li>COOKIE SETTINGS</li>
                        <li>NEWSLETTER</li>
                    </ul>
                </div>

                <div className='lambo-footer-text-div'>
                    <p className='lambo-footer-smaller-text'>The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.</p>
                    <p>
                        Copyright © 2025 Automobili Lamborghini S.p.A. a company with sole shareholder subject to the management and coordination of AUDI AG.<br /><br />
                        All rights reserved. VAT no. IT 00591801204<br /><br />
                        WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.<br /><br />
                        Automobili Lamborghini S.p.A. got the notice that several third parties across different countries are allegedly offering shares in Automobili Lamborghini S.p.A. These offers are unlawful and originate neither from Volkswagen Aktiengesellschaft nor from any of its subsidiaries.
                    </p>
                </div>
            </footer>

        </div>
    )
}