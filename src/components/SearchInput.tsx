import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import {BsSearch} from 'react-icons/bs'

interface Props{
    onSearchInput : (query : string)=> void;
}

const SearchInput = ({onSearchInput} : Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) onSearchInput(ref.current.value);

        }}>
        <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
        <Input ref={ref} borderRadius={20} placeholder='Seach Games...' variant={'filled'}/>
        </InputGroup>
        </form>
    )
}

export default SearchInput;