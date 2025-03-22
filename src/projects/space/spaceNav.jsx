import { NavLink, Outlet } from "react-router-dom";
import spaceLogo from "../space/SpaceAssets/shared/logo.svg";
import { useState } from "react";
import './space.css';

export default function SpaceNav() {
  const [spaceNavOpen, setSpaceNavOpen] = useState(false);

  function toggleSpaceNav() {
    setSpaceNavOpen(!spaceNavOpen);
  }

  return (
    <>
      <header className="spaceNav">
        <div className="logo-div">
          <img src={spaceLogo} alt="space logo" className="logo"></img>
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="space-navigation"
          aria-expanded={spaceNavOpen}
          onClick={toggleSpaceNav}
        >
          <span className="sr-only">Menu</span>
        </button>
        <nav
          id="space-navigation"
          className="underline-indicators space-navigation flex"
          data-visible={spaceNavOpen}
        >
          <NavLink
            className="spaceNav-link text-white uppercase letter-spacing-2 ff-sans-cond"
            to="/space"
            end
          >
            <span aria-hidden="true">00</span>Home
          </NavLink>
          <NavLink
            className="spaceNav-link text-white uppercase letter-spacing-2 ff-sans-cond"
            to="/spaceDestinations"
          >
            <span aria-hidden="true">01</span>Destinations
          </NavLink>
          <NavLink
            className="spaceNav-link text-white uppercase letter-spacing-2 ff-sans-cond"
            to="/theCrew"
          >
            <span aria-hidden="true">02</span>The Crew
          </NavLink>
          <NavLink
            className="spaceNav-link text-white uppercase letter-spacing-2 ff-sans-cond"
            to="/technology"
          >
            <span aria-hidden="true">03</span>Technology
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
