import React from "react";
import { useParams } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import '../css/learn-more.css';
import { Navbar } from "../components/Navbar";

export default function LearnMorePage() {
    // This gets the ":id" part from the URL (e.g., /learn-more/data-analysis)
    const { id } = useParams();

    const validIds = ["website-creation", "website-design", "it-support", "data-analysis", "professional-consultancy"];

    return (
        <div className="learn-more-container">
            <div id="tpp-side">
                <Navbar />
            </div>

            <div className="container mt-4 mb-3">
                <NavHashLink smooth to="/#services" className="btn btn-outline-warning fw-bold">
                    ← Back to Services
                </NavHashLink>
            </div>

            {/* 1. Website Creation / Design Content */}
            {(id === "website-creation" || id === "website-design") && (
                <div className="container py-4 animate__animated animate__fadeIn">
                    <h1 className="fw-bold text-warning mb-3">Website Design & Creation</h1>
                    <p className="lead text-light">
                        A website removes exposure limits and changes the perception that your business operates in a silo. 
                        It allows you to sell at scale, reach broader audiences, and trigger customer buying intent.
                    </p>
                    <p className="text-secondary">
                        Under the hood, technical complexity should be hidden from the user. We prioritize intuitive UX and seamless navigation. Beyond visual spectrums, I build high-performing, search-engine-optimized, secure web applications featuring SSL integration and modern frameworks like React and Bootstrap.
                    </p>
                    <div className="mt-4">
                        <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold px-4 py-2">
                            Book This Service
                        </NavHashLink>
                    </div>
                </div>
            )}

            {/* 2. IT Support Content */}
            {id === "it-support" && (
                <div className="container py-4 animate__animated animate__fadeIn">
                    <h1 className="fw-bold text-warning mb-3">IT Support & Infrastructure</h1>
                    <p className="lead text-light">
                        From troubleshooting hardware issues to setting up secure, resilient networks, my IT support ensures your business maintains maximum uptime.
                    </p>
                    <p className="text-secondary">
                        Whether you need remote system administration or hands-on operational assistance, I provide structured troubleshooting and preventive maintenance tailored to your workplace setup.
                    </p>
                    <div className="mt-4">
                        <NavHashLink smooth to="/#contact-section" className="btn btn-warning fw-bold px-4 py-2">
                            Request Support
                        </NavHashLink>
                    </div>
                </div>
            )}

            {/* 3. Data Analysis Content */}
            {id === "data-analysis" && (
                <div className="container py-4 animate__animated animate__fadeIn">
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
                <div className="container py-4 animate__animated animate__fadeIn">
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
                <div className="container py-5 text-center">
                    <h1 className="text-light">Service Not Found</h1>
                    <p className="text-secondary">The requested service detail page could not be located.</p>
                    <NavHashLink to="/#services" className="btn btn-warning mt-3">Back to Services</NavHashLink>
                </div>
            )}
        </div>
    );
}