import React, { useState } from 'react';
import '../css/featured-work.css';
import { DashboardData } from '../data/dashboardData';


export function Projects() {
    const [activeTabs, setActiveTabs] = useState({
        analysis: 'excel',
        webdev: 'webdesign',
        va: 'Inbox-management',
        pm: 'agile-scrum',
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
                         { name: 'Budget Vs Actual Analysis', url: 'https://docs.google.com/spreadsheets/d/1S5bOQRUuKnjMvItVP7GhYwOIYUirWUgM/edit?usp=sharing&ouid=105506960372399982664&rtpof=true&sd=true'},
                        { name: 'Cash Flow Analysis', url: 'https://bit.ly/4a62hTh' }
                    ] 
                },
              { 
                    id: 'powerbi', 
                    label: 'Power BI', 
                    //fetching the power bi dashboards list:
                    content: DashboardData 
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
                
            ],
            whatido:'I turn raw numbers into actionable growth strategies using Python, SQL, and Power BI dashboards.'
        },
        {
            id: 'webdev',
            title: 'Web Development',
            desc: 'Designing useful, responsive experiences for modern businesses.',
            tabs: [
                { 
                    id: 'webdesign', 
                    label: 'Web Design', 
                    content: [
                        { name: 'Portfolio Website', url: 'https://ambetsatech.vercel.app/' },
                        { name: 'AmbetsaTech blog', url: '/blog' },
                       
                    ] 
                },
                { 
                    id: 'ecommerce', 
                    label: 'E-commerce', 
                    content: [
                        { name: 'Bright Volt App', url: 'https://volt-elite-website.vercel.app/' },
                        { name: 'Food Ordering App', url: 'https://food-ordering-system-blush.vercel.app/' },
                        { name: 'Payment Integration', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                },
                { 
                    id: 'others', 
                    label: 'Others', 
                    content: [
                        { name: 'Digital clock', url: 'https://github.com/dzulee?tab=repositories' },
                        { name: 'Movie App', url: 'https://food-ordering-system-blush.vercel.app/' },
                        { name: 'Gmail Labeler', url: 'https://github.com/dzulee?tab=repositories' }
                    ] 
                }
            ],
            whatido:'I create high-performance, responsive digital experiences using React and Bootstrap, focusing on clean UI/UX.'

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
                        { name: 'Engagement', url: '/contact' },
                        { name: 'Schedule Post', url: '/contact' },
                        { name: 'Sentiment Analysis', url: '/contact' }
                    ] 
                }
            ],
             whatido:'I optimize the "backend" of business through workflow automation and CRM management.'
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
                             url: 'https://app.asana.com/1/1209734435650469/project/1213343412594085/gantt/1213344836501501' },
                        { name: 'Decision Making',
                             url: 'https://1drv.ms/x/c/f7424cd8fad957a6/IQAJdc6m3HrwS6YxvqbNiMr5AdulXQtImlx5dXxpLnRlQvM' }
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
            ],
                     whatido:'I lead teams using Agile methodologies to ensure high-impact projects move from ideation to launch.'
        }
        
    ];

    return (
        <section className="project-section glass-box" id="featured-work">
            <div className="container-fluid px-2 px-md-4 position-relative" style={{ zIndex: 1 }}>
                
                <div className="row g-5 align-items-start justify-content-center">
                    
                    {/* Left Column: Description Text */}
                    <div className="col-12 col-lg-5 "data-aos="fade-right" data-aos-duration="1500">                        
                        <div className="project-descriptions pe-lg-4">
                            <p className="project-eyebrow">Selected work and capabilities</p>
                            <h2 className="bridge-the-gap">
                                Bridging the gap
                                <span>between ideas and impact</span>
                            </h2>
                            <p className="lead-custom">
                                I combine technical precision with strategic thinking to create solutions that make complex work clearer, faster, and more valuable.
                            </p>
                            
                            <div className="pillar-list">
                                {categories.map((cat,index) => (                
                                    <div className="pillar-item slide-in-left" key={cat.id}
                                     data-aos="fade-up" 
                                     data-aos-delay={index * 100}>
                                        <div className="pillar-number">0{index + 1}</div>
                                        <div>
                                            <h3>{cat.title}</h3>
                                            <p>{cat.whatido}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Project Cards */}
                    <div className="col-12 col-lg-7" data-aos="fade-left" data-aos-duration="1500">
                        <div className="project-list-heading">
                            <p className="project-eyebrow">Explore the portfolio</p>
                            <h2>Drill down to see each project</h2>
                        </div>

                        <div className="row g-4">
                            {categories.map((cat,index) => (
                                <div className="col-12 col-md-6" key={cat.id}
                                 data-aos="fade-up" 
                                     data-aos-delay={index * 100}>
                                    <div className="project-card h-100"
                                   >
                                        <div className="project-card-header">
                                            <span className="project-card-kicker">Capability {String(index + 1).padStart(2, '0')}</span>
                                            <h3>{cat.title}</h3>
                                        </div>
                                        <p className="card-desc mb-3">{cat.desc}</p>
                                        
                                        <div className="project-tabs">
                                            {cat.tabs.map((tab) => (
                                                <button 
                                                    key={tab.id}
                                                    className={`project-tab ${activeTabs[cat.id] === tab.id ? 'is-active' : ''}`}
                                                    onClick={() => handleTabChange(cat.id, tab.id)}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="tab-content project-tab-content">
                                            {(() => {
                                                const activeTab = cat.tabs.find(t => t.id === activeTabs[cat.id]);
                                                if (!activeTab) return null;
                                                return activeTab.content.map((project, index) => (
                                                    <p key={index} className="mb-2 fade-in-text">
                                                        <i className="fa fa-chevron-right text-info me-2 small"></i>
                                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                                            {project.name}
                                                        </a>
                                                    </p>
                                                ));
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};
