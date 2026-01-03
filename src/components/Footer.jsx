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
            <main className="flex-shrink-0">
                <div className="container text-center">
                    <h1 className="mt-5">Get In Touch</h1>
                    <p className="lead">The dedication and the strength to any work will be given with integrity.</p>
                </div>
            </main>

            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <div className="text-muted d-flex flex-column flex-md-row justify-content-center align-items-center mb-3 gap-5">
                        <div>
                            {/* Fixed image path to use relative import or public folder path */}
                            <img src="/logo2.png" alt="logo" width="80" height="80" className="mx-2" />
                        </div>
                        <ul className="list-unstyled text-center text-md-start">
                            <li>
                                <Link to="/" className="text-decoration-none">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-decoration-none">About Me</Link>
                            </li>
                            {/* NavHashLink allows cross-page smooth scrolling */}
                            <li>
                                <NavHashLink smooth to="/#services" className="text-decoration-none text-muted">Services</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink smooth to="/#featured-work" className="text-decoration-none text-muted">Projects</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink smooth to="/#contact-section" className="text-decoration-none text-muted">Contact us</NavHashLink>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <ul className="d-flex justify-content-center list-unstyled gap-3 flex-wrap">
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
            </footer>
        </div>
    );
}