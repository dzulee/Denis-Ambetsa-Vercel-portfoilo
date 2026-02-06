import React, { useState } from 'react';
import { Logo } from './Logo';
import '../css/navbar.css';
import { NavigationLinks } from './NavigationLinks';

export function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  shadow-sm" style={{
      position: 'sticky',
      zIndex: 2
    }}>
      <div className="d-flex w-100 px-3 px-md-5 align-items-center justify-content-between">
        
        {/* 1. Only show Logo and Toggle when collapsed */}
        {isCollapsed ? (
          <>
            <Logo className="navbar-brand" />
            <button 
              className="navbar-toggler border-0" 
              type="button" 
              onClick={() => setIsCollapsed(false)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </>
        ) : (
          /* 2. When OPEN: Show Back Arrow and Navigation Links instead of Logo/Hamburger */
          <div className="d-flex align-items-center w-100 animate-fade-in">
            <button 
              className="btn text-warning me-3 p-0" 
              onClick={() => setIsCollapsed(true)}
              style={{ fontSize: '1.5rem' }}
            >
              ← <span style={{ fontSize: '1rem' }}>Back</span>
            </button>
            
            <div className="flex-grow-1">
              <NavigationLinks 
                containerClass="d-flex gap-3 gap-md-4 list-unstyled mb-0 mb-lg-0 overflow-auto" 
                onLinkClick={() => setIsCollapsed(true)} // Close when a link is clicked
              />
            </div>
          </div>
        )}

        {/* 3. Desktop View: Standard bootstrap behavior for larger screens */}
        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
          <NavigationLinks containerClass="ms-auto d-flex gap-4 list-unstyled mb-0" />
        </div>
      </div>
    </nav>
  );
}