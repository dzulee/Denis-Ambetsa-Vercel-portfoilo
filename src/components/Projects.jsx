import React, { useState } from 'react';
import '../css/featured-work.css';
export function Projects() {
    const [activeTabs, setActiveTabs] = useState({
        analysis: 'excel',
        webdev: 'webdesign',
        va: 'social-media-mngmnt',
        pm: 'lean-sixsigma',
    });

    const handleTabChange = (category, tabId) => {
        setActiveTabs(prev => ({ ...prev, [category]: tabId }));
    };

    const categories = [
        {
            id: 'analysis',
            title: 'Data Analysis',
            desc: 'Transforming raw data into actionable insights.',
            tabs: [
                { 
                    id: 'excel', 
                    label: 'Excel', 
                    content: [
                        { name: '3 Statement Model', url: 'https://bit.ly/4a62hTh' },
                        { name: 'Cash Flow Analysis', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                },
                { 
                    id: 'powerbi', 
                    label: 'Power BI', 
                    content: [
                        { name: 'Sales Dashboard', url: 'https://app.powerbi.com/links/cBNJxqGTWE?ctid=df8679cd-a80e-45d8-99ac-c83ed7ff95a0&pbi_source=linkShare' },
                        { name: 'Car models', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                },
                   { 
                    id: 'python', 
                    label: 'Python', 
                    content: [
                        { name: 'EDA Explanatory Data Analysis', url: 'https://github.com/dzulee/Wine_Quality_Analysis/blob/main/wine_quality_dataset.ipynb' },
                        { name: 'Data Cleaning', url: 'https://github.com/dzulee/Wine_Quality_Analysis/blob/main/wine_quality_dataset.ipynb' }
                    ] 
                },
                   { 
                    id: 'sql', 
                    label: 'SQL', 
                    content: [
                        { name: 'Database ', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Join Operations', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                }
                
            ]
        },
        {
            id: 'webdev',
            title: 'Web Development',
            desc: 'Supporting my work and expertise in analysis.',
            tabs: [
                { 
                    id: 'webdesign', 
                    label: 'Web Design', 
                    content: [
                        { name: 'Portfolio Website', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Blog website page', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                },
                { 
                    id: 'ecommerce', 
                    label: 'E-commerce', 
                    content: [
                        { name: 'Amazon clone App', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Food Ordering App', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Payment Integration', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                }
            ]
        },
            {
            id: 'va',
            title: 'Virtual Assistance',
            desc: 'Efficiently managing tasks to streamline your operations.',
            tabs: [
                { 
                    id: 'Inbox-management', 
                    label: 'Inbox Management', 
                    content: [
                        { name: 'Email Management',
                             url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Calendar Management',
                             url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Appointment Scheduling',
                             url: 'https://github.com/dzulee?tab=repositories' },
                         { name: 'Briefing and Minutes taking',
                             url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                },
                { 
                    id: 'social-media-mngmnt', 
                    label: 'Social Media Management', 
                    content: [
                        { name: 'Engagement', url: '#' },
                        { name: 'Schedule Post', url: '#' },
                        { name: 'Sentiment Analysis', url: '#' }
                    ] 
                }
            ]
        },
            {
            id: 'pm',
            title: 'Project Management',
            desc: 'Organizing and leading projects to successful completion.',
            tabs: [
                { 
                    id: 'agile-scrum', 
                    label: 'Agile & Scrum', 
                    content: [
                        { name: 'Project methodology',
                             url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Decision Making',
                             url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                },
                { 
                    id: 'lean-sixsigma', 
                    label: 'Lean Six Sigma', 
                    content: [
                        { name: 'Process Improvement',
                             url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Quality Control',
                             url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Data Analysis',
                             url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                }
            ]
        }
        
    ];

    return (
        <section className="project-section" id="featured-work">
            {/* Animated Background Layer */}
            <div className="rotating-bg-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
                <div className="rotating-bg-image"></div>
            </div>

            <div className="container-fluid px-md-5 position-relative" style={{ zIndex: 1 }}>
                <h2 className="text-center mb-5 fw-bold text-white display-5">My Expertise</h2>
                
                <div className="row g-5 align-items-start justify-content-center">
                    
                    {/* Left Column: Description Text */}
                    <div className="col-12 col-lg-5">
                        <div className="project-descriptions text-muted pe-lg-4">
                            <h3 className="mb-4 text-white fw-bold" style={{ fontSize: '1.75rem' }}>
                                Bridging the Gap: Innovation Across Disciplines
                            </h3>
                            <p className="mb-4 lead-custom">
                                I don't just build tools; I build solutions. By combining technical precision with strategic oversight, I help businesses scale through four core pillars:
                            </p>
                            
                            <div className="pillar-list">
                                <div className="mb-4">
                                    <h4 className="text-warning fw-bold mb-2">1. Web Design & Development</h4>
                                    <p className="small-text">I create high-performance, responsive digital experiences using React and Bootstrap, focusing on clean UI/UX.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-warning fw-bold mb-2">2. Data Analysis</h4>
                                    <p className="small-text">I turn raw numbers into actionable growth strategies using Python, SQL, and Power BI dashboards.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-warning fw-bold mb-2">3. Project Management</h4>
                                    <p className="small-text">I lead teams using Agile methodologies to ensure high-impact projects move from ideation to launch.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-warning fw-bold mb-2">4. Virtual Assistance</h4>
                                    <p className="small-text">I optimize the "backend" of business through workflow automation and CRM management.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Project Cards */}
                    <div className="col-12 col-lg-7">
                        <div className="row g-4">
                            {categories.map((cat) => (
                                <div className="col-12 col-md-6" key={cat.id}>
                                    <div className="project-card h-100 p-4 rounded-4 shadow-lg border-0">
                                        <h4 className="fw-bold text-white mb-2">{cat.title}</h4>
                                        <p className="card-desc mb-3">{cat.desc}</p>
                                        
                                        <div className="d-flex flex-wrap gap-2 mb-3 pb-2 border-bottom border-secondary">
                                            {cat.tabs.map((tab) => (
                                                <button 
                                                    key={tab.id}
                                                    className={`btn btn-xs py-1 px-2 ${activeTabs[cat.id] === tab.id ? 'btn-warning fw-bold' : 'btn-outline-light opacity-50'}`}
                                                    onClick={() => handleTabChange(cat.id, tab.id)}
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="tab-content pt-2">
                                            {cat.tabs.find(t => t.id === activeTabs[cat.id])?.content.map((project, index) => (
                                                <p key={index} className="mb-2 fade-in-text">
                                                    <i className="fa fa-chevron-right text-info me-2 small"></i>
                                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                                        {project.name}
                                                    </a>
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
