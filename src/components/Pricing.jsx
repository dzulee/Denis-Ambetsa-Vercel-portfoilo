import '../css/whyUs.css';

// 1. Import your icon images from the assets folder
import efficiencyIcon from '../assets/efficiency.png';
import qualityIcon from '../assets/quality.png';
import supportIcon from '../assets/support.png';
import integrityIcon from '../assets/integrity.png';

function Pricing() {
  const pricings = [
    {
      icon: efficiencyIcon,
      title: "Tier 1",
      price: "Kes 20,000",
      description: "a well crafted and art designed frontend with smooth and navigation and business details."
    },
    {
      icon: qualityIcon,
      title: "Tier 2",
      price: "Kes 40,000",
      description: "free Email integration on the contact me section to be able to receive emails from website forms."
    },
    {
      icon: supportIcon,
      title: "Tier 3",
      price: "From as low as Kes 60,000",
      description: "REST API website to enable posting and viewing of details"
    },
    {
      icon: integrityIcon,
      title: "Tier 4",
      price: "From as low as Kes 80,000",
      description: "A Full stack website involving backend and frontend, domain name selection ,SEO and SSL managing  ."
    }
  ];

  return (
    <div className="why-us-section pricing-section py-5" id="pricing">
      <div className="container pricing-heading text-center">
        <p className="pricing-eyebrow">Simple, transparent options</p>
        <h2 className="mb-3 text-white">Choose your plan</h2>
        <p className="text-white-50 mb-0">Our standard and affordable pricing for every stage of your digital journey.</p>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {pricings.map((pricing, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4 pricing-column">
              <div className="card pricing-card h-100 text-white">
                <div className="card-body d-flex flex-column">
                  <div className="pricing-card-header">
                    <span className="pricing-icon-shell">
                      <img
                        src={pricing.icon}
                        alt={pricing.title}
                        className="pricing-card-icon"
                      />
                    </span>
                    <span className="pricing-badge">{pricing.title}</span>
                  </div>
                  <h3 className="card-price">{pricing.price}</h3>
                  <p className="pricing-period">PROJECT PACKAGE</p>
                  <div className="pricing-divider" />
                  <p className="card-text pricing-description">{pricing.description}</p>
                  <a href="#contact-form" className="pricing-cta mt-auto">
                    Discuss this plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;