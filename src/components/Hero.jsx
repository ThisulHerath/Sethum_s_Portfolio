import { ArrowDown, ArrowUpRight, Download, ShieldCheck, MapPin } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  return <section id="hero" className="hero section">
    <div className="hero-content">
      <p className="status-badge"><span className="status-dot" /> Open to internship opportunities</p>
      <p className="eyebrow hero-eyebrow">CYBER SECURITY · DATA · ENGINEERING</p>
      <h1>Sethum<br /><span>Perera</span><span className="name-period">.</span></h1>
      <p className="hero-statement">A security mindset.<br />An analytical edge.</p>
      <p className="hero-description">Cyber Security undergraduate exploring the intersection of secure systems, intelligent data, and real-world problem solving.</p>
      <div className="hero-btns">
        <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
        <a className="button button-secondary" href="/resume.pdf" download="Sethum_Perera_Resume.pdf"><Download size={16} /> Download CV</a>
      </div>
      <div className="hero-social"><span><MapPin size={14} /> Colombo, Sri Lanka</span><span className="social-divider" /><a href="https://www.linkedin.com/in/sethum-perera-a5a0a43a6/" target="_blank" rel="noreferrer"><FaLinkedinIn /> Let's connect <ArrowUpRight size={13} /></a></div>
    </div>
    <div className="hero-visual">
      <div className="portrait-topline"><span><span className="status-dot" /> PROFILE / 001</span><span>6.9271° N, 79.8612° E</span></div>
      <div className="portrait-frame"><img src={profilePic} alt="Sethum Perera" className="hero-image" fetchPriority="high" /><div className="portrait-shade" /><span className="portrait-corner corner-tl" /><span className="portrait-corner corner-br" />
        <div className="portrait-caption"><span className="eyebrow">DRIVEN BY CURIOSITY</span><span>Built on discipline.</span></div>
      </div>
      <div className="security-note"><span className="security-icon"><ShieldCheck size={23} /></span><div><strong>Think critically. Build securely.</strong><span>Security-focused. Data-driven. Always learning.</span></div><span className="note-cross">+</span></div>
      <div className="portrait-bottomline"><span>CYBER SECURITY UNDERGRADUATE</span><span className="accent">[ SP ]</span></div>
    </div>
    <div className="hero-bottom"><a href="#about"><ArrowDown size={15} /> Scroll to discover</a><span>SECURITY IS A MINDSET, NOT A CHECKBOX.</span></div>
  </section>;
}
