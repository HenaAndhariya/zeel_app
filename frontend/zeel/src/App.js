import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import About from './components/abotus/Abotus';
import Work from './components/work/Work';
import Services from './components/services/Services';
// import { useState } from 'react';

function App() {

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />  
        <Route path="/Services" element={<Services />} />
        <Route path="/Work" element={<Work />} />  
      </Routes>
      <Footer />
  </>
  );
}

export default App;
