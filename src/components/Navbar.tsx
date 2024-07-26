import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/day2-gaming-console.png';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch : (searchText : string) => void;
}

const Navbar = ({onSearch} : Props) => {
  return (
    <HStack  justifyContent={'space-between'} padding='10px'>
        <Image src={logo} boxSize={'60px'} p={1}/>
        <SearchInput onSearchInput={(query) => onSearch(query)} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar