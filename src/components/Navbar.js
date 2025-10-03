import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Atharav</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#courses">Courses</a></li> {/* Added */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-btn">
        <a href="#contact" className="btn">Hire Me</a>
      </div>
    </nav>
  );
}

export default Navbar;
