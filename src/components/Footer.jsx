import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/footer.css';
import { NavigationLinks } from './NavigationLinks';
import { SocialIcons } from './SocialMediaIcons';
import { ContactMap } from './ContactMap';

export function Footer() {
    return (
        <footer className="container-fluid footer text-light position-relative">
            <div className="container footer-container position-relative">
                <div className="footer-grid">
                    
                    {/* Brand & Socials Section */}
                    <div className="footer-brand text-center text-md-start">
                        <img src="/logo2.png" alt="Ambetsa Tech logo" width="80" height="80" className="wg2l mb-2" />
                        <p className="footer-eyebrow">Ambetsa Tech</p>
                        <h2 className="textback">We Don&apos;t Get 2 Lose</h2>
                        <p className="footer-tagline">Clear strategy. Better technology. Measurable progress.</p>
                        
                        <div className="mt-4">
                            <p className="footer-label mb-2">Follow along</p>
                            <SocialIcons limit={4} fromEnd={true} />
                        </div>
                    </div>
                    <div className="footer-map"><ContactMap/></div>

                    {/* The Perpendicular Line (Vertical Divider) */}
                    {/* d-none d-md-block ensures it only shows on desktop where things are side-by-side */}
                    <div className="footer-links">
                        <p className="footer-label">Explore</p>
                        <NavigationLinks isFooter={true} containerClass="flex-column align-items-center align-items-start gap-1" />
                    </div>
                    
                </div>
            <div className="footer-bottom">
                <p>
                        &copy; {new Date().getFullYear()} Denis Ambetsa. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}