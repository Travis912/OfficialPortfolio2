
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../styles/carousel.css';

/* Carousel component that displays a series of images in a sliding carousel format. */

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start from the first actual slide
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (!isTransitioning)
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setIsTransitioning(true);
    }, [isTransitioning]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setIsTransitioning(true);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount or currentIndex change
    }, [currentIndex, nextSlide]);

    useEffect(() => {
        if (isTransitioning) {
            const handleTransitionEnd = () => {
                setIsTransitioning(false);
                if (currentIndex === images.length + 1) {
                    setCurrentIndex(1); // Reset to the first actual slide
                } else if (currentIndex === 0) {
                    setCurrentIndex(images.length); // Reset to the last actual slide
                }
            };

            const track = document.querySelector('.carousel-track');
            track.addEventListener('transitionend', handleTransitionEnd);

            return () => {
                track.removeEventListener('transitionend', handleTransitionEnd);
            };
        }
    }, [currentIndex, images.length, isTransitioning]);

    const renderIndicators = () => {
        return images.map((_, index) => (
            <span
                key={index}
                className={`carousel-indicator ${index + 1 === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index + 1)}
            ></span>
        ));
    };

    return (
        <>
            <div className="carousel">
                <button onClick={prevSlide} className="carousel-button prev">‹</button>
                <div className="carousel-track" style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
                }}>
                    <div className="carousel-slide">
                        <a href={images[images.length - 1].link}>
                            <img src={images[images.length - 1].image} alt={`Slide ${images.length}`} />
                        </a>
                    </div>
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <a href={image.link}>
                                <img src={image.image} alt={`Slide ${index}`} />
                            </a>
                        </div>
                    ))}
                    <div className="carousel-slide">
                        <a href={images[0].link}>
                            <img src={images[0].image} alt="Slide 0" />
                        </a>
                    </div>
                    <div className="carousel-slide">
                        <a href={images[1].link}>
                            <img src={images[1].image} alt="Slide 1" />
                        </a>
                    </div>
                </div>
                <button onClick={nextSlide} className="carousel-button next">›</button>
            </div>
            <div className="carousel-indicators">
                {renderIndicators()}
            </div>
        </>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Carousel;