import React, { useState } from 'react';
import '../index.css';
import MissionSection from '../components/Mission_value';
import myCV from '../my_cv/Denis_Ambetsa_cv.pdf';

const AboutMe = () => {
    // State to track which tab is active
    const [activeTab, setActiveTab] = useState('education');

    return (
        <section className="about_us py-5" id="about_us">
            <div className="container">
               <div className="row d-flex align-items-center justify-content-center py-5">
    
    {/* Column 1: Text Content */}
    <div className="col-12 col-md-7 salutation order-2 order-md-1 px-lg-5">
        <div className="mb-4">
            <h1 className="display-5 fw-bold mb-3">About <span className="text-warning">Me</span></h1>
            <p className="lead words text-muted mb-4" style={{ textAlign: 'justify' }}>
                Guided by a strong moral compass and strict adherence to industry regulations, 
                <span className="text-dark fw-bold"> Ambetsa Tech Solutions</span> stands for integrity in every engagement. 
                We champion the well-being of our clients, society, and the broader digital landscape.
                <br /><br />
                From our base in Kenya, we seamlessly extend our expertise globally through effective 
                virtual consultations. Since 2022, we've been building a reputation for excellence.
            </p>
        </div>

        {/* Tab Switchers */}
        <div className="tab-container p-3 rounded shadow-sm bg-white border">
            <div className="d-flex mb-4 border-bottom">
                {['education', 'skills', 'experience'].map((tab) => (
                    <button 
                        key={tab}
                        className={`btn tab-btn px-4 py-2 me-2 fw-bold transition-all ${activeTab === tab ? 'text-warning' : 'text-muted'}`}
                        onClick={() => setActiveTab(tab)}
                        style={{ border: 'none', background: 'none', position: 'relative' }}
                    >
                        {tab.toUpperCase()}
                        {activeTab === tab && <div className="tab-indicator"></div>}
                    </button>
                ))}
            </div>

            {/* Tab Content Display */}
            <div className="tab-content-area px-2">
                {activeTab === 'education' && (
                    <div className="animate__animated animate__fadeIn">
                        <div className="education-item mb-3 border-start border-warning ps-3">
                            <h6 className="fw-bold mb-0">MERN Stack Development</h6>
                            <small className="text-muted">Edureka | 2025</small>
                        </div>
                        <div className="education-item mb-3 border-start border-warning ps-3">
                            <h6 className="fw-bold mb-0">Bsc in Information Technology</h6>
                            <small className="text-muted">Taita Taveta University | Graduate</small>
                        </div>
                    </div>
                )}

                {activeTab === 'skills' && (
                    <div className="animate__animated animate__fadeIn row g-3">
                        {['Web Development', 'Data Analysis', 'Python & SQL', 'JavaScript'].map(skill => (
                            <div className="col-6" key={skill}>
                                <div className="d-flex align-items-center">
                                    <div className="skill-dot bg-warning me-2"></div>
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
                                <span className="fw-bold d-block">Data Labeler</span>
                                <small className="text-muted">Pareto Inc | 2025</small>
                            </li>
                            <li className="mb-3">
                                <span className="fw-bold d-block">Data Analyst</span>
                                <small className="text-muted">Upwork | 2020-2021</small>
                            </li>
                        </ul>
                    </div>
                )}
                {/* Download CV Action */}
              <div className="mt-5 d-flex align-items-center animate__animated animate__fadeInUp">
                    <a 
                        href={myCV} 
                        target="_blank"             // Opens in a new tab
                        rel="noopener noreferrer"   // Security best practice
                        className="btn btn-warning fw-bold px-4 py-3 shadow-sm d-flex align-items-center me-3 hover-lift"
                    >
                        <i className="fa fa-file-pdf me-2"></i> View My CV
                    </a>
                    <div className="text-muted small d-none d-sm-block">
                        <i className="fa fa-external-link-alt me-1"></i> Opens in new tab
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Column 2: Image with Decorative Background */}
    <div className="col-12 col-md-5 order-1 order-md-2 mb-5 mb-md-0 position-relative">
        <div className="img-wrapper">
            <div className=""></div>
            <img 
                src="/Ambetsa.jpeg" 
                alt="Denis Ambetsa" 
                className="about-img img-fluid rounded shadow-lg position-relative" 
            />
        </div>
    </div>
</div>

                {/* Mission, Vision, Values Row */}
               <MissionSection />
            </div>
        </section>
    );
};

export default AboutMe;