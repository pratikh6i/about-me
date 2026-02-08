import './index.css'
import { SnackbarProvider } from './contexts/SnackbarContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import HairQuiz from './components/HairQuiz'
import Tips from './components/Tips'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <SnackbarProvider>
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Products />
          <HairQuiz />
          <Testimonials />
          <Tips />
          <Gallery />
          <FAQ />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </SnackbarProvider>
  )
}

export default App
