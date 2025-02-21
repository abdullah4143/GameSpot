import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {  BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import { Platform } from "../hooks/useGame"

interface Props{
  onSelect : (platform : Platform) => void; 
  selectedPlatform : Platform | null;
}


const PlatformSelector = ({onSelect , selectedPlatform} : Props) => {
    const {data , error } = usePlatform(); 

    if (error) return null;


  return (
    <Menu> 
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name :'Platforms'}
        </MenuButton>
        <MenuList>
            {data.map((p)=><MenuItem onClick={()=> onSelect(p)} key={p.id}>{p.name}</MenuItem>)}
            
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector