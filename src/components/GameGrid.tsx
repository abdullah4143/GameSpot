import {  SimpleGrid, Text } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenre';


interface Props{
    selectedGenre : Genre | null;
}

const GameGrid = () => {
    
    const {data , error , Loading } = useGame();
    const skeletons = [1,2,3,4,5,6,7,8];


    return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:4}} padding={2} overflow='hidden' spacing={2}>

            {Loading && skeletons.map((skeleton)=> 
            <GameCardContainer key={skeleton}>
                <GameCardSkeleton  />
            </GameCardContainer>

            )}

             {data.map((game)=>
               <GameCardContainer key={game.id}>
                   <GameCard  game={game}></GameCard>
                </GameCardContainer>
            )}

        </SimpleGrid>
    </>
  )
}

export default GameGrid