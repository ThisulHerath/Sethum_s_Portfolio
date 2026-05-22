import { FaFileDownload, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero-content">
        <p style={{ color: 'var(--primary-neon)', margin: 0 }}>System.out.println("Welcome");</p>
        <h1 className="glitch-text">Sethum Perera</h1>
        <div className="hero-subtitle">
          [ Cyber Security Undergraduate ] | [ Data Analytics ] | [ Team Captain & Athlete ]
          <br /><br />
          • BSc (Hons) IT (Cyber Security) – SLIIT<br />
          • BSc (Hons) Industrial Statistics & Mathematical Finance – University of Colombo
        </div>
        <div className="hero-btns">
          <a href="/resume.pdf" download="Sethum_Perera_Resume.pdf" className="cyber-btn">
            <FaFileDownload /> DECRYPT_RESUME.pdf
          </a>
          <a href="https://www.linkedin.com/in/sethum-perera-a5a0a43a6/" target="_blank" rel="noreferrer" className="cyber-btn">
            <FaLinkedin /> INITIALIZE_LINKEDIN
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profilePic} alt="Sethum Perera" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;