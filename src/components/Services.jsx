import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/service.css';
import { Link, useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export function Services() {
    const navigate = useNavigate();

    // Correct way to handle navigation with parameters
    const handleLearnMore = (serviceName) => {
        // Option A: Standard Route
        navigate(`/learn-more/${serviceName.toLowerCase().replace(/\s+/g, '-')}`);
    };

    // Data array to keep code DRY (Don't Repeat Yourself)
    const serviceList = [
        {
            id: 'it-support',
            title: 'IT Support',
            text: 'Reliable IT support services to keep your business running smoothly.',
            img: 'https://plus.unsplash.com/premium_photo-1661763911173-f2f7becc70b0?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 'web-creation',
            title: 'Website Creation',
            text: 'Professional website development and design to establish your online presence.',
            img: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 'data-analysis',
            title: 'Data Analysis',
            text: 'Data-driven insights to make informed business decisions.',
            img: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402'
        },
        {
            id: 'professional-consultancy',
            title: 'Professional Consultancy',
            text: 'Transition your business with confidence to the digital world.',
            img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470'
        }
    ];

     return (
        <section className="service-section position-relative" id="services">
            {/* Animated Background Layer */}
            <div className="rotating-bg-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
                <div className="rotating-bg-image"></div>
            </div>
           
            <div className="container position-relative py-5" style={{ zIndex: 1 }}>
                <h2 className="bookus-call text-center mb-3 fw-bold text-white">Book Us Now For Our Services</h2>
                <p className="text-center mb-5 text-light">For tailored solutions for your digital needs.</p>

                {/* Updated Row with specific responsive column widths */}
                <div className="row g-4">
                    {serviceList.map((service) => (
                        <div className="col-12 col-md-6 col-lg-3 d-flex" key={service.id}
                        data-aos="fade-up" 
                      data-aos-delay='0.2s'>
                            <div className="card service-card shadow-sm border-0 text-center p-3 w-100 h-100 d-flex flex-column">
                                <div className="img-container mb-3">
                                    <img src={service.img} className="card-img-top rounded shadow-sm" alt={service.title} />
                                </div>
                                <div className="card-body d-flex flex-column p-0">
                                    <h3 className="h5 fw-bold text-white">{service.title}</h3>
                                    <p className="card-text mb-4">{service.text}</p>
                                    
                                    <div className="mt-auto d-grid gap-2">
                                        <NavHashLink smooth to="/#contact-section" className="btn btn-info fw-bold text-dark" style={{backgroundColor: '#00CED1', border: 'none'}}>
                                            Book This Service
                                        </NavHashLink>
                                        
                                        <button 
                                            onClick={() => handleLearnMore(service.title)} 
                                            className="btn btn-link btn-sm text-decoration-none"
                                            style={{ color: '#00CED1' }}
                                        >
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;