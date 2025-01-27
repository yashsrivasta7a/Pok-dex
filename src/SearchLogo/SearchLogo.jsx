import React, { useState } from 'react';
import pokedexLogo from '../assets/Pokédex_logo.png';
import './SearchLogo.css';
import Pokemon from '../Components/PokemonData/Pokemon';

function SearchLogo() {
  
  return (
    <div>
      <div className="title">
        <img src={pokedexLogo} alt="Pokédex Logo" />
      </div>
     
    </div>
  );
}

export default SearchLogo;
