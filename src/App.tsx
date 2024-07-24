import {  Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'


function App() {


  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid templateAreas={{
      lg : `"nav nav" "aside main"`,
      base : `"nav" "main"`
    }}>
      <GridItem area='nav' ><Navbar></Navbar></GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList onSelect={(genre)=> setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area='main' >
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
