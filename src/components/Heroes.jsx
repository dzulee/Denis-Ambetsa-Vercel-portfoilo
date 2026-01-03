import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.css';

// 1. Import your assets
import githubIcon from '../assets/github-brands-solid-full.svg';
import linkedinIcon from '../assets/linkedin-in-brands-solid-full.svg';
import mailIcon from '../assets/envelope-solid-full.svg';

export function Heroes() {
    // Create reference for the typed element
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Full Stack Developer',
                'UI/UX Designer',
                'Data Analyst',
                'IT Solutions Expert',
                'Consultant'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div className="b-example-divider"></div>

            <div className="bg-dark text-secondary px-4 py-5 text-center" id="home">
                <div className="py-5">
                    {/* The static part of the title + the dynamic Typed span */}
                    <h1 className="display-5 fw-bold text-white mb-3">
                        Professional <span className="text-info" ref={el}></span>
                    </h1>
                    
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4 text-light">
                            Hi, I'm Denis Ambetsa. I specialize in building high-quality responsive websites 
                            using modern tools like React, Redux, and Bootstrap. Let's build something amazing together.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="#featured-work" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">View My Work</a>
                            <a href="#contact-section" className="btn btn-outline-light btn-lg px-4">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Brand Section */}
            <div className="container py-5">
                <div className="row text-center justify-content-center">
                     <div className="col-md-2 col-4">
                        <a href="mailto:dennisambetsa63@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={mailIcon} className="img-fluid border rounded-3 shadow-lg mb-4 p-3 social-icon" alt="Mail" />
                        </a>
                    </div>
                    <div className="col-md-2 col-4">
                        <a href="https://github.com/dzulee?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} className="img-fluid border rounded-3 shadow-lg mb-4 p-3 social-icon" alt="GitHub" />
                        </a>
                    </div>
                    <div className="col-md-2 col-4">
                        <a href="https://www.linkedin.com/in/dennis-ambetsa/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} className="img-fluid border rounded-3 shadow-lg mb-4 p-3 social-icon" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}