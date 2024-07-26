import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery : GameQuery;
}

const Title = ({gameQuery} : Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading paddingX={5} as={'h1'}>{heading}</Heading>
  )
}

export default Title