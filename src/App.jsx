import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

export default function App() {
  return <div className="app-container">
    <MatrixBackground />
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main"><Hero /><About /><Skills /><Projects /></main>
    <Footer />
  </div>;
}
