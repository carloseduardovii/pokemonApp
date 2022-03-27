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
    <ul>
      <Link to={`/pokedex/${pokemon.id}`}>
        <li><img src={pokemon.img} alt="" /></li>
        <li>{pokemon.name}</li>
      </Link>
    </ul>
  )
}

export default PokemonCard