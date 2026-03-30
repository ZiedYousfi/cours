import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Formations from './pages/Formations'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
