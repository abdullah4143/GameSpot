import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/day2-gaming-console.png';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


const Navbar = () => {
  return (
    <HStack  justifyContent={'space-between'} padding='10px'>
        <Image src={logo} boxSize={'60px'} p={1}/>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar