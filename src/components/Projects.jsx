import React, { useState } from 'react';

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

    // Updated content to be objects with name and link
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
                        { name: '3 Statement Model', url: 'https://github.com/dzulee?tab=repositories' },
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
                        { name: 'EDA Explanatory Data Analysis', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Data Cleaning', url: 'https://github.com/dzulee?tab=repositories' }
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
                // ... add other tabs following this pattern
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
                        { name: 'Email Management', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Calendar Management', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Appointment Scheduling', url: 'https://github.com/dzulee?tab=repositories' },
                         { name: 'Briefing and Minutes taking', url: 'https://github.com/dzulee?tab=repositories' }
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
                        { name: 'Project methodology', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Decision Making', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                },
                { 
                    id: 'lean-sixsigma', 
                    label: 'Lean Six Sigma', 
                    content: [
                        { name: 'Process Improvement', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Quality Control', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Data Analysis', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                }
            ]
        }
        // ... follow same pattern for 'va' and 'pm'
    ];

    return (
        <section className="container py-5" id="featured-work">
            <h2 className="text-center mb-5 fw-bold">My Expertise</h2>
            <div className="row">
                {categories.map((cat) => (
                    <div className="col-md-6 col-lg-3 mb-4" key={cat.id}>
                        <div className="card h-100 p-4 shadow-sm border-0 bg-light">
                            <h4 className="fw-bold h5">{cat.title}</h4>
                            <p className="small text-muted mb-4">{cat.desc}</p>
                            
                            <div className="d-flex flex-wrap gap-2 mb-3 border-bottom pb-2">
                                {cat.tabs.map((tab) => (
                                    <button 
                                        key={tab.id}
                                        className={`btn btn-sm ${activeTabs[cat.id] === tab.id ? 'btn-warning fw-bold' : 'btn-outline-secondary'}`}
                                        onClick={() => handleTabChange(cat.id, tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="tab-content">
                                {cat.tabs.find(t => t.id === activeTabs[cat.id])?.content.map((project, index) => (
                                    <p key={index} className="mb-2 animate__animated animate__fadeIn">
                                        <i className="fa fa-external-link-alt text-warning me-2 small"></i>
                                        <a 
                                            href={project.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-decoration-none text-dark project-link"
                                            style={{ transition: '0.2s' }}
                                        >
                                            {project.name}
                                        </a>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}