import {  SimpleGrid, Text } from '@chakra-ui/react'
import useGame, { Platform } from '../hooks/useGame'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenre';
import { GameQuery } from '../App';


interface Props{
    gameQuery : GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
    
    const {data , error , Loading } = useGame(gameQuery);
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