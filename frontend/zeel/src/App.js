import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import WeKnowthebest from './components/home/WeKnowthebest';
import YourService from './components/home/YourServices';
import Whychoouseus from './components/home/Chooseus';
// import { useState } from 'react';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <WeKnowthebest />
      <YourService />
      <Whychoouseus />
      <Footer />
    </div>
  );
}

export default App;
