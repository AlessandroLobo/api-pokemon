import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import PokemonCard from '../../components/PokemonCard'
import { Container, Grid } from '@mui/material'
import axios from 'axios'

export const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])


  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res.data.results)
        setPokemons(res.data.results)
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <Navbar />

      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
