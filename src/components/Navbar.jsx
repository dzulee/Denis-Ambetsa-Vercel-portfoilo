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
    <div
      className="d-flex align-items-center animate-fade-in collapsed-navLinks"
      style={{
        position: 'fixed',
        top: '5.5rem',
        left: 0,
        width: '32%',
        maxWidth: '220px',
        height: 'calc(100vh - 7.5rem)',
        zIndex: 2147483647,
        backgroundColor: 'rgba(0, 0, 0, 0.98)',
        padding: '1.25rem',
        overflowY: 'auto',
        pointerEvents: 'auto'
      }}
    >
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
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top px-2 px-md-4">
      <div className="navbar-card container-fluid d-flex align-items-center justify-content-between">
        
        {/* MOBILE VIEW LOGIC */}
        <div className="d-lg-none d-flex align-items-center w-100">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Logo className="navbar-brand" />
            <button 
              className="navbar-toggler border-0" 
              onClick={() => setIsMobileOpen(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        {isMobileOpen && typeof document !== 'undefined' && createPortal(mobileMenu, document.body)}

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