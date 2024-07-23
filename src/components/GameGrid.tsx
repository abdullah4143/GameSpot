import {  SimpleGrid, Text } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';



const GameGrid = () => {
    
    const {games , error , Loading } = useGame();
    const skeletons = [1,2,3,4,5,6];
    return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:4}} padding={2} overflow='hidden' spacing={2}>


            {Loading && skeletons.map((skeleton)=> <GameCardSkeleton key={skeleton} /> )}
 
            {games.map((game)=> <GameCard key={game.id} game={game}></GameCard>)}
        </SimpleGrid>
    </>
  )
}

export default GameGrid