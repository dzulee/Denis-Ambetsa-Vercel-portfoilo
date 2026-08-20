import React from "react";
import { useParams } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import '../css/learn-more.css';
import { Navbar } from "../components/Navbar";

export default function LearnMorePage() {
    // This gets the ":id" part from the URL (e.g., /learn-more/website-creation)
    const { id } = useParams();

    const validIds = ["website-creation", "website-design", "it-support", "data-analysis", "professional-consultancy"];

    return (
        <div className="learn-more-container" id="learnmore">
            <div id="tpp-side">
                <Navbar />
            </div>

            {/* Added 'pt-5 mt-5' to push the button and content below fixed navbar */}
            <div className="container learn-more-shell">
                
                <div className="learn-more-back mb-4">
                    <NavHashLink smooth to="/#services" className="learn-more-back-link">
                        &lt;- Back to Services
                    </NavHashLink>
                </div>

                {/* 1. Website Creation / Design Content */}
                {(id === "website-creation" || id === "website-design") && (
                    <div className="learn-more-content animate__animated animate__fadeIn pb-5">
                        <h1 className="fw-bold text-warning mb-3">Website Design & Creation</h1>
                        <p className="lead text-light">
                            A modern digital presence removes geographic limits and breaks the perception that your business operates in a silo. It allows you to scale, reach broader audiences, and effectively trigger customer buying intent.
                        </p>
                        <p className="text-secondary">
                            Under the hood, technical complexity should remain seamless to the user. We focus on clean maneuverability, responsiveness, and intuitive user experiences. Beyond visual design, performance, search engine optimization (SEO), SSL security, and robust web architecture are crucial to digital success.
                        </p>
                        
                        <ul className="text-light lh-lg my-3">
                            <li><strong>Responsive UI/UX:</strong> Built with modern frameworks like React, Vite, and Bootstrap to ensure flawless performance across mobile phones, tablets, and desktops.</li>
                            <li><strong>SEO & Performance:</strong> Structured code optimized for search engine visibility and fast load times.</li>
                            <li><strong>Security & Infrastructure:</strong> SSL certificate integration, production deployment, and reliable hosting setup.</li>
                            <li><strong>Tailored Source Code:</strong> Custom applications engineered specifically around your business goals and operational workflow.</li>
                        </ul>

                        <div className="mt-4">
                            <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold px-4 py-2">
                                Book This Service
                            </NavHashLink>
                        </div>
                    </div>
                )}

                {/* 2. IT Support Content */}
                {id === "it-support" && (
                    <div className="learn-more-content animate__animated animate__fadeIn pb-5">
                        <h1 className="fw-bold text-warning mb-3">IT Support & System Infrastructure</h1>
                        <p className="lead text-light">
                            Technical downtime costs businesses time and momentum. My IT support services ensure your technological infrastructure remains secure, resilient, and fully operational.
                        </p>
                        <p className="text-secondary">
                            Whether dealing with unexpected hardware malfunctions or setting up secure office networks, I provide comprehensive troubleshooting and preventive maintenance.
                        </p>

                        <ul className="text-light lh-lg my-3">
                            <li><strong>Hardware & Software Diagnostics:</strong> Quick identification and resolution of system faults to restore operational workflows.</li>
                            <li><strong>Network Configuration & Security:</strong> Setting up secure local area networks, routers, and secure access configurations.</li>
                            <li><strong>Preventive Maintenance:</strong> System updates, performance optimizations, and regular health checks.</li>
                            <li><strong>Flexible Delivery:</strong> Prompt remote troubleshooting alongside hands-on on-site assistance when required.</li>
                        </ul>

                        <div className="mt-4">
                            <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold px-4 py-2">
                                Request Support
                            </NavHashLink>
                        </div>
                    </div>
                )}

                {/* 3. Data Analysis Content */}
                {id === "data-analysis" && (
                    <div className="learn-more-content animate__animated animate__fadeIn pb-5">
                        <h1 className="fw-bold text-warning mb-3">Data Analytics & Strategic Insights</h1>
                        <p className="lead text-light">
                            <strong>Data without direction is just noise.</strong> Raw information only creates true value when converted into clear, actionable business strategy.
                        </p>
                        <p className="text-secondary">
                            My approach to data analytics goes beyond basic reporting. I focus on root-cause problem solving using the core mathematical relationship:
                        </p>
                        
                        <div className="bg-dark p-3 rounded border border-secondary text-center my-3 text-warning fw-bold fs-4">
                            y = f(x)
                        </div>

                        <p className="text-light">
                            By evaluating how key operational drivers—<strong>Manpower, Machine, Material, Method, Measurement Systems, and Environment</strong>—impact your primary output (<em>y</em>), I help businesses:
                        </p>

                        <ul className="text-light lh-lg">
                            <li><strong>Predict & Prepare:</strong> Mitigate risks from market volatility, supply shifts, and macroeconomic factors.</li>
                            <li><strong>Optimize Returns:</strong> Uncover operational inefficiencies to maximize profit margins.</li>
                            <li><strong>Drive Alignment:</strong> Connect technical metrics with stakeholder goals and compliance needs.</li>
                        </ul>

                        <div className="my-4">
                            <h5 className="text-warning mb-2">Tech Stack:</h5>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-secondary p-2 fs-6">Python</span>
                                <span className="badge bg-secondary p-2 fs-6">SQL</span>
                                <span className="badge bg-secondary p-2 fs-6">Power BI</span>
                                <span className="badge bg-secondary p-2 fs-6">Excel</span>
                                <span className="badge bg-secondary p-2 fs-6">DAX</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold px-4 py-2">
                                Analyze My Data
                            </NavHashLink>
                        </div>
                    </div>
                )}

                {/* 4. Professional Consultancy Content */}
                {id === "professional-consultancy" && (
                    <div className="learn-more-content animate__animated animate__fadeIn pb-5">
                        <h1 className="fw-bold text-warning mb-3">Professional Consultancy & Process Optimization</h1>
                        <p className="lead text-light">
                            Continuous improvement is an indispensable mindset. In any organizational strategy or operation, variation exists—making continuous process refinement inevitable to eliminate waste.
                        </p>

                        <div className="my-4 p-4 bg-dark rounded border border-secondary">
                            <h4 className="text-warning mb-3">The DMAIC Approach (Six Sigma)</h4>
                            <p className="text-light mb-0">
                                By utilizing the <strong>Define, Measure, Analyze, Improve, and Control (DMAIC)</strong> framework, we reduce variation across operations to maximize process predictability and operational efficiency.
                            </p>
                        </div>

                        <p className="text-secondary">
                            Transition your business with confidence into the digital space. I offer expert consultation across technical architecture, digital outreach strategy, and operational workflow automation.
                        </p>

                        <div className="mt-4">
                            <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold px-4 py-2">
                                Schedule a Consultation
                            </NavHashLink>
                        </div>
                    </div>
                )}

                {/* Fallback for unrecognized IDs or missing params */}
                {(!id || !validIds.includes(id)) && (
                    <div className="learn-more-content learn-more-empty py-5 text-center">
                        <h1 className="text-light">Service Not Found</h1>
                        <p className="text-secondary">The requested service detail page could not be located.</p>
                        <NavHashLink to="/#services" className="btn btn-warning mt-3">Back to Services</NavHashLink>
                    </div>
                )}

            </div>
        </div>
    );
}