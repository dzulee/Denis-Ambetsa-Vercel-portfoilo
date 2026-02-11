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
export function NavigationLinks({ containerClass = "" }) {
    return (
        <ul className={`navigationLinks list-unstyled ${containerClass}`}>
            
            {navigationLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                    
                    <NavHashLink 
                        smooth 
                        to={link.navigationTo} 
                        
                        className={({ isActive }) => 
                            `navigation-links ${isActive ? 'active-link' : ''}`
                        }
                    >
                        {link.text}
                    </NavHashLink>
                </li>
            ))}
        </ul>
    );
}