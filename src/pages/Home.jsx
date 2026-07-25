// Home.jsx
import React from "react";
import { Services } from "../components/Services";
import { Heroes } from "../components/Heroes";
import { Projects } from "../components/Projects";
import ContactForm from "../components/ContactMe";
import { Navbar } from "../components/Navbar";
import WhyUs from "../components/whyUs";
import backgroundVideo from "../assets/background_video.mp4";

export default function Home() {
    const sectionStyle = {
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '0.75rem',
        paddingBottom: '1.5rem'
    };

    return (
        <div style={{ backgroundColor: 'transparent' }}>
            <section id="Hero" style={{ backgroundColor: 'transparent', position: 'relative', overflow: 'hidden', minHeight: '100vh', paddingTop: '0', paddingBottom: '0', marginTop: '0' }}>
                <video className="section-video-background" autoPlay loop muted playsInline>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="section-video-overlay" />
                <Navbar />
                <Heroes />
            </section>

            {/* Change id to "featured-work" to match your Navbar links */}
            <section id="featured-work" style={{ ...sectionStyle, minHeight: '100vh', paddingTop: '1rem' }}>
                <video className="section-video-background featured-work-video" autoPlay loop muted playsInline preload="auto">
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="section-video-overlay featured-work-overlay" />
                <Projects />
            </section>

            {/* IMPORTANT: Added the id "services" here */}
            <section id="services" className="py-0" style={{ ...sectionStyle, margin: '0', padding: '0', minHeight: '72vh', paddingTop: '1rem' }}>
                <video className="section-video-background" autoPlay loop muted playsInline>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="section-video-overlay" />
                <Services />
            </section>
            <section id="why-us" className="py-0" style={{ ...sectionStyle, margin: '0', padding: '0', minHeight: '72vh', paddingTop: '1rem' }}>
                <video className="section-video-background" autoPlay loop muted playsInline>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="section-video-overlay" />
                <WhyUs />
            </section>


            {/* Change id to "contact-section" to match your Navbar links */}
            <section id="contact-section" style={{ ...sectionStyle, margin: '0', padding: '0', minHeight: '72vh', paddingTop: '1rem' }}>
                <video className="section-video-background" autoPlay loop muted playsInline>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="section-video-overlay" />
                <ContactForm />
            </section>
        </div>
    );
}