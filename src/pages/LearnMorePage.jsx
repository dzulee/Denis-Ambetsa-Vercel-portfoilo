import React from "react";
import { useParams } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function LearnMorePage() {
    // This gets the ":id" part from the URL (e.g., /learn-more/it-support)
    const { id }= useParams();
    

    return (
        <div className="learn-more-container">
            {/* 1. Website Creation Content */}
            {(id === "website-creation" || id === "website-design") && (
                <div className="container py-5 animate__animated animate__fadeIn">
                    <h1 className="fw-bold text-warning">Website Design & Creation</h1>
                    <p className="lead">
                        I accomplish this by creating responsive, user-friendly websites tailored to your business needs. 
                        Using modern frameworks like React and Bootstrap, I ensure your site looks great on phones, 
                        tablets, and desktops.
                    </p>
                    <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold">
                        Book This Service
                    </NavHashLink>
                </div>
            )}

            {/* 2. IT Support Content */}
            {id === "it-support" && (
                <div className="container py-5 animate__animated animate__fadeIn">
                    <h1 className="fw-bold text-warning">IT Support</h1>
                    <p className="lead">
                        From troubleshooting hardware issues to setting up secure networks, my IT support 
                        ensures your business never faces downtime. I provide both remote and on-site assistance.
                    </p>
                    <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold">
                        Request Support
                    </NavHashLink>
                </div>
            )}

            {/* 3. Data Analysis Content */}
            {id === "data-analysis" && (
                <div className="container py-5 animate__animated animate__fadeIn">
                    <h1 className="fw-bold text-warning">Data Analysis</h1>
                    <p className="lead">
                        I turn raw data into actionable insights using Python, SQL, and Power BI. 
                        Let me help you visualize your business growth and make data-driven decisions.
                    </p>
                    <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold">
                        Analyze My Data
                    </NavHashLink>
                </div>
            )}

            {/* 4. Consultancy Content */}
            {id === "professional-consultancy" && (
                <div className="container py-5 animate__animated animate__fadeIn">
                    <h1 className="fw-bold text-warning">Professional Consultancy</h1>
                    <p className="lead">
                        Transition your business with confidence to the digital world. I offer expert 
                        advice on tech stacks, digital marketing outreach, and workflow automation.
                    </p>
                    <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold">
                        Schedule a Consultation
                    </NavHashLink>
                </div>
            )}

            {/* Fallback: What to show if the URL doesn't match anything */}
            {!id && (
                <div className="container py-5 text-center">
                    <h1>Service Not Found</h1>
                    <NavHashLink to="/#services" className="btn btn-secondary">Back to Services</NavHashLink>
                </div>
            )}
        </div>
    );
}