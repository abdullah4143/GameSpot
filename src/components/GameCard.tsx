import { Card, CardBody, HStack, Img, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GetCroppedImagedUrl from "../services/GetCroppedImagedUrl";

interface Props{
  game : Game;
}
const GameCard = ({game} : Props) => {
  return (
    <Card >
      <Img src={GetCroppedImagedUrl(game.background_image)}/>
      <CardBody>
        <Text fontSize='2xl' fontWeight={700}>{game.name}</Text>
        <HStack justifyContent={'space-between'}>
        <PlatformIconList platforms={game.parent_platforms.map((p)=>p.platform)}></PlatformIconList>
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
      
    </Card>
  )
}

export default GameCard