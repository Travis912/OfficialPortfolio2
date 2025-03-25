import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {

const [isOpen, setIsOpen] = useState(false);
const [isTop, setIsTop] = useState(true);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const toTop = () => {
  window.scrollTo({ top: 0 });
};

useEffect(() => {
    const handleScroll = () => {
        setIsTop(window.scrollY < 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <nav className={`navbar ${isTop ? 'transparent' : ''}`}>
      <div className='nav-content'>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => {toggleMenu(); toTop();}} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/projects" onClick={() => {toggleMenu(); toTop();}} className={({ isActive }) => isActive ? "active" : ""}>Work</NavLink>
          <NavLink to="/resume" onClick={() => {toggleMenu(); toTop();}} className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink>
          <NavLink to="/contact" onClick={() => {toggleMenu(); toTop();}} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </div>
        <div className="navbar-toggle" aria-expanded={isOpen} onClick={toggleMenu}>
          <span className="Homebar"></span>
          <span className="Homebar"></span>
          <span className="Homebar"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
