import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
        <section className="container py-5" id="services">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Book Us Now For Our Services</h2>
                <p className="text-muted">Tailored solutions for your digital needs.</p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {serviceList.map((service) => (
                    <div className="col" key={service.id}>
                        <div className="card h-100 shadow-sm border-0 service-card text-center p-3">
                            <img src={service.img} className="card-img-top rounded mb-3" alt={service.title} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column">
                                <h3 className="h5 fw-bold">{service.title}</h3>
                                <p className="card-text text-muted small">{service.text}</p>
                                
                                <div className="mt-auto pt-3 d-grid gap-2">
                                    {/* Link to the contact section ID */}
                                    <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold">
                                        Book This Service
                                        </NavHashLink>
                                    
                                    {/* Button to trigger navigation function */}
                                    <button 
                                        onClick={() => handleLearnMore(service.title)} 
                                        className="btn btn-link btn-sm text-decoration-none text-muted"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;