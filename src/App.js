import React from 'react';
import { Link } from 'react-router';
import './stylesheets/home.css';
import NavBar from './components/NavBar'
import GifGameCard from './components/GifGameCard'
import MemeGameCard from './components/MemeGameCard'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Memes Vs. Gifs</h1>
      <MemeGameCard />
      <GifGameCard />
    </div>
  );
}
