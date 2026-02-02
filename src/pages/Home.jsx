// Home.jsx
import React from "react";
import { Services } from "../components/Services";
import { Heroes } from "../components/Heroes";
import { Projects } from "../components/Projects";
import ContactForm from "../components/ContactMe";

export default function Home() {
    return (
        <div>
            <section id="Hero">
                <Heroes />
            </section>

            {/* Change id to "featured-work" to match your Navbar links */}
            <section id="featured-work">
                <Projects />
            </section>

            {/* IMPORTANT: Added the id "services" here */}
            <section id="services" className="py-0" style={{ margin: '0', padding: '0' }}>
                <Services />
            </section>

            {/* Change id to "contact-section" to match your Navbar links */}
            <section id="contact-section" style={{ margin: '0', padding: '0' }}>
                <ContactForm />
            </section>
        </div>
    );
}