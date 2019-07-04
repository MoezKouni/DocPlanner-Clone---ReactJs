import React from 'react';
import './App.css';
import NavbarComponent from './Navbar';
import Slogan from './Slogan';
import Card from './Card';
import Paragraphe from './Paragraphe';
import Companies from './Companies';
import Stats from './Stats';
import Achievement from './Achievement';
import CardPlaces from './CardPlaces';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Slogan />    
      <Paragraphe />    
      <Card />    
      <Companies />    
      <Stats />    
      <Achievement />    
      <CardPlaces/>   
      <Footer/>   
    </div>
  );
}

export default App;
