import { NavHashLink } from "react-router-hash-link";
import '../css/navigation-links.css';
const navigationLinks = [
    {
    text:'HOME',
    navigationTo:'/#Hero'},
    {
    text:'ABOUT US',
     navigationTo:'/about'},
     {
    text:'PROJECTS',
     navigationTo:'/#featured-work'},
     {
    text:'SERVICES',
     navigationTo:'/#services'},
     {
    text:'CONTACT US',
     navigationTo:'/#contact-section'
}, {
    text:'BLOG',
     navigationTo:'/blog'
}
]
export function NavigationLinks({ containerClass = "" }) {
  return (
    <ul className={`navigationLinks list-unstyled ${containerClass}`}>
      {navigationLinks.map((link, index) => (
        <li className="nav-item" key={index}>
          <NavHashLink 
            smooth 
            to={link.navigationTo} 
            className="navigation-links"
          >
            {link.text}
          </NavHashLink>
        </li>
      ))}
    </ul>
  );
}