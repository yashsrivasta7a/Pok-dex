import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import './Pokemon.css';


function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
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

  if (loading) {
    return (
      <div>
        <h1>Wait to catch 'em all</h1>
      </div>
    );
  }

  const searchPokemon = search
  ? pokemon.filter((currentPokemon) =>
      currentPokemon.name.toLowerCase().includes(search.toLowerCase())
    )
  : pokemon;

  return (
    <section>
       <div>
        <input 
          type="text" 
          placeholder='Search....' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <div>
        <ul className='pokemon-card-list'>
          {searchPokemon.map((currentPokemon) => (
            <PokemonCard key={currentPokemon.id} pokemonData={currentPokemon} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Pokemon;
