
import PropTypes from 'prop-types';

export default function FtStoryLayout({
    header,
    text,
    imgSrc,
    imgAlt
})
    {
        return (
            <div className="ft-story-layout">

                <div className="ft-story-layout__text-container">
                    <h6>Featured Stories</h6>
                    <h2 className="ft-story-layout__header">{header}</h2>
                    <p className="ft-story-layout__text">{text}</p>
                    <div className="ft-story-layout__buttons">
                        <button>Read More</button>
                        <button>See All Stories</button>
                    </div>
                </div>

                <div className="ft-story-layout__img-container">
                    <img className="ft-story-layout__img" src={imgSrc} alt={imgAlt} />
                </div>

            </div>
        );
    }

    FtStoryLayout.propTypes = {
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        imgAlt: PropTypes.string.isRequired,
    };