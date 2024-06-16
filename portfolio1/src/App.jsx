
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/skills/Skills'
import About from './components/About/About'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <Navbar />
      <div className="container">
        <section id="Hero">
          <Hero />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="ContactMe">
          <ContactMe />
        </section>
      </div>
      <Footer /> 
    </>
  )
}

export default App
