import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pokedex from './Pokedex'

const PokedexInfo = () => {

  const {id} = useParams()
  const [ pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => setPokemon(res.data))
  }, [id])

  return (
    <div>PokedexInfo
      
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt="" />
      <Link to={'/pokedex/'} element={<Pokedex/>}>Return</Link>
    </div>
  )
}

export default PokedexInfo