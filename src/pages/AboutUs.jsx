import React, { useState } from 'react';
import '../css/aboutus.css';
import MissionSection from '../components/Mission_value';
import { Navbar } from '../components/Navbar';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('education');
    const myCV="https://drive.google.com/file/d/1uYCJFjgB1NiT4j81aAfGhr26XZomd2du/view?usp=sharing"
    return (
        <section className="about_us" id="about_us">
            <div id='Navbar'><Navbar/> </div>
            <div className="container about-shell">
                <div className="row align-items-center justify-content-center py-3">
                    
                    {/* Column 1: Text Content */}
                    <div className="col-lg-7 p-2 salutation order-2 order-md-1 px-lg-5">
                        <div className="about-intro mb-4">
                            <p className="about-eyebrow">The person behind the work</p>
                            <h1>
                                About <span>Denis Ambetsa</span>
                            </h1>
                            <p className="about-lead mb-4">
                                Guided by a strong moral compass and strict adherence to industry regulations, 
                                <span className="fw-bold" style={{ color: '#00CED1' }}> Ambetsa Tech Solutions</span> stands for integrity in every engagement. 
                                We champion the well-being of our clients, society, and the broader digital landscape.
                                <br /><br />
                                Based in Kenya, I leverage virtual consultations to deliver global expertise. Since 2022, I've built a reputation for turning complex problems into scalable digital solutions.
                            </p>
                        </div>

                        {/* Tab Switchers */}
                        <div className="tab-container">
                            <div className="about-tabs">
                                {['education', 'skills', 'experience'].map((tab) => (
                                    <button 
                                        key={tab}
                                        className={`tab-btn ${activeTab === tab ? 'is-active' : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content Display */}
                            <div className="tab-content-area px-2">
                                {activeTab === 'education' && (
                                    <div className="animate__animated animate__fadeIn">
                                        <div className="education-item">
                                            <h6 className="fw-bold mb-0 text-white">MERN Stack Development</h6>
                                            <small className="text-info">Edureka | 2025</small>
                                        </div>
                                        <div className="education-item">
                                            <h6 className="fw-bold mb-0 text-white">Bsc in Information Technology</h6>
                                            <small className="text-info">Taita Taveta University | Graduate</small>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'skills' && (
                                    <div className="animate__animated animate__fadeIn row g-3">
                                        {['Web Development', 'Data Analysis', 'Python & SQL', 'JavaScript'].map(skill => (
                                            <div className="col-6" key={skill}>
                                                <div className="d-flex align-items-center text-light">
                                                    <div className="skill-dot me-2"></div>
                                                    <span>{skill}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'experience' && (
                                    <div className="animate__animated animate__fadeIn">
                                        <ul className="list-unstyled">
                                            <li className="mb-3">
                                                <span className="fw-bold d-block text-white">Data Labeler</span>
                                                <small className="text-info">Pareto Inc | 2025</small>
                                            </li>
                                            <li className="mb-3">
                                                <span className="fw-bold d-block text-white">Data Analyst</span>
                                                <small className="text-info">Upwork | 2020-2021</small>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Download CV Action */}
                        <div className="cv-button mt-3 d-flex align-items-center">
                            <a 
                                href={myCV} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="about-cv-button btn btn-lg fw-bold px-4 py-3 shadow-lg hover-lift"
                            >
                                <i className="fa fa-file-pdf me-2"></i> View My CV
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Image Section */}
                    <div className="col-lg-5 p-2 order-1 order-md-2 mb-5 mb-md-0 d-flex justify-content-center">
                        <div className="about-profile-frame position-relative">
                            {/* Decorative Glow behind image */}
                            <div className="about-profile-outline"></div>
                            <img 
                                src="/Ambetsa.jpeg" 
                                alt="Denis Ambetsa" 
                                className="about-profile-image img-fluid rounded shadow-lg position-relative"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <MissionSection />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;