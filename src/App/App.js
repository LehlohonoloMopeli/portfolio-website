import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className='app__header'/>
      <Home className='app__home'/>
      <About className='app__about'/>
      <Skills className='app__skills'/>
      <Portfolio className='app__portfolio'/>
      <Footer />
    </div>
  );
}

export default App;
