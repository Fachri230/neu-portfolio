
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Achievement from './components/Achievement.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

// Root component: assembles the page from top to bottom.
export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievement />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
