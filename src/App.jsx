import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import Hero from './components/Hero'
import About from './components/About'
import TimelineSection from './components/TimelineSection'
import Projects from './components/Projects'
import CertificatesShowcase from './components/CertificatesShowcase'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ParticleNetwork from './components/ParticleNetwork'
import Navbar from './components/Navbar'
import './styles/App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Scroll progress bar logic
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = progress + '%';
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial update
    handleScroll();
    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div ref={progressBarRef} className="scroll-progress-bar" />
      <CustomCursor />
      <ParticleNetwork />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TimelineSection />
        <Projects />
        <CertificatesShowcase />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
