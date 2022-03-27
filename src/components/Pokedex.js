import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokemonCard from './PokemonCard'

const Pokedex = () => {

  const userName = useSelector(state => state.userName)
  const navigate = useNavigate()

  const [ pokemons, setPokemons] = useState([])
  const [ pokemonName, setPokemonName ] = useState('')


  const [ page, setPage ] = useState(1)
  const itemsNumber = 9
  const lastIndex = page * itemsNumber
  const firstIndex = lastIndex - itemsNumber
  const pokemonsPage = pokemons.slice(firstIndex, lastIndex)


 
  const totalPages = Math.ceil(pokemons?.length / itemsNumber)
  const numberPages = []
    for(let i = 1; i <= totalPages; i++){
      numberPages.push(i)
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126/")
    .then(res => setPokemons(res.data.results))
    
  }, [])
   

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokemons/${pokemonName}`);
  };

  return (
    <div>Pokedex
      
      <p className="welcome-message">Welcome {userName}</p>
      <form className="input-container" onSubmit={submit}>
        <label htmlFor="pokemon-name">Search Name </label>
        <input
          type="text"
          id="pokemon-name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button>Search</button>
      </form>
     
      <ul className="pokemon-list">
        {pokemonsPage.map((pokemon) => (
          <PokemonCard pokemonUrl={pokemon.url} key={pokemon.url} />
        ))}
        
      </ul>

      <div>
        {numberPages.map(page => 
          <button
            key={page} 
            onClick={()=> setPage(page + 1)}>
            {page}
          </button>)}
      </div>

      <button 
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}>
        Previous
      </button>
      
      <button 
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}>
        Next
      </button>
    </div>
  )
}

export default Pokedex