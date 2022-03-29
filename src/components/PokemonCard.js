import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const PokemonCard = ({pokemonUrl}) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
      axios.get(pokemonUrl)
        .then(res => setPokemon(res.data))
    }, [pokemonUrl])
    
    console.log(pokemon)

  return (
      
      <div className='pokelist'>
        <div className='pokemon-card'>
          <Link to={`/Pokedex/${pokemon.id}`}>
          <div className='card-list'>
            <p className='pokename'>{pokemon.name}</p>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt=""/>
            </div>
          </Link>
        </div>
      </div>
      
  )
}

export default PokemonCard