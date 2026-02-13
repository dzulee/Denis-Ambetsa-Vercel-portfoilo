import { NavHashLink } from "react-router-hash-link";
import '../css/navigation-links.css';
const navigationLinks = [
    {
    text:'Home',
    navigationTo:'/#Home'},
    {
    text:'About US',
     navigationTo:'/about#Navbar'},
     {
    text:'Projects',
     navigationTo:'/#featured-work'},
     {
    text:'Services',
     navigationTo:'/#services'},
     {
    text:'Contact US',
     navigationTo:'/#contact-section'
}, {
    text:'Blog',
     navigationTo:'/blog'
}
]
export function NavigationLinks({ containerClass = "", onLinkClick }) {
    return (
        <ul className={`list-unstyled ${containerClass}`}>
            {navigationLinks.map((link, index) => (
                <li className="nav-item" key={index} onClick={onLinkClick}>
                    <NavHashLink 
                        smooth 
                        to={link.navigationTo} 
                        // FIX: Add the class name here!
                        className="navigation-links" 
                    >
                        {link.text}
                    </NavHashLink>
                </li>
            ))}
        </ul>
    );
}