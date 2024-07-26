import { HStack, Image, List, ListItem, Button, Heading } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre"
import GetCroppedImagedUrl from "../services/GetCroppedImagedUrl";
import GenreListSkeleton from "./GenreListSkeleton";


interface Props{
  onSelect : (genre : Genre) => void;
  selectedGenre : Genre | null;
}


const GenreList = ({onSelect , selectedGenre} : Props) => {
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const { data , Loading } = useGenre();

  return (
    <>        
      {Loading && <List>{skeletons.map((s)=> <GenreListSkeleton key={s}/>)}</List>}
    <Heading fontSize={'2xl'} marginBottom={3} ></Heading>
    <List>
        {data.map(
          (g)=>
        <ListItem key={g.id} paddingY={2}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={3} objectFit={'cover'} src={GetCroppedImagedUrl(g.image_background)}/>
            <Button onClick={() => onSelect(g)} fontWeight={selectedGenre?.id === g.id ? 'bold' : 'normal'} variant={'link'}>{g.name}</Button>
          </HStack> 
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList