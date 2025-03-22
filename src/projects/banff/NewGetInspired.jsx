import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';

/* Trip Ideas Imgaes */
import TripOne from "./tripIdeasOne.jpg";
import TripTwo from "./tripIdeasTwo.jpg";
import TripThree from "./tripIdeasThree.jpg";
import TripFour from "./tripIdeasFour.jpg";
import TripFive from './tripFive.jpg';
import TripSix from './tripSix.jpg';
import TripSeven from './tripSeven.jpg';
import TripEight from './tripEight.jpg';

/* Outdoor images */
import OutdoorOne from "./outdoorOne.jpg";
import OutdoorTwo from "./outdoorTwo.jpg";
import OutdoorThree from "./outdoorThree.jpg";
import OutdoorFour from "./outdoorFour.jpg";
import OutdoorFive from "./outdoorFive.jpg";
import OutdoorSix from "./outdoorSix.jpg";
import OutdoorSeven from "./outdoorSeven.jpg";
import OutdoorEight from "./outdoorEight.jpg";

/* Eat images */
import EatOne from "./eatOne.jpg";
import EatTwo from "./eatTwo.jpg";
import EatThree from "./eatThree.jpg";
import EatFour from "./eatFour.jpg";
import EatFive from "./eatFive.jpg";
import EatSix from "./eatSix.jpg";

/* Wellness images */
import WellnessOne from "./wellnessOne.jpg";
import WellnessTwo from "./wellnessTwo.jpg";
import WellnessThree from "./wellnessThree.jpg";
import WellnessFour from "./wellnessFour.jpg";

