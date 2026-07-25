import '../css/whyUs.css';

// 1. Import your icon images from the assets folder
import efficiencyIcon from '../assets/efficiency.png';
import qualityIcon from '../assets/quality.png';
import supportIcon from '../assets/support.png';
import integrityIcon from '../assets/integrity.png';

function WhyUs() {
  const reasons = [
    {
      icon: efficiencyIcon,
      title: "Expertise",
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
        <h2 className="mb-4 text-white">Why Choose Us?</h2>
        <p className="text-white">Here's why our clients trust us with their projects.</p>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 bg-dark text-white text-center">
                <div className="card-body d-flex flex-column align-items-center">
                  
                  {/* 2. Render icon above the title */}
                  <img 
                    src={reason.icon} 
                    alt={reason.title} 
                    className="mb-3" 
                    style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
                  />
                  
                  <h5 className="card-title">{reason.title}</h5>
                  <p className="card-text">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;