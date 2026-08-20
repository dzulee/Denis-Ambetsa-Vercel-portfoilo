import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import '../css/navigation-links.css';

const navigationLinks = [
  { text: 'Home', navigationTo: '/#Hero', id: 'Hero' },
  { text: 'Projects', navigationTo: '/#featured-work', id: 'featured-work' },
  { text: 'About Us', navigationTo: '/about#about_us', id: 'about_us' },
  { text: 'Pricing', navigationTo: '/#pricing', id: 'pricing' },
  { text: 'Why Us', navigationTo: '/#why-us', id: 'why-us' },
  { text: 'Services', navigationTo: '/#services', id: 'services' },
  { text: 'Contact US', navigationTo: '/#contact-section', id: 'contact-section' },
  { text: 'Blog', navigationTo: '/blog', id: 'blog' }
];

export function NavigationLinks({ 
  containerClass = "", 
  onLinkClick, 
  limit, 
  fromEnd = false,
  isFooter = false 
}) {
  const [activeId, setActiveId] = useState("Hero");

  const navigation = limit 
    ? (fromEnd ? navigationLinks.slice(-limit) : navigationLinks.slice(0, limit)) 
    : navigationLinks;

  // Track active section as user scrolls
  useEffect(() => {
    if (isFooter) return; // Only track active state for Navbar

    const sectionIds = navigationLinks.map(link => link.id).filter(Boolean);
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" } // Highlights section when in top-middle of screen
    );

    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, [isFooter]);

  const handleScroll = (el, linkTo) => {
    if (linkTo === '/#Hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: el.offsetTop - 110, behavior: 'smooth' });
    }
  };

  return (
    <ul className={`list-unstyled ${containerClass}`}>
      {navigation.map((link, index) => {
        const isContactBtn = link.text === 'Contact US' && !isFooter;
        const isCurrentActive = activeId === link.id && !isFooter;

        return (
          <li 
            className={`nav-item ${index === navigation.length - 1 ? 'ms-auto' : ''}`} 
            key={index} 
            onClick={onLinkClick}
          >
            <NavHashLink 
              smooth 
              to={link.navigationTo} 
              scroll={el => handleScroll(el, link.navigationTo)}
              className={`navigation-links ${isContactBtn ? 'nav-btn-contact' : ''} ${isCurrentActive ? 'active-link' : ''}`}
            >
              {link.text}
            </NavHashLink>
          </li>
        );
      })}
    </ul>
  );
}