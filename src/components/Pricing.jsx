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
    <div className="why-us-section py-5 glass-box">
      <div className="container text-center">
        <h2 className="mb-4 text-white">Pricing</h2>
        <p className="text-white">Our standard and affordable pricing.</p>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {pricings.map((pricing, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 bg-dark text-white text-center">
                <div className="card-body d-flex flex-column align-items-center">
                  
                  {/* 2. Render icon above the title */}
                  <img 
                    src={pricing.icon} 
                    alt={pricing.title} 
                    className="mb-3" 
                    style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
                  />
                  
                  <h5 className="card-title">{pricing.title}</h5>
                  <h3 className='card-price'>{pricing.price}</h3>
                  <p className="card-text">{pricing.description}</p>
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