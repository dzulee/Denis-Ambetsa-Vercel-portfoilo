import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Logo } from './Logo';
import '../css/navbar.css' 
import { NavigationLinks } from './NavigationLinks';


export function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1030
    }}>
      <div className="d-flex  w-100 px-5">
        
        <Logo className="navbar-brand" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={() => setIsCollapsed(!isCollapsed)} data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          {/* Pass horizontal alignment class */}
          <NavigationLinks containerClass="ms-auto d-flex gap-4" />
        </div>
      </div>
    </nav>
  );
}