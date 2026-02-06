import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/footer.css';
import { NavigationLinks } from './NavigationLinks';
import youtubeIcon from '../assets/youtube-brands-solid-full.svg';
import XIcon from '../assets/x-twitter-brands-solid-full.svg';
import facebookIcon from '../assets/facebook-brands-solid-full.svg';
import discordkIcon from '../assets/discord-brands-solid-full.svg';
import whatsappIcon from '../assets/whatsapp-brands-solid-full.svg';


export function Footer() {
    return (
        <div>
            

            <footer className="container-fluid footer mt-auto py-3 position-relative" style={{ overflow: 'hidden', backgroundColor: '#d0d0d0' }}>
                {/* Animated Background Layer */}
                <div className="rotating-bg-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
                    <div className="rotating-bg-image"></div>
                </div>
                <div className="footer-container position-relative" style={{ zIndex: 1, right:'-100px' }}>
                    <div className="footer-item text-muted d-flex justify-content-center row-cols-3 row-cols-md-3 align-items-center gap-5">
                        <div>
                            {/* Fixed image path to use relative import or public folder path */}
                            <img src="/logo2.png" alt="logo" width="80" height="80" className="wg2l mx-2" />
                            <h4 className="textback">WE DONT GET 2 LOSE</h4>
                        </div>
                        <div className='footer-links'>
                            {/* Pass vertical stacking class */}
                            <NavigationLinks containerClass="flex-column align-items-center text-center gap-2" />
                        </div>
                        <div>
                        {/* Social Media Icons */}
                        <div className='social-icons'>
                        <ul className="d-flex justify-content-space-around list-unstyled gap-2 flex-wrap">
                            <li>
                                <a href="https://www.youtube.com/@dennisambetsa1588" target="_blank" rel="noreferrer">
                                    <img src={youtubeIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="YouTube" style={{color:'red'}}  />
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/ambetsa_dennis" target="_blank" rel="noreferrer">
                                    <img src={XIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="Twitter"  />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=61587463236155" target="_blank" rel="noreferrer">
                                    <img src={facebookIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="Facebook"  />
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.com/users/1347999417046663262" target="_blank" rel="noreferrer">
                                    <img src={discordkIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="Discord"  />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/254799964580" target="_blank" rel="noreferrer">
                                    <img src={whatsappIcon} className="img-fluid border rounded-3 shadow-sm p-2 bg-white" alt="WhatsApp" />
                                </a>
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}