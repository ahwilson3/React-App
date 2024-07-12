// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <About />
        <Projects/>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;




