import {  Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformSelector from './components/PlatformSelector'


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
          <GenreList onSelect={(genre)=> setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
        </GridItem>
      </Show>
      <GridItem area='main' >
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
