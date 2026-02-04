import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'; // Added this
import youtubeIcon from '../assets/youtube-brands-solid-full.svg';
import twitterIcon from '../assets/x-twitter-brands-solid-full.svg';
import facebookIcon from '../assets/facebook-brands-solid-full.svg';
import discordkIcon from '../assets/discord-brands-solid-full.svg';
import whatsappIcon from '../assets/whatsapp-brands-solid-full.svg';

export function Footer() {
    return (
        <div>
            

            <footer className="footer mt-auto py-3 position-relative" style={{ overflow: 'hidden', backgroundColor: '#d0d0d0' }}>
                {/* Animated Background Layer */}
                <div className="rotating-bg-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
                    <div className="rotating-bg-image"></div>
                </div>
                <div className="position-relative" style={{ zIndex: 1, right: -100 }}>
                    <div className="text-muted d-flex justify-content-center row-cols-3 row-cols-md-3 align-items-center gap-5">
                        <div>
                            {/* Fixed image path to use relative import or public folder path */}
                            <img src="/logo2.png" alt="logo" width="80" height="80" className="mx-2" />
                            <h4 className="fw-bold text-back">WE DONT GET 2 LOSE</h4>
                        </div>
                        <div>
                        <ul className="list-unstyled text-center text-md-start">
                            {/* Change this line */}
                            <li>
                                <NavHashLink smooth to="/#Hero" className="text-decoration-none text-dark">Home</NavHashLink>
                            </li>
                            <li>
                                <Link to="/about" className="text-decoration-none text-dark">About Me</Link>
                            </li>
                            {/* NavHashLink allows cross-page smooth scrolling */}
                            <li>
                                <NavHashLink smooth to="/#services" className="text-decoration-none text-dark">Services</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink smooth to="/#featured-work" className="text-decoration-none text-dark">Projects</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink smooth to="/#contact-section" className="text-decoration-none text-dark">Contact us</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink smooth to="/blog" className="text-decoration-none text-dark">Blog</NavHashLink>
                            </li>
                        </ul>
                    </div>
                    <div>

                    {/* Social Media Icons */}
                    <ul className="d-flex justify-content-space-around list-unstyled gap-3 flex-wrap">
                        <li>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                <img src={youtubeIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="YouTube" width="50" height="50" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img src={twitterIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="Twitter" width="50" height="50" />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebookIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="Facebook" width="50" height="50" />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com" target="_blank" rel="noreferrer">
                                <img src={discordkIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="Discord" width="50" height="50" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/254799964580" target="_blank" rel="noreferrer">
                                <img src={whatsappIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="WhatsApp" width="50" height="50" />
                            </a>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}