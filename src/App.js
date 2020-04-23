import React, { useState } from 'react';
import './App.css';
import ListOfGifts from './components/ListOfGifts';
import { Link, Route } from "wouter";

export default function App() {

  const [keyword, setKeyword] = useState('panda')

  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword('dota2')}>
          Cambiar Gifts
        </button>
        <h1>App Gifts</h1>

        <Link to='/gif/morty'>Gift de morty</Link>
        <Link to='/gif/dragon'>Gift de dragon</Link>
        <Link to='/gif/frutas'>Gift de frutas</Link>

        <Route path="/gif/:keyword" 
               component={ListOfGifts} />
      </section>
    </div>
  );
}
