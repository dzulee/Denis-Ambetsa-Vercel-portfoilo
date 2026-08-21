import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Logo } from './Logo';
import '../index.css';
import { SocialIcons } from './SocialMediaIcons';

export function Heroes() {
    const el = useRef(null);

    useEffect(() => {
        if (el.current) {
            const typed = new Typed(el.current, {
                strings: ['Web Development', 'UI/UX Design', 'Data Analysis', 'Project Management', 'Consultation'],
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
            <div className="container-fluid hero-top-gap">
                <div className="row justify-content-center px-1 px-md-2">
                    <div className="col-11 col-md-10 col-xl-9 glass-box hero-content-box">
                        <div className="row align-items-center g-4">
                            <div className="col-lg-6">
                                <p className="hero-eyebrow">Technology with direction</p>
                                <h1 className="hero-title">
                                    Turn ideas into
                                    <span className="hero-title-accent">measurable momentum</span>
                                </h1>
                                <p className="hero-typed-label">Get professional</p>
                                <span className="typed-text" ref={el}></span>
                            </div>

                            <div className="col-lg-6">
                                <div className="hero-copy">
                                    <p className="hero-welcome">
                                        Welcome to <span className="d-inline-block mx-1"><Logo className="logo--inline" /></span>.
                                    </p>
                                    <p>
                                        I build clear, high-performing digital solutions for businesses ready to work smarter and grow with confidence.
                                    </p>
                                    <p>
                                        From responsive websites and intelligent dashboards to practical automation, your goals stay at the center of every decision.
                                    </p>
                                </div>

                                <div className="hero-actions d-flex flex-wrap gap-2">
                                    <a href="#featured-work" className="btn btn-info btn-lg px-4 fw-bold hero-btn-primary">
                                        Explore My Work
                                    </a>
                                    <a href="#contact-section" className="btn btn-outline-light btn-lg px-4 hero-btn-secondary">
                                        Start a Conversation
                                    </a>
                                </div>

                                <div className="hero-proof-row">
                                    <span><strong>01</strong> Strategy-led</span>
                                    <span><strong>02</strong> Built to scale</span>
                                </div>
                                <SocialIcons limit={5} FromEnd={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}