
import GetInspiredLayout from './GetInspiredLayout';
import PropTypes from 'prop-types';
import { useState } from 'react';

/* Trip Ideas Imgaes */
import TripOne from "./tripIdeasOne.jpg";
import TripTwo from "./tripIdeasTwo.jpg";
import TripThree from "./tripIdeasThree.jpg";
import TripFour from "./tripIdeasFour.jpg";

/* Outdoor images */
import OutdoorOne from "./outdoorOne.jpg";
import OutdoorTwo from "./outdoorTwo.jpg";
import OutdoorThree from "./outdoorThree.jpg";
import OutdoorFour from "./outdoorFour.jpg";

/* Eat images */
import EatOne from "./eatOne.jpg";
import EatTwo from "./eatTwo.jpg";
import EatThree from "./eatThree.jpg";
import EatFour from "./eatFour.jpg";

/* Wellness images */
import WellnessOne from "./wellnessOne.jpg";
import WellnessTwo from "./wellnessTwo.jpg";
import WellnessThree from "./wellnessThree.jpg";
import WellnessFour from "./wellnessFour.jpg";

export default function GetInspiredComp() {
    const [topic, setTopic] = useState("Trip");
    const [activeButton, setActiveButton] = useState("Trip");

    function TripFunc() {
        setTopic("Trip");
        setActiveButton("Trip");
    }

    function OutdoorFunc() {
        setTopic("Outdoor");
        setActiveButton("Outdoor");
    }

    function EatFunc() {
        setTopic("Eat");
        setActiveButton("Eat");
    }

    function WellnessFunc() {
        setTopic("Wellness");
        setActiveButton("Wellness");
    }

    if (topic === "Trip") {
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
            <GetInspiredLayout
                tripHeading1='Winter Escape in Canadian Rockies'
                imgSrc1 = {TripOne}
                days1 = "7 Days"
                exp1= "14 Experiences"
                tripHeading2 = "Powder Chasing in Banff National Park"
                imgSrc2 = {TripTwo}
                days2 = "4 Days"
                exp2= "7 Experiences"
                tripHeading3 = "Hiking in the Canadian Rockies"
                imgSrc3 =  {TripThree}
                days3 = "6 Days"
                exp3= "18 Experiences"
                tripHeading4 = "Camping in Banff National Park"
                imgSrc4 = {TripFour}
                days4 = "5 Days"
                exp4= "14 Experiences"
            ></GetInspiredLayout>
            </>
        );
    } else if (topic === "Outdoor") {
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
            <GetInspiredLayout
                heading1 = "Winter Hiking & Snowshoeing"
                imgSrc1 = {OutdoorOne}
                heading2 = "Sleigh Rides & Dog Sledding"
                imgSrc2= {OutdoorTwo}
                heading3="Tours & Rentals"
                imgSrc3= {OutdoorThree}
                heading4="Ski & Snowboard"
                imgSrc4= {OutdoorFour}
            ></GetInspiredLayout>
            </>
        );
    } else if (topic === "Eat") {
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
            <GetInspiredLayout
                heading1 = "Breweries & Distilleries"
                imgSrc1 = {EatOne}
                heading2 = "Scenic Resturaunts"
                imgSrc2= {EatTwo}
                heading3="Cafe & Bakeries"
                imgSrc3= {EatThree}
                heading4="Brunch Spots"
                imgSrc4= {EatFour}
            ></GetInspiredLayout>
            </>
        );
    } else if (topic === "Wellness") {
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
            <GetInspiredLayout
                heading1 = "Banff Hot Springs"
                imgSrc1 = {WellnessOne}
                heading2 = "Sleigh Rides & Dog Sledding"
                imgSrc2= {WellnessTwo}
                heading3="Spa, Treatments & Healing"
                imgSrc3= {WellnessThree}
                heading4="Fitness"
                imgSrc4= {WellnessFour}
            ></GetInspiredLayout>
            </>
        );
    }
}

GetInspiredComp.propTypes = {
    topic: PropTypes.string.isRequired,
    TripOne: PropTypes.string.isRequired,
    TripTwo: PropTypes.string.isRequired,
    TripThree: PropTypes.string.isRequired,
    TripFour: PropTypes.string.isRequired,
};