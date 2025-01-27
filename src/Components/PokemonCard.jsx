import React from 'react'

function PokemonCard({key,pokemonData}) {
  return (
   <li className='pokemon-cards'>{pokemonData.name}</li>
  )
}

export default PokemonCard