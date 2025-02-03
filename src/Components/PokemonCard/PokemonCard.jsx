import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemonData }) {
  const primaryType = pokemonData.types[0].type.name;
  const getColor = (type) => {
    switch (type) {
      case 'fire':
        return 'linear-gradient(45deg, #fba92c, #ff5733)';
      case 'water':
        return 'linear-gradient(45deg, #4392f1, #1e90ff)';
      case 'grass':
        return 'linear-gradient(45deg, #63bb5a, #228b22)';
      case 'electric':
        return 'linear-gradient(45deg, #ffcc00, #ff9900)';
      case 'psychic':
        return 'linear-gradient(45deg, #f95587, #ff66b2)';
      case 'rock':
        return 'linear-gradient(45deg, #b0a125, #d2691e)';
      case 'ghost':
        return 'linear-gradient(45deg, #6f42c1, #8a2be2)';
      default:
        return 'linear-gradient(45deg, #ccc, grey)';
    }
  };

  const cardColor = getColor(primaryType);

  return (
    <section className='pokemon-card' style={{ backgroundImage: cardColor }}>
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        className='pokemon-image'
      />
      <h1 className='pokemon-name'>
        {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
      </h1>
      <div className='pokemon-type'>
        {pokemonData.types.map((type) => type.type.name).join(', ')}
      </div>
      <div className='pokemon-stats'>
        <p><strong>Height:</strong> {pokemonData.height}</p>
        <p><strong>Weight:</strong> {pokemonData.weight}</p>
        <p><strong>Speed:</strong> {pokemonData.stats[5].base_stat}</p>
        <p><strong>Experience:</strong> {pokemonData.base_experience}</p>
        <p><strong>Attack:</strong> {pokemonData.stats[1].base_stat}</p>
        <p><strong>Abilities:</strong> {pokemonData.abilities.map((ability) => ability.ability.name).join(', ')}</p>
      </div>
    </section>
  );
}

export default PokemonCard;
