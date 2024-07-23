import {  Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
function App() {

  return (
    <Grid templateAreas={{
      lg : `"nav nav" "aside main"`,
      base : `"nav" "main"`
    }}>
      <GridItem area='nav' ><Navbar></Navbar></GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg={'orangered'}></GridItem>
      </Show>
      <GridItem area='main' bg={'grey'}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
