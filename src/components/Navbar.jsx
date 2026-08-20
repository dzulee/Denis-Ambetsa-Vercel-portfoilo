import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Logo } from './Logo';
import '../css/navbar.css';
import { NavigationLinks } from './NavigationLinks';

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileOpen]);

  const mobileMenu = (
    <div className="d-flex align-items-center animate-fade-in collapsed-navLinks">
      <button
        type="button"
        className="mobile-menu-back"
        aria-label="Close navigation menu"
        onClick={() => setIsMobileOpen(false)}
      >
        <span aria-hidden="true">&lt;-</span> <span>Back</span>
      </button>
      <div className="overflow-auto no-scrollbar py-2">
        <NavigationLinks 
          containerClass="gap-3 mb-0" 
          onLinkClick={() => setIsMobileOpen(false)} 
        />
      </div>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top px-2 px-md-4">
      <div className="navbar-card container-fluid d-flex align-items-center justify-content-between">
        
        {/* MOBILE VIEW LOGIC */}
        <div className="d-lg-none d-flex align-items-center w-100">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Logo className="navbar-brand" />
            <button 
              type="button"
              className="navbar-toggler border-0" 
              aria-label="Open navigation menu"
              onClick={() => setIsMobileOpen(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        {isMobileOpen && typeof document !== 'undefined' && createPortal(mobileMenu, document.body)}

{/* DESKTOP VIEW LOGIC */}
<div className="d-none d-lg-flex align-items-center w-100">
  <Logo className="navbar-brand me-4" />
  
  <div className="collapse navbar-collapse d-flex flex-grow-1" id="navbarNav">
    <NavigationLinks 
      limit={8}
      fromEnd={false} 
      containerClass="d-flex align-items-center gap-4 mb-0 w-100 justify-content-center ms-lg-5 ps-lg-5" 
    />
  </div>
</div>
</div>
    </nav>
  );
}