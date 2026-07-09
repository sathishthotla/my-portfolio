import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;