import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props{
    children: ReactNode
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box width={'300px'}  overflow={'hidden'} borderRadius={20} paddingX={2.5} paddingY={1.5}  >
        {children}
    </Box>
  )
}

export default GameCardContainer