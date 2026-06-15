import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Impact from './components/Impact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Summary />
        <Experience />
        <Impact />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
