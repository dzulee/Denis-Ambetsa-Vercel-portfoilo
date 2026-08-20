import '../css/whyUs.css';

// 1. Import your icon images from the assets folder
import efficiencyIcon from '../assets/efficiency.png';
import qualityIcon from '../assets/quality.png';
import supportIcon from '../assets/support.png';
import integrityIcon from '../assets/integrity.png';

function WhyUs() {
  const reasons = [
    {
      title: "Expertise",
      icon: efficiencyIcon,
      description: "Our team of professionals brings extensive experience and knowledge to every project."
    },
    {
      icon: qualityIcon,
      title: "Quality",
      description: "We are committed to delivering high-quality work that exceeds our clients' expectations."
    },
    {
      icon: supportIcon,
      title: "Support",
      description: "We provide ongoing support and maintenance to ensure our clients' satisfaction."
    },
    {
      icon: integrityIcon,
      title: "Integrity",
      description: "We operate with the highest standards of integrity in all our dealings."
    }
  ];

  return (
    <div className="why-us-section py-5 glass-box">
      <div className="container text-center">
        <p className="why-us-eyebrow">The difference is in the details</p>
        <h2 className="why-us-heading">Built for better outcomes</h2>
        <p className="why-us-intro">Experience, care, and accountability in every decision from the first conversation to the final result.</p>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card why-us-card h-100 bg-dark text-white text-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="why-us-card-number">0{index + 1}</span>
                  <span className="why-us-icon-shell mb-3">
                    <img
                      src={reason.icon}
                      alt={reason.title}
                      className="why-us-icon"
                    />
                  </span>
                  
                  <h5 className="card-title">{reason.title}</h5>
                  <p className="card-text">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
      
        </div>
        <div className="pricing-divider" />
        <div className="why-us-trust row align-items-center mt-4">
          <div className="col-lg-5">
            <p className="why-us-trust-eyebrow">Our promise</p>
            <h2 className="why-us-trust-title">
              Trust built
              <span>on excellence</span>
            </h2>
          </div>
          <div className="col-lg-7">
            <div className="why-us-trust-copy">
              <p>
                Every project deserves thoughtful strategy, clear communication, and work that stands up to scrutiny.
              </p>
              <p>
                We turn your goals into dependable digital solutions, keeping you informed from the first conversation to the final result.
              </p>
              <p>
                With practical expertise and lasting support, we help you move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;