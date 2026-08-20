import whatsappIcon from '../assets/whatsapp-brands-solid-full.svg';

const whatsappUrl = 'https://wa.me/254769579340';

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Denis on WhatsApp"
      title="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="" aria-hidden="true" />
    </a>
  );
}