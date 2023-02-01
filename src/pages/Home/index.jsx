import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import PokemonCard from '../../components/PokemonCard'
import { Container, Grid } from '@mui/material'
import axios from 'axios'

//video 39:10

export const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])


  const getPokemons = () => {
    var endpoints = []
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);

    }
    console.log(endpoints)
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res)).catch((err) => console.error(err));

    const pokemonFilter = (name) => {
      var filteredPokemons = []
      for (var i in pokemons) {
        if (pokemons[i].name.include(name)) {
          filteredPokemons.push(pokemons[i]);
        }
      }
      setPokemons(filteredPokemons);
    }
    /*  axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        console.log(res.data.results)
        setPokemons(res.data.results)
      })
      .catch((err) => console.error(err)); */
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />

      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (<Grid item xs={2} key={key}>
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
          </Grid>))}

        </Grid>
      </Container>
    </div>
  )
}
