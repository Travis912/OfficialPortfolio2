
import SpaceNav from "./spaceNav";
import PropTypes from "prop-types";

export default function SpaceTechLayout({
  imageSrc,
  imageSrc2,
  techTitle,
  btnSelected,
  description,
  oneFunc,
  twoFunc,
  threeFunc,
}) {
  return (
      <div className="technologyOuter-div">
        <SpaceNav></SpaceNav>
        <main
          id="main"
          className=" grid-container grid-container--technology flow"
        >
          <h1 className="numbered-title">
            <span aria-hidden="true">03</span> SPACE LAUNCH 101
          </h1>
          <div className="tech-content">
            <div className="flex numbered-nav">
              <button
                className="techBtn"
                data-visible={btnSelected}
                onClick={oneFunc}
              >
                1<span className="sr-only">Launch vehicle</span>
              </button>
              <button
                className="techBtn"
                data-visible={btnSelected}
                onClick={twoFunc}
              >
                2<span className="sr-only">The mission specialist</span>
              </button>
              <button
                className="techBtn"
                data-visible={btnSelected}
                onClick={threeFunc}
              >
                3<span className="sr-only">The pilot</span>
              </button>
            </div>
            <article className="technology-details flow">
              <header className="flow flow--space-small">
                <h2 className="fs-600 ff-serif uppercase">
                  <span className="text-accent">The teminology...</span>
                </h2>
                <p className="fs-700 ff-serif uppercase">{techTitle}</p>
              </header>

              <p>{description}</p>
            </article>
          </div>

          <img
            className="portraitImage"
            src={imageSrc}
            alt="space equipment"
          ></img>
          <img
            className="landscapeImage"
            src={imageSrc2}
            alt="space equipment"
          ></img>
        </main>
      </div>
  );
}

SpaceTechLayout.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageSrc2: PropTypes.string.isRequired,
  techTitle: PropTypes.string.isRequired,
  btnSelected: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  oneFunc: PropTypes.func.isRequired,
  twoFunc: PropTypes.func.isRequired,
  threeFunc: PropTypes.func.isRequired,
};