export default function NewGetInspired() {
    const [activeButton, setActiveButton] = useState("Trip");

    function TripFunc() {
        setActiveButton("Trip");
    }

    function OutdoorFunc() {
        setActiveButton("Outdoor");
    }

    function EatFunc() {
        setActiveButton("Eat");
    }

    function WellnessFunc() {
        setActiveButton("Wellness");
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    if(activeButton === 'Trip') {
        return (
            <>
                <ul className='get-inspired-ul'>
                    <div>
                        <li><button className={activeButton === "Trip" ? "active" : ""} onClick={TripFunc}>Trip Ideas</button></li>
                        <li><button className={activeButton === "Outdoor" ? "active" : ""} onClick={OutdoorFunc}>Outdoor Adventures</button></li>
                        <li><button className={activeButton === "Eat" ? "active" : ""} onClick={EatFunc}>Eat & Drink</button></li>
                        <li><button className={activeButton === "Wellness" ? "active" : ""} onClick={WellnessFunc}>Wellness</button></li>
                    </div>
                </ul>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    minimumTouchDrag={20}
                    showDots={true}
                    arrows={true}
                    slidesToSlide={1}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    deviceType={'desktop'}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className='BanffNew-carousel-track'
                    >
                    <div className='BanffNew-carousel-indivisual-div trip-carousel-card'>
                        <div className="BanffNew-trip-img-div">
                            <img className="banff-carousel-trip-img" src={TripOne} alt='demo'></img>
                        </div>
                        <div className="trip-title-div">
                            <h4 className="trip-title">Winter Escape in the Canadian Rockies</h4>
                            <div className="days-and-experinces-div">
                                <p><i className="fa fa-clock"></i>7 Days</p>
                                <p><i className="fa fa-map-marker-alt"></i>14 Experiences</p>
                            </div>
                        </div>
                    </div>

                   <div className='BanffNew-carousel-indivisual-div trip-carousel-card'>
                        <div className="BanffNew-trip-img-div">
                            <img className="banff-carousel-trip-img" src={TripTwo} alt='demo'></img>
                        </div>
                        <div className="trip-title-div">
                            <h4 className="trip-title">Powder Chasing in Banff</h4>
                            <div className="days-and-experinces-div">
                                <p><i className="fa fa-clock"></i>4 Days</p>
                                <p><i className="fa fa-map-marker-alt"></i>7 Experiences</p>
                            </div>
                        </div>
                    </div>

                    <div className='BanffNew-carousel-indivisual-div trip-carousel-card'>
                        <div className="BanffNew-trip-img-div">
                            <img className="banff-carousel-trip-img" src={TripThree} alt='demo'></img>
                        </div>
                        <div className="trip-title-div">
                            <h4 className="trip-title">Winter Relaxation & Adventure</h4>
                            <div className="days-and-experinces-div">
                                <p><i className="fa fa-clock"></i>6 Days</p>
                                <p><i className="fa fa-map-marker-alt"></i>18 Experiences</p>
                            </div>
                        </div>
                    </div>

                    <div className='BanffNew-carousel-indivisual-div trip-carousel-card'>
                        <div className="BanffNew-trip-img-div">
                            <img className="banff-carousel-trip-img" src={TripFour} alt='demo'></img>
                        </div>
                        <div className="trip-title-div">
                            <h4 className="trip-title">Romantic Winter Getaway</h4>
                            <div className="days-and-experinces-div">
                                <p><i className="fa fa-clock"></i>5 Days</p>
                                <p><i className="fa fa-map-marker-alt"></i>14 Experiences</p>
                            </div>
                        </div>
                    </div>

                    <div className='BanffNew-carousel-indivisual-div trip-carousel-card'>
                        <div className="BanffNew-trip-img-div">
                            <img className="banff-carousel-trip-img" src={TripFive} alt='demo'></img>
                        </div>
                        <div className="trip-title-div">
                            <h4 className="trip-title">Luxery in Banff and Lake Louise</h4>
                            <div className="days-and-experinces-div">
                                <p><i className="fa fa-clock"></i>7 Days</p>
                                <p><i className="fa fa-map-marker-alt"></i>17 Experiences</p>
                            </div>
                        </div>
                    </div>

                    <div className='BanffNew-carousel-indivisual-div trip-carousel-card'>
                        <div className="BanffNew-trip-img-div">
                            <img className="banff-carousel-trip-img" src={TripSix} alt='demo'></img>
                        </div>
                        <div className="trip-title-div">
                            <h4 className="trip-title">Summer Foodie Getaway</h4>
                            <div className="days-and-experinces-div">
                                <p><i className="fa fa-clock"></i>7 Days</p>
                                <p><i className="fa fa-map-marker-alt"></i>24 Experiences</p>
                            </div>
                        </div>
                    </div>

                    <div className='BanffNew-carousel-indivisual-div trip-carousel-card'>
                        <div className="BanffNew-trip-img-div">
                            <img className="banff-carousel-trip-img" src={TripSeven} alt='demo'></img>
                        </div>
                        <div className="trip-title-div">
                            <h4 className="trip-title">Must See Banff & Lake Louise</h4>
                            <div className="days-and-experinces-div">
                                <p><i className="fa fa-clock"></i>7 Days</p>
                                <p><i className="fa fa-map-marker-alt"></i>37 Experiences</p>
                            </div>
                        </div>
                    </div>

                    <div className='BanffNew-carousel-indivisual-div trip-carousel-card'>
                        <div className="BanffNew-trip-img-div">
                            <img className="banff-carousel-trip-img" src={TripEight} alt='demo'></img>
                        </div>
                        <div className="trip-title-div">
                            <h4 className="trip-title">Ultimate Family Friendly Adventure</h4>
                            <div className="days-and-experinces-div">
                                <p><i className="fa fa-clock"></i>5 Days</p>
                                <p><i className="fa fa-map-marker-alt"></i>14 Experiences</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </>
        );
    } else if(activeButton === 'Outdoor') {
        return (
            <>
                <ul className='get-inspired-ul'>
                    <div>
                        <li><button className={activeButton === "Trip" ? "active" : ""} onClick={TripFunc}>Trip Ideas</button></li>
                        <li><button className={activeButton === "Outdoor" ? "active" : ""} onClick={OutdoorFunc}>Outdoor Adventures</button></li>
                        <li><button className={activeButton === "Eat" ? "active" : ""} onClick={EatFunc}>Eat & Drink</button></li>
                        <li><button className={activeButton === "Wellness" ? "active" : ""} onClick={WellnessFunc}>Wellness</button></li>
                    </div>
                </ul>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    minimumTouchDrag={20}
                    showDots={true}
                    arrows={true}
                    slidesToSlide={1}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    deviceType={'desktop'}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className='BanffNew-carousel-track'
                    >
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={OutdoorOne} alt='demo'></img>
                            <h3>Winter Hiking & Snowshoeing</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={OutdoorTwo} alt='demo'></img>
                            <h3>Sleigh Rides & Dog Sledding</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={OutdoorThree} alt='demo'></img>
                            <h3>Tours & Rentals</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={OutdoorFour} alt='demo'></img>
                            <h3>Ski & Snowboard</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={OutdoorFive} alt='demo'></img>
                            <h3>Hiking</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={OutdoorSix} alt='demo'></img>
                            <h3>Biking</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={OutdoorSeven} alt='demo'></img>
                            <h3>Paddling & Rafting</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={OutdoorEight} alt='demo'></img>
                            <h3>Horseback Riding</h3>
                        </div>
                    </div>
                </Carousel>
            </>
        );
    } else if(activeButton === 'Eat') {
        return (
            <>
                <ul className='get-inspired-ul'>
                    <div>
                        <li><button className={activeButton === "Trip" ? "active" : ""} onClick={TripFunc}>Trip Ideas</button></li>
                        <li><button className={activeButton === "Outdoor" ? "active" : ""} onClick={OutdoorFunc}>Outdoor Adventures</button></li>
                        <li><button className={activeButton === "Eat" ? "active" : ""} onClick={EatFunc}>Eat & Drink</button></li>
                        <li><button className={activeButton === "Wellness" ? "active" : ""} onClick={WellnessFunc}>Wellness</button></li>
                    </div>
                </ul>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    minimumTouchDrag={20}
                    showDots={true}
                    arrows={true}
                    slidesToSlide={1}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    deviceType={'desktop'}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className='BanffNew-carousel-track'
                    >
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={EatOne} alt='demo'></img>
                            <h3>Breweries & Distilleries</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={EatTwo} alt='demo'></img>
                            <h3>Scenic Restaurants</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={EatThree} alt='demo'></img>
                            <h3>Cafes & Bakeries</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={EatFour} alt='demo'></img>
                            <h3>Brunch Spots</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={EatFive} alt='demo'></img>
                            <h3>Quick Bites</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={EatSix} alt='demo'></img>
                            <h3>Outdoor Patios</h3>
                        </div>
                    </div>
                </Carousel>
            </>
        )
    } else if(activeButton === 'Wellness') {
        return (
            <>
                <ul className='get-inspired-ul'>
                    <div>
                        <li><button className={activeButton === "Trip" ? "active" : ""} onClick={TripFunc}>Trip Ideas</button></li>
                        <li><button className={activeButton === "Outdoor" ? "active" : ""} onClick={OutdoorFunc}>Outdoor Adventures</button></li>
                        <li><button className={activeButton === "Eat" ? "active" : ""} onClick={EatFunc}>Eat & Drink</button></li>
                        <li><button className={activeButton === "Wellness" ? "active" : ""} onClick={WellnessFunc}>Wellness</button></li>
                    </div>
                </ul>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    minimumTouchDrag={20}
                    showDots={true}
                    arrows={true}
                    slidesToSlide={1}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    deviceType={'desktop'}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className='BanffNew-carousel-track'
                    >
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={WellnessOne} alt='demo'></img>
                            <h3>Winter Hiking & Snowshoeing</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={WellnessTwo} alt='demo'></img>
                            <h3>Winter Hiking & Snowshoeing</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={WellnessThree} alt='demo'></img>
                            <h3>Winter Hiking & Snowshoeing</h3>
                        </div>
                    </div>
                    <div className='BanffNew-carousel-indivisual-div'>
                        <div className="BanffNew-img-div">
                            <img className="banff-carousel-img" src={WellnessFour} alt='demo'></img>
                            <h3>Winter Hiking & Snowshoeing</h3>
                        </div>
                    </div>
                </Carousel>
            </>
        )
    }
}