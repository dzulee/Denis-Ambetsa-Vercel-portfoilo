import React, { useState } from 'react';
import '../css/aboutus.css';
import MissionSection from '../components/Mission_value';
import { Navbar } from '../components/Navbar';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('education');
    const myCV="https://drive.google.com/file/d/1uYCJFjgB1NiT4j81aAfGhr26XZomd2du/view?usp=sharing"
    return (
        <section className="about_us py-5" id="about_us" style={{ backgroundColor: '#0a0c10', minHeight: '100vh' }}>
            <div id='Navbar'><Navbar/> </div>
            <div className="container mt-5">
                <div className="row align-items-center justify-content-center py-5">
                    
                    {/* Column 1: Text Content */}
                    <div className="col-lg-7 p-2 salutation order-2 order-md-1 px-lg-5">
                        <div className="mb-4">
                            <h1 className="display-5 fw-bold mb-3" style={{ color: '#ffffff' }}>
                                About <span style={{ color: '#00CED1' }}>Me</span>
                            </h1>
                            <p className="lead mb-4" style={{ textAlign: 'justify', color: '#b0b0b0', fontSize: '1.1rem' }}>
                                Guided by a strong moral compass and strict adherence to industry regulations, 
                                <span className="fw-bold" style={{ color: '#00CED1' }}> Ambetsa Tech Solutions</span> stands for integrity in every engagement. 
                                We champion the well-being of our clients, society, and the broader digital landscape.
                                <br /><br />
                                Based in Kenya, I leverage virtual consultations to deliver global expertise. Since 2022, I've built a reputation for turning complex problems into scalable digital solutions.
                            </p>
                        </div>

                        {/* Tab Switchers */}
                        <div className="tab-container p-4 rounded-4 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                            <div className="d-flex mb-4 border-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                                {['education', 'skills', 'experience'].map((tab) => (
                                    <button 
                                        key={tab}
                                        className={`btn tab-btn px-4 py-2 me-2 fw-bold transition-all`}
                                        onClick={() => setActiveTab(tab)}
                                        style={{ 
                                            border: 'none', 
                                            background: 'none', 
                                            color: activeTab === tab ? '#00CED1' : '#808080',
                                            borderBottom: activeTab === tab ? '2px solid #00CED1' : 'none'
                                        }}
                                    >
                                        {tab.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content Display */}
                            <div className="tab-content-area px-2">
                                {activeTab === 'education' && (
                                    <div className="animate__animated animate__fadeIn">
                                        <div className="education-item mb-3 border-start ps-3" style={{ borderColor: '#00CED1' }}>
                                            <h6 className="fw-bold mb-0 text-white">MERN Stack Development</h6>
                                            <small className="text-info">Edureka | 2025</small>
                                        </div>
                                        <div className="education-item mb-3 border-start ps-3" style={{ borderColor: '#00CED1' }}>
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
                                                    <div className="skill-dot me-2" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00CED1' }}></div>
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
                        <div className="mt-5 d-flex align-items-center">
                            <a 
                                href={myCV} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-lg fw-bold px-4 py-3 shadow-lg hover-lift"
                                style={{ backgroundColor: '#00CED1', color: '#0a0c10', border: 'none' }}
                            >
                                <i className="fa fa-file-pdf me-2"></i> View My CV
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Image Section */}
                    <div className="col-lg-5 p-2 order-1 order-md-2 mb-5 mb-md-0 d-flex justify-content-center">
                        <div className="position-relative">
                            {/* Decorative Glow behind image */}
                            <div style={{ 
                                position: 'absolute', 
                                top: '10px', 
                                left: '10px', 
                                width: '100%', 
                                height: '100%', 
                                border: '2px solid #00CED1', 
                                borderRadius: '10px',
                                zIndex: 0
                            }}></div>
                            <img 
                                src="/Ambetsa.jpeg" 
                                alt="Denis Ambetsa" 
                                className="img-fluid rounded shadow-lg position-relative" 
                                style={{ zIndex: 1, maxWidth: '350px' }}
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