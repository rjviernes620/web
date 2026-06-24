import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Jobs from './components/Jobs'
import Recommendations from './components/Recommendations'
import Videos from './components/Videos'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0a0b10] text-[#f3f4f6] min-h-screen selection:bg-indigo-500 selection:text-white">
      {/* Floating Header */}
      <Navbar /> 
      

      {/* Main Sections */}
      <Hero />
      <Projects />
      <Jobs />
      <Recommendations />
      <Videos />
      <Skills />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}
