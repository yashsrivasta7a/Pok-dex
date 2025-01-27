import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import './Pokemon.css';
import pokedexLogo from '../../assets/Pokédex_logo.png';


function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {

        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
        const data = await res.json();

        const pokemonData = await Promise.all(
          data.results.map(async (current) => {
            const res = await fetch(current.url);
            const pokemonDetails = await res.json();
            return pokemonDetails;
          })
        );

        setPokemon(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);

      }
    };

    fetchPokemon();
  }, []); 

  if(loading){
    return(<div>
        <h1>Wait to catch 'em all</h1>
    </div>)
  }

  return (
    <>
      <section>
      <img src={pokedexLogo} alt="Pokédex Logo" />
        <div>
          <ul>
            {pokemon.map((currentPokemon) => (
              <PokemonCard key={currentPokemon.id} pokemonData={currentPokemon} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Pokemon;
