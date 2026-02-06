import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './Navbar';
import { Logo } from './Logo';
import '../index.css';
import githubIcon from '../assets/github-brands-solid-full.svg';
import linkedinIcon from '../assets/linkedin-in-brands-solid-full.svg';
import mailIcon from '../assets/envelope-solid-full.svg';
import XIcon from '../assets/x-twitter-brands-solid-full.svg';

export function Heroes() {
    const el = useRef(null);

    useEffect(() => {
        if (el.current) {
            const typed = new Typed(el.current, {
                strings: ['Full Stack Developer', 'UI/UX Designer', 'Data Analyst', 'Project Manager', 'Consultant'],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
            return () => typed.destroy();
        }
    }, []);

    return (
        <div className="hero-master-container" id="Hero">
           <div >
            <Navbar />
            </div>
            {/* Main Content Wrapper */}
            <div className="container-fluid d-flex align-items-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
                <div className="row w-100 justify-content-center justify-content-md-start px-md-5">
                    
                    {/* Glassmorphism Hero Box */}
                    <div className="col-11 col-md-10 col-lg-8 hero-content-box p-4 p-md-5">
                        <h2 className="display-3 fw-bold text-white mb-3">
                            Professional <br className="d-md-none" />
                            <span className="typed-text" style={{ color: '#00CED1', fontSize: '2.5rem' }} ref={el}></span>
                        </h2>
                        
                        <div className="col-12 col-xl-10">
                            <div className="fs-5 mb-4 text-light hero-subtext">
                                Hi, welcome to <span className="d-inline-block mx-1"><Logo /></span> 
                                we specialize in building high-quality responsive websites and data-driven solutions. 
                                Let's transform your vision into reality.
                            </div>
                            
                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                                <a href="#featured-work" className="btn btn-info btn-lg px-4 fw-bold hero-btn-primary">
                                    View My Work
                                </a>
                                <a href="#contact-section" className="btn btn-outline-light btn-lg px-4 hero-btn-secondary">
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        {/* Social Icons Integrated into the Box */}
                        <div className="social-icons-wrapper mt-5 pt-4">
                            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                                <a href="https://x.com/ambetsa_dennis" className="social-link"><img src={XIcon} className="social-icon-img" alt="Mail"/></a>
                                <a href="https://github.com/dzulee" className="social-link"><img src={githubIcon} className="social-icon-img" alt="GitHub"/></a>
                                <a href="https://linkedin.com/in/dennis-ambetsa" className="social-link"><img src={linkedinIcon} className="social-icon-img" alt="LinkedIn"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}