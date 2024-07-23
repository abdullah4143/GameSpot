import { Platform } from "../hooks/useGame";
import {HStack, Icon} from '@chakra-ui/react'
import {FaWindows ,FaPlaystation , FaLinux , FaApple , FaXbox , FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props{
    platforms : Platform[];
}

const PlatformIconList = ({platforms} : Props ) => {
    const iconMap : {[key :string] : IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        linux : FaLinux ,
        mac : FaApple ,
        xbox : FaXbox ,
        android: FaAndroid,
        ios : MdPhoneIphone,
        nintendo : SiNintendo,
        web : BsGlobe

    };

    return (
        <HStack marginY={'10px'}>
        {platforms.map((platform) => <Icon color='gray.500' key={platform.id} as={iconMap[platform.slug]}/>)}
        </HStack>
  )
}

export default PlatformIconList