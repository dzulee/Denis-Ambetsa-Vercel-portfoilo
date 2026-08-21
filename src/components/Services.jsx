import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/service.css';
import { useNavigate, Link } from 'react-router-dom';

export function Services() {
    const navigate = useNavigate();

    // Correct way to handle navigation with parameters
    const handleLearnMore = (serviceId) => {
        navigate(`/learn-more/${serviceId}`);
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
            <div className="container position-relative py-3" style={{ zIndex: 1 }}>
                <div className="service-heading text-center">
                    <p className="service-eyebrow">Built around your next move</p>
                    <h2 className="bookus-call">Services that move business forward</h2>
                    <p className="service-intro">Practical technology, thoughtful strategy, and dependable support for ambitious teams.</p>
                </div>

                <div className="row g-4">
                    {serviceList.map((service, index) => (
                        <div className="col-12 col-md-6 col-lg-3 d-flex" key={service.id}
                        data-aos="fade-up" 
                      data-aos-delay='0.2s'>
                            <div className="card service-card text-white w-100 h-100 d-flex flex-column">
                                <div className="service-card-topline">
                                    <span>0{index + 1}</span>
                                    <span>Digital service</span>
                                </div>
                                <div className="img-container">
                                    <img src={service.img} className="card-img-top" alt={service.title} />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h3>{service.title}</h3>
                                    <p className="service-card-text">{service.text}</p>
                                    
                                    <div className="service-actions mt-auto">
                                        <Link to="/contact" className="service-cta">
                                            Book This Service
                                        </Link>
                                        
                                        <button 
                                            onClick={() => handleLearnMore(service.id)} 
                                            className="service-learn-more"
                                        >
                                            Learn More <span aria-hidden="true">-&gt;</span>
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