
import PropTypes from 'prop-types';
import './banff.css';
import { useEffect, useState } from 'react';


export default function BanffHeaderLayout({
    headerNumber,
    season
    }){

        const [key, setKey] = useState(0);
        const [fadeInClassOne, setFadeInClassOne] = useState('')
        const [fadeInClassTwo, setFadeInClassTwo] = useState('')
        const [fadeInClassThree, setFadeInClassThree] = useState('')

        useEffect(() => {
            setKey(prevKey => prevKey + 1);

            const timer1 = setTimeout(() => {
                setFadeInClassOne('banffFadeIn');
            }, 1000);

            const timer2 = setTimeout(() => {
                setFadeInClassTwo('banffFadeIn');
            }, 1500);

            const timer3 = setTimeout(() => {
                setFadeInClassThree('banffFadeIn');
            }, 2000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }, [headerNumber, season]);

        useEffect(() => {
            setFadeInClassOne('');
            setFadeInClassTwo('');
            setFadeInClassThree('');
        }, [headerNumber, season]);

    const RenderBanffContent = () => {
        if (season === "Winter" && headerNumber === 1 ) {
            return (
                <div className="banffHeaderLayout banffW1">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Snowy Activities</h1>
                        <button className={`banffHeader-btn-1 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Find Winter Adventure</button>
                        <button className={`banffHeader-btn-2 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Try Cross-Country Skiing</button>
                        <button className={`banffHeader-btn-3 ${fadeInClassThree}`}><i className='fas fa-bullseye'></i>Explore The Trails By Dog Sled</button>
                    </div>
                </div>
            );
        } else if (season === "Winter" && headerNumber === 2 ) {
            return (
                <div className="banffHeaderLayout banffW2">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Hit the Slopes</h1>
                        <button className={`banffHeader-btn-4 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Weather and Snow Reports</button>
                        <button className={`banffHeader-btn-2 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Unwind With Apres Ski</button>
                        <button className={`banffHeader-btn-5 ${fadeInClassThree}`}><i className='fas fa-bullseye'></i>Ski the Big 3 Resorts</button>
                    </div>
                </div>
            );
        } else if (season === "Winter" && headerNumber === 3 ) {
            return (
                <div className="banffHeaderLayout banffW3">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Get Cozy</h1>
                        <button className={`banffHeader-btn-6 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Stay in a Cozy Cabin</button>
                        <button className={`banffHeader-btn-1 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Try the Hot Chocolate Trail</button>
                        <button className={`banffHeader-btn-3 ${fadeInClassThree}`}><i className='fas fa-bullseye'></i>Explore Winter Experiences</button>
                    </div>
                </div>
            );
        } else if (season === "Spring" && headerNumber === 1 ) {
            return (
                <div className="banffHeaderLayout banffSp1">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Rest and Relax</h1>
                        <button className={`banffHeader-btn-1 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Discover Wellness</button>
                        <button className={`banffHeader-btn-3 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Soak in Hot Springs</button>
                    </div>
                </div>
            );
        } else if (season === "Spring" && headerNumber === 2 ) {
            return (
                <div className="banffHeaderLayout banffSp2">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Discover Local Wildlife</h1>
                        <button className={`banffHeader-btn-5 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Guided Wildlife Tour</button>
                        <button className={`banffHeader-btn-2 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Wildlife of Banff National Park</button>
                    </div>
                </div>
            );
        } else if (season === "Spring" && headerNumber === 3 ) {
            return (
                <div className="banffHeaderLayout banffSp3">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Breathtaking Waterfalls</h1>
                        <button className={`banffHeader-btn-6 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Explore Johnston Canyon</button>
                        <button className={`banffHeader-btn-5 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Waterfall Hikes</button>
                        <button className={`banffHeader-btn-7 ${fadeInClassThree}`}><i className='fas fa-bullseye'></i>Family Adventure</button>
                    </div>
                </div>
            );
        } else if (season === "Summer" && headerNumber === 1 ) {
            return (
                <div className="banffHeaderLayout banffSu1">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Visit Lake Louside</h1>
                        <button className={`banffHeader-btn-1 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Hike to Historic Tea Houses</button>
                        <button className={`banffHeader-btn-2 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>More About the Lake</button>
                        <button className={`banffHeader-btn-3 ${fadeInClassThree}`}><i className='fas fa-bullseye'></i>Paddle on Lake Louise</button>
                    </div>
                </div>
            );
        } else if (season === "Summer" && headerNumber === 2 ) {
            return (
                <div className="banffHeaderLayout banffSu2">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Unforgettable Hikes</h1>
                        <button className={`banffHeader-btn-3 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Bucket List Hikes in Banff National Park</button>
                        <button className={`banffHeader-btn-2 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Hike With a Local Guide</button>
                    </div>
                </div>
            );
        } else if (season === "Summer" && headerNumber === 3 ) {
            return (
                <div className="banffHeaderLayout banffSu3">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Take to the Water</h1>
                        <button className={`banffHeader-btn-5 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Cruise Lake Minnewanka</button>
                        <button className={`banffHeader-btn-4 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Explore Water Activities</button>
                    </div>
                </div>
            );
        } else if (season === "Fall" && headerNumber === 1 ) {
            return (
                <div className="banffHeaderLayout banffF1">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Experience the Fall Colours</h1>
                        <button className={`banffHeader-btn-5 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Explore Trails by Horseback</button>
                        <button className={`banffHeader-btn-2 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Hike Through a Forest of Gold</button>
                    </div>
                </div>
            );
        } else if (season === "Fall" && headerNumber === 2 ) {
            return (
                <div className="banffHeaderLayout banffF2">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">See Vermilion Lakes</h1>
                        <button className={`banffHeader-btn-4 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Iconic Sunrise Photos</button>
                        <button className={`banffHeader-btn-7 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Paddle on the Lakes</button>
                    </div>
                </div>
            );
        } else if (season === "Fall" && headerNumber === 3 ) {
            return (
                <div className="banffHeaderLayout banffF3">
                    <div className='banffHeaderLayout-content-div'>
                        <h1 key={key} className="banffFall-in">Jaw-Dropping Dining</h1>
                        <button className={`banffHeader-btn-1 ${fadeInClassOne}`}><i className='fas fa-bullseye'></i>Dining in the Mountains</button>
                        <button className={`banffHeader-btn-3 ${fadeInClassTwo}`}><i className='fas fa-bullseye'></i>Eat at Scenic Restaurants</button>
                        <button className={`banffHeader-btn-7 ${fadeInClassThree}`}><i className='fas fa-bullseye'></i>Discover Taste for Adventure</button>
                    </div>
                </div>
            );
        }
    };
    return RenderBanffContent();
}

BanffHeaderLayout.propTypes = {
    headerNumber: PropTypes.number.isRequired,
    season: PropTypes.string.isRequired,
};
