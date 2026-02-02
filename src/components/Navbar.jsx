import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'; 

export function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1030
    }}>
      <div className="d-flex  w-100 px-5">
        <NavLink className="navbar-brand fw-bold text-white" to="/">AMBETSA TECH</NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={() => setIsCollapsed(!isCollapsed)} data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <NavHashLink smooth className="nav-link text-white" to="/#home">Home</NavHashLink>
            </li>
            
            {/* NavLink for the standalone About page */}
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">About Me</NavLink>
            </li>

            {/* NavHashLink for sections on the Home page */}
            <li className="nav-item">
              <NavHashLink smooth className="nav-link text-white" to="/#services">
                Services
              </NavHashLink>
            </li>
            
            <li className="nav-item">
              <NavHashLink smooth className="nav-link text-white" to="/#featured-work">
                Projects
              </NavHashLink>
            </li>

            <li className="nav-item">
              <NavHashLink smooth className="nav-link text-white" to="/#contact-section">
                Contact
              </NavHashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}