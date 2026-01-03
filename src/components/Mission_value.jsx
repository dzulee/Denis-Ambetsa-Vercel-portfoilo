import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MissionSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const data = [
        { title: 'Mission', icon: 'fa-heart', text: 'To be an epitome of great service and quality produce for our clients.', delay: '0' },
        { title: 'Vision', icon: 'fa-star', text: 'To transform client discussions into robust, high-functioning digital solutions.', delay: '200' },
        { title: 'Values', icon: 'fa-quote-right', text: 'Integrity, excellence, and global reach through virtual consultations.', delay: '400' }
    ];

    return (
        <div className="row mt-5 g-4 justify-content-center">
            {data.map((item, idx) => (
                <div 
                    key={idx} 
                    className="col-12 col-md-4" 
                    data-aos="fade-up" 
                    data-aos-delay={item.delay}
                >
                    <div className="card about_card h-100 p-5 text-center border-0">
                        <div className="mb-4">
                            <i className={`fa ${item.icon} fa-3x text-warning about_icon`}></i>
                        </div>
                        <h2 className="h4 fw-bold text-dark mb-3">{item.title}</h2>
                        <p className="text-muted lh-lg">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}