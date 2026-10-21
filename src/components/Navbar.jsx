import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, Shield } from 'lucide-react';
const links = [['hero', 'Home'], ['about', 'About'], ['skills', 'Expertise'], ['projects', 'Projects'], ['contact', 'Contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -55% 0px' });
    links.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <header className="site-header"><nav className="nav-inner" aria-label="Main navigation">
    <a className="nav-logo" href="#hero" onClick={() => setOpen(false)}><span className="logo-mark"><Shield size={19} /></span>sethum<span className="accent">.</span><span className="logo-suffix">/ portfolio</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      <a href="/resume.pdf" download="Sethum_Perera_Resume.pdf" className="nav-resume">Resume <ArrowUpRight size={15} /></a>
    </div>
  </nav></header>;
}
