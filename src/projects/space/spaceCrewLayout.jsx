
import SpaceNav from "./spaceNav";
import PropTypes from "prop-types";

export default function CrewLayout({
  pngSrc,
  crewTitle,
  crewName,
  btnSelected,
  description,
  douglasFunc,
  markFunc,
  victorFunc,
  anoFunc,
}) {
  return (
      <div className="crewOuter-div">
        <SpaceNav></SpaceNav>

        <main id="main" className="grid-container grid-container--crew flow">
          <h1 className="numbered-title">
            <span aria-hidden="true">02</span> MEET YOUR CREW
          </h1>

          <div className="flex dot-indicators">
            <button
              className="crewBtn"
              data-visible={btnSelected}
              onClick={douglasFunc}
            >
              <span className="sr-only">The commander</span>
            </button>
            <button
              className="crewBtn"
              data-visible={btnSelected}
              onClick={markFunc}
            >
              <span className="sr-only">The mission specialist</span>
            </button>
            <button
              className="crewBtn"
              data-visible={btnSelected}
              onClick={victorFunc}
            >
              <span className="sr-only">The pilot</span>
            </button>
            <button
              className="crewBtn"
              data-visible={btnSelected}
              onClick={anoFunc}
            >
              <span className="sr-only">The crew engineer</span>
            </button>
          </div>

          <article className="crew-details flow">
            <header className="flow flow--space-small">
              <h2 className="fs-600 ff-serif uppercase">
                <span>{crewTitle}</span>
              </h2>
              <p className="fs-700 ff-serif uppercase">{crewName}</p>
            </header>

            <p>{description}</p>
          </article>

          <img src={pngSrc} alt="the selected crew member"></img>
        </main>
      </div>
  );
}

CrewLayout.propTypes = {
  pngSrc: PropTypes.string.isRequired,
  crewTitle: PropTypes.string.isRequired,
  crewName: PropTypes.string.isRequired,
  btnSelected: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  douglasFunc: PropTypes.func.isRequired,
  markFunc: PropTypes.func.isRequired,
  victorFunc: PropTypes.func.isRequired,
  anoFunc: PropTypes.func.isRequired,
};
