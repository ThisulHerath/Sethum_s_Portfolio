import { ArrowUpRight, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
export default function Footer() {
  return <footer id="contact" className="footer-section"><div className="section footer-inner">
    <div className="contact-layout"><div><p className="eyebrow">04 / WHAT’S NEXT?</p><h2>Let’s build something<br /><span>more secure.</span><ArrowUpRight className="contact-arrow" /></h2><p className="contact-intro">Looking for a curious mind on your team? I’m open to internships in Cyber Security, Data Analytics, and Software Engineering.</p><p className="status-badge"><span className="status-dot" /> Available for internship opportunities</p></div>
    <div className="contact-links"><a href="mailto:kohombageperera@gmail.com"><Mail /><span><small>START A CONVERSATION</small>kohombageperera@gmail.com</span><ArrowUpRight /></a><a href="https://www.linkedin.com/in/sethum-perera-a5a0a43a6/" target="_blank" rel="noreferrer"><FaLinkedinIn /><span><small>LET’S CONNECT</small>Find me on LinkedIn</span><ArrowUpRight /></a><a href="tel:+94785459223"><Phone /><span><small>GIVE ME A CALL</small>078 545 9223</span><ArrowUpRight /></a><div className="contact-location"><MapPin size={15} /> Colombo, Sri Lanka</div></div></div>
    <div className="footer-bottom"><a className="nav-logo" href="#hero">sethum<span className="accent">.</span></a><span>© {new Date().getFullYear()} Sethum Perera <span className="footer-credit">· Created by Thisul Herath</span></span><a href="#hero">Back to top <ArrowUp size={14} /></a></div>
  </div></footer>;
}
