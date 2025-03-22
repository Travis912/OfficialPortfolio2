
import './space.css';
import { Link } from "react-router-dom";
import SpaceNav from "./spaceNav";

export default function Space() {
  return (
      <div className="spaceOuter-div">
        <SpaceNav></SpaceNav>
        <main id="main" className="grid-container grid-container--home">
          <div>
            <h1 className="text-accent uppercase fs-500 ff-sans-cond letter-spacing-1">
              So, you want to travel to
              <span className="fs-900 ff-serif text-white d-block">Space</span>
            </h1>
            <p>
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <Link
              to="/spaceDestinations"
              className="large-button uppercase ff-serif text-dark bg-white"
            >
              Explore
            </Link>
          </div>
        </main>
      </div>
  );
}
