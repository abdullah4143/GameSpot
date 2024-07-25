import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {  BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"

const PlatformSelector = () => {
    const {data , error , Loading} = usePlatform();

    if (error) return null;

    if(Loading) return null;

  return (
    <Menu> 
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
        </MenuButton>
        <MenuList>
            {data.map((p)=><MenuItem key={p.id}>{p.name}</MenuItem>)}
            
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector