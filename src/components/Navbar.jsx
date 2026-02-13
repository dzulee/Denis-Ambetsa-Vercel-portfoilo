import React, { useState } from 'react';
import { Logo } from './Logo';
import '../css/navbar.css';
import { NavigationLinks } from './NavigationLinks';

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top px-2 px-md-4">
      <div className="navbar-card container-fluid d-flex align-items-center justify-content-between">
        
        {/* MOBILE VIEW LOGIC */}
        <div className="d-lg-none d-flex align-items-center w-100">
          {!isMobileOpen ? (
            <div className="d-flex justify-content-between w-100 align-items-center">
              <Logo className="navbar-brand" />
              <button 
                className="navbar-toggler border-0" 
                onClick={() => setIsMobileOpen(true)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center w-100 animate-fade-in collapsed-navLinks">
              <button 
                className="btn text-warning me-3 p-0" 
                onClick={() => setIsMobileOpen(false)}
              >
                ← <span className="small">Back</span>
              </button>
              <div className="overflow-auto no-scrollbar py-2">
                <NavigationLinks 
                  containerClass="gap-3 mb-0" 
                  onLinkClick={() => setIsMobileOpen(false)} 
                />
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP VIEW LOGIC */}
        <div className="d-none d-lg-flex justify-content-between align-items-center w-100 ">
          <Logo className="navbar-brand" />
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav" style={{textDecoration:"none",}}>
            <NavigationLinks containerClass="d-flex gap-4 mb-0" />
          </div>
        </div>
      </div>
    </nav>
  );
}