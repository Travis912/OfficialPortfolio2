import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0});
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.07; // 7dvh equivalent

    if (scrollPosition > threshold) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <nav className="navbar" style={{ opacity: opacity }}>
      <div className='nav-content'>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/projects" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>Work</NavLink>
          <NavLink to="/resume" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </div>
        <div className="navbar-toggle" style={{ opacity: opacity }} aria-expanded={isOpen} onClick={toggleMenu}>
          <span className="Homebar"></span>
          <span className="Homebar"></span>
          <span className="Homebar"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
