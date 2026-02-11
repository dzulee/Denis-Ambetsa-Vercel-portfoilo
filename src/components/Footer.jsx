import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/footer.css';
import { NavigationLinks } from './NavigationLinks';
import { SocialIcons } from './SocialMediaIcons';
import { ContactMap } from './ContactMap';

export function Footer() {
    return (
        <footer className="container-fluid footer py-5 bg-dark text-light position-relative" style={{ overflow: 'hidden' }}>
            <div className="container footer-container position-relative" style={{ zIndex: 1 }}>
                <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 gap-md-5">
                    
                    {/* Brand & Socials Section */}
                    <div className="p-2 text-center text-md-start">
                        <img src="/logo2.png" alt="logo" width="80" height="80" className="wg2l mb-2" />
                        <h4 className="textback fw-bold mb-3">We Don't Get 2 Lose</h4>
                        
                        <div className="mt-4">
                            <p className="small  mb-2">Follow me</p>
                            <SocialIcons limit={4} fromEnd={true} />
                        </div>
                    </div>
                    <ContactMap/>

                    {/* The Perpendicular Line (Vertical Divider) */}
                    {/* d-none d-md-block ensures it only shows on desktop where things are side-by-side */}
                    <span className="vr d-none d-md-block shadow-sm" style={{ alignSelf: 'stretch', width: '2px', opacity: 0.4, backgroundColor: '#ffc107' }}></span>

                    {/* Quick Links Section */}
                    <div className="p-2 footer-links min-w-200">
                        <p className="fw-bold text-warning mb-2 border-bottom border-warning border-opacity-25 pb-2">
                            Quick Web Links
                        </p>
                        <NavigationLinks containerClass="flex-column align-items-center align-items-start gap-1 " />
                    </div>
                    
                </div>
               <div className="mt-5 pt-3 border-top border-secondary border-opacity-25 text-center">
                    <p className="small  mb-0">
                        &copy; {new Date().getFullYear()} Dennis Ambetsa. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}