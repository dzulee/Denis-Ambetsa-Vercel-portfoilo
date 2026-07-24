import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './Navbar';
import { Logo } from './Logo';
import '../index.css';
import { SocialIcons } from './SocialMediaIcons';

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
        <div className="hero-master-container" id="Hero" style={{ minHeight: 'auto', marginTop: '3rem' }}>
            {/* Main Content Wrapper */}
            <div className="container-fluid d-flex align-items-start hero-top-gap" style={{ minHeight: 'auto', position: 'relative', zIndex: 2, paddingTop: '0', paddingBottom: '0', marginTop: '0' }}>
                <div className="row w-100 justify-content-center justify-content-md-start px-1 px-md-2 align-items-start" style={{ marginTop: '0' }}>
                    
                    {/* Glassmorphism Hero Box */}
                    <div className="col-11 col-md-10 col-lg-8 hero-content-box p-2 p-md-3" style={{ marginTop: '1.1rem', paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
                        <h2 className="display-6 fw-bold text-white mb-3">
                            Professional <br className="d-md-none" />
                            <span className="typed-text" style={{ color: '#00CED1', fontSize: '2.5rem' }} ref={el}></span>
                        </h2>
                        
                        <div className="col-12 col-xl-10">
                            <div className="fs-5 mb-3 text-light hero-subtext">
                                Hi, welcome to <span className="d-inline-block mx-1"><Logo /></span> 
                                we specialize in building high-quality responsive websites and data-driven solutions. 
                                Let's transform your vision into reality.
                            </div>
                            
                            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                                <a href="#featured-work" className="btn btn-info btn-lg px-4 fw-bold hero-btn-primary">
                                    View My Work
                                </a>
                                <a href="#contact-section" className="btn btn-outline-light btn-lg px-4 hero-btn-secondary">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                        <div>
                            {/* Social Icons Integrated into the Box */}
                          <SocialIcons limit={5} FromEnd={false} />

                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}