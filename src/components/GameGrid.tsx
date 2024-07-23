import {  SimpleGrid, Text } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard';



const GameGrid = () => {
    
    const {games , error } = useGame();

    return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:5}} padding={2} overflow='hidden' spacing={2}>
            {games.map((game)=> <GameCard key={game.id} game={game}></GameCard>)}
        </SimpleGrid>
    </>
  )
}

export default GameGrid