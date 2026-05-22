import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-inner">
        <div className="footer-layout">
          <div className="footer-main-card">
            <p className="footer-chip">INTERNSHIP STATUS: OPEN</p>
            <h2 className="footer-title">&gt; ./contact --internship-ready</h2>
            <p className="footer-intro">
              Currently seeking internship opportunities in Cyber Security, Data Analytics, and Software Engineering.
            </p>
            <p className="footer-focus">
              Preferred Roles: Security Analyst Intern | SOC Intern | Data Analyst Intern | Software Engineering Intern
            </p>
          </div>

          <div className="footer-terminal-card">
            <p className="footer-terminal-head">secure_channel.connect()</p>
            <div className="footer-contact-list">
              <a className="footer-contact-item" href="mailto:kohombageperera@gmail.com">
                <FaEnvelope />
                <span>kohombageperera@gmail.com</span>
              </a>
              <a className="footer-contact-item" href="tel:+94785459223">
                <FaPhoneAlt />
                <span>0785459223</span>
              </a>
              <a
                className="footer-contact-item"
                href="https://www.linkedin.com/in/sethum-perera-a5a0a43a6/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                <span>linkedin.com/in/sethum-perera-a5a0a43a6</span>
              </a>
              <div className="footer-contact-item footer-location">
                <FaMapMarkerAlt />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-copy">Created by Thisul Herath // Copyright {new Date().getFullYear()} Sethum Perera</p>
      </div>
    </footer>
  );
};

export default Footer;
