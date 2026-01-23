import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { ProductMain } from './pages/ProductMain'
import Work from './pages/Work'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductMain />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App