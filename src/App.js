import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Research from './components/Research';
import Personal from './components/Personal';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* Sections */}
      <main>
        <About />
        <Research />
        <Personal />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
