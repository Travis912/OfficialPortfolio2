
import SpaceNav from "./spaceNav";
import PropTypes from 'prop-types';

export default function SpaceDestLayout({
  moonFunc,
  marsFunc,
  europaFunc,
  titanFunc,
  planet,
  description,
  distance,
  travelTime,
  btnSelected,
  imagePngSrc,
}) {
  return (
      <div className="destinationsOuter-div">
        <SpaceNav></SpaceNav>

        <main
          id="main"
          className="destinations-content-div grid-container grid-container--destination flow"
        >
          <h1 className="numbered-title">
            <span aria-hidden="true">01</span> PICK YOUR DESTINATION
          </h1>

          <img src={imagePngSrc} alt="the selected moon / planet"></img>

          <div className="destination-nav-div tab-list flex">
            <button
              className="destinationBtn uppercase ff-sans-cond fs-400 text-accent letter-spacing-2"
              data-visible={btnSelected}
              onClick={moonFunc}
            >
              Moon
            </button>
            <button
              className="destinationBtn uppercase ff-sans-cond fs-400 text-accent letter-spacing-2"
              data-visible={btnSelected}
              onClick={marsFunc}
            >
              Mars
            </button>
            <button
              className="destinationBtn uppercase ff-sans-cond fs-400 text-accent letter-spacing-2"
              data-visible={btnSelected}
              onClick={europaFunc}
            >
              Europa
            </button>
            <button
              className="destinationBtn uppercase ff-sans-cond fs-400 text-accent letter-spacing-2"
              data-visible={btnSelected}
              onClick={titanFunc}
            >
              Titan
            </button>
          </div>

          <article className="destinations-info flow">
            <h2 className="fs-800 uppercase ff-serif">{planet}</h2>

            <p>{description}</p>

            <div className="destination-meta flex">
              <div>
                <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                <p className=" ff-serif uppercase">{distance} KM</p>
              </div>

              <div>
                <h3 className="text-accent fs-200 uppercase">
                  Est. travel time
                </h3>
                <p className=" ff-serif uppercase">{travelTime}</p>
              </div>
            </div>
          </article>
        </main>
      </div>
  );
}

SpaceDestLayout.propTypes = {
  moonFunc: PropTypes.func.isRequired,
  marsFunc: PropTypes.func.isRequired,
  europaFunc: PropTypes.func.isRequired,
  titanFunc: PropTypes.func.isRequired,
  planet: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  travelTime: PropTypes.string.isRequired,
  btnSelected: PropTypes.bool.isRequired,
  imagePngSrc: PropTypes.string.isRequired,
};
