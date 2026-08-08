import React from "react";
import { useParams } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import '../css/learn-more.css';
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
export default function LearnMorePage() {
    // This gets the ":id" part from the URL (e.g., /learn-more/it-support)
    const { id }= useParams();
    

    return (
        <div className="learn-more-container">
            <div id="tpp-side">
                <Navbar/>
            </div>
            <div className="back-button">
                <NavHashLink smooth to="/#services" className="btn btn-warning fw-bold">
                        Back
                    </NavHashLink>
                    </div>
            {/* 1. Website Creation Content */}
            {(id === "website-creation" || id === "website-design") && (
                <div className="container py-5 animate__animated animate__fadeIn">
                    <h1 className="fw-bold text-warning">Website Design & Creation</h1>
                    <p className="lead">
                        Website opens the exposure , the eye and the perception that you as a business operate  in a silo.
                        in other words we sell large , we target  a broader  audince and we can trigfer the  customer itention on buying our services through website.
                        Under the hood the complexity of you and the business to reach the target audience should and must be hidden from the customers eye.We target the 
                        user needs and comfortability in the sense that they manover the application easily.
                        The dynamics and the spectrum of webdesign go beyond visual spectra to the efficiency ,perfomance , popularity in the internet, ssl certificates and many more.
                        I accomplish this by creating responsive, user-friendly , search engine optimization, ssl certificates , web hosting and direct source code
                        websites tailored to your business needs. 
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
                        Information in should conversely produce output and direction to every business.
                        Given the headstart of having to direct the business we rely on the meaning given by the information.
                        The whole process of deducing meaning from a raw data often reffered as first clue is called data analysis. 
                        At large we benefit from this in different ways beside ,proper  preparation before occurence of an intended prediction, maximum and good returns
                        by an organization, effectiveness of the bussines and more.
                        The scale and magnitude of the business highly shows the need for the business to incorporate data analysis as a tool to propel the business.
                        if we can value the business interms of goal and its future  growth then talk of thorough predictive , valuation, assumptions, stakeholders involvement, government involvement and some unprobabilistic cause and effects of
                        climate,war and others.
                        The ability to express all the vital of Y is the key and the main goal to solve the analysis step, in other word root cause y = f(x) . Material,Machine,method,manpower,Measurement system and mother nature(environment).
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
                        The idea of continuous improvement is non negotiatable mindset to have. There is no way to say that there is 0 waste in the operation and organisation strategy of existence.
                        The fact there is variation in everything makes the fact that continuous improvement is always in evitable and a process is always a topic to reduce waste.
                        DMAIC a principle win six sigma ensures that we reduce the variation in different sets of data to maximize predictability which inturn works in our favour.
                        
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