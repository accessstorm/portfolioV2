import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import Hero from './components/Hero'
import About from './components/About'
import TimelineSection from './components/TimelineSection'
import ProjectsSection from './components/ProjectsSection'
import CertificatesShowcase from './components/CertificatesShowcase'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ParticleNetwork from './components/ParticleNetwork'
import ClickSparks from './components/ClickSparks'
import Navbar from './components/Navbar'
import ResumeButton from './components/ResumeButton'
import './styles/App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const progressBarRef = useRef(null);
  const [loading, setLoading] = useState(() => {
    // Check if we've already shown the loading screen in this session
    const hasShownLoading = sessionStorage.getItem('hasShownLoading');
    return !hasShownLoading;
  });
  const [progress, setProgress] = useState(0);

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

    // Simulate loading for 3-5 seconds
    const duration = 3500 + Math.random() * 1500;
    const start = Date.now();
    let frame;
    function animate() {
      const elapsed = Date.now() - start;
      const percent = Math.min(100, (elapsed / duration) * 100);
      setProgress(percent);
      if (percent < 100) {
        frame = requestAnimationFrame(animate);
      }
    }
    animate();
    const timeout = setTimeout(() => {  
      setLoading(false);
      // Mark that we've shown the loading screen in this session
      sessionStorage.setItem('hasShownLoading', 'true');
    }, duration);
    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    }
  }, [])

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loading-spinner" />
        <h1 className="loading-title">Jayavrata Sengupta</h1>
        <p className="loading-subtitle">Portfolio is loading...</p>
        <div className="loading-progress-bar-outer">
          <div className="loading-progress-bar-inner" style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div ref={progressBarRef} className="scroll-progress-bar" />
      {/* <CustomCursor /> */}
      <ParticleNetwork />
      <ClickSparks />
      <Navbar />
      <ResumeButton />
      <main>
        <Hero />
        <About />
        <TimelineSection />
        <ProjectsSection />
        <CertificatesShowcase />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
