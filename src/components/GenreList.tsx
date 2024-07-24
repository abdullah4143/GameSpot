import { HStack, Image, List, ListItem, Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre"
import GetCroppedImagedUrl from "../services/GetCroppedImagedUrl";
import GenreListSkeleton from "./GenreListSkeleton";
import useData from "../hooks/useData";


interface Props{
  onSelect : (genre : Genre) => void;
}


const GenreList = ({onSelect} : Props) => {
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const { data , Loading } = useGenre();

  return (
    <>        
      {Loading && <List>{skeletons.map((s)=> <GenreListSkeleton key={s}/>)}</List>}

    <List>
        {data.map(
          (g)=>
        <ListItem key={g.id} paddingY={2}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={3} src={GetCroppedImagedUrl(g.image_background)}/>
            <Button onClick={() => onSelect(g)} variant={'link'}>{g.name}</Button>
          </HStack> 
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList