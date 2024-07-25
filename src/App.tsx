import {  Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGame'
import SortSelector from './components/SortSelector'

export interface GameQuery{
  genre : Genre | null;
  platform : Platform | null;
}

function App() {

  const [gameQuery , setGameQuery] =useState<GameQuery>({} as GameQuery)
 

  return (
    <Grid templateAreas={{
      lg : `"nav nav" "aside main"`,
      base : `"nav" "main"`
    }}>
      <GridItem area='nav' ><Navbar></Navbar></GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList onSelect={(genre)=> setGameQuery({...gameQuery,genre})} selectedGenre={gameQuery.genre}/>
        </GridItem>
      </Show>
      <GridItem area='main' >
        <Flex marginX={'17px'}  gap={2} paddingY={5}>
        <PlatformSelector onSelect={(platform)=>setGameQuery({...gameQuery,platform})} selectedPlatform={gameQuery.platform} />
        <SortSelector />
        </Flex>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
