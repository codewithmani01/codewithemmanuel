import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Projects/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Backtotop from './components/backtotop/Backtotop';

function App() {
  return (
    <>
    
      <Navbar />
      <Main />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
