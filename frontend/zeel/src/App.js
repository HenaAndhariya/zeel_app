import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import About from './components/abotus/Abotus';
// import { useState } from 'react';

function App() {

  return (
    <>
    
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/about" element={<About />} />  
      </Routes>
      <Footer />
  </>
  );
}

export default App;
